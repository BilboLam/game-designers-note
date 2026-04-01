import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { jsxFileToDoc } from './jsx-to-tiptap.mjs';
import { docToJsxFile } from './tiptap-to-jsx.mjs';
import { findNodeById, insertNode, removeNodeById, buildPathMaps } from './nav-utils.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_DIR = path.join(ROOT, 'src', 'pages');
const NAV_DATA_PATH = path.join(ROOT, 'src', 'config', 'nav-data.json');

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function readNav() {
  return JSON.parse(await fs.readFile(NAV_DATA_PATH, 'utf-8'));
}

async function writeNav(data) {
  await fs.writeFile(NAV_DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

async function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try { resolve(body ? JSON.parse(body) : {}); } catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

function respond(res, data, status = 200) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

function pageFilePath(navPath) {
  return path.join(PAGES_DIR, navPath + '.jsx');
}

// ─── Handlers ─────────────────────────────────────────────────────────────────

async function handleGetNav(_, res) {
  const data = await readNav();
  respond(res, data);
}

async function handlePutNav(req, res) {
  const body = await readBody(req);
  await writeNav(body);
  respond(res, { ok: true });
}

async function handleGetPage(req, res) {
  const id = req.editorId;
  const navData = await readNav();
  const node = findNodeById(navData, id);
  if (!node?.path) return respond(res, { error: 'page not found' }, 404);

  const filePath = pageFilePath(node.path);
  try {
    const source = await fs.readFile(filePath, 'utf-8');
    const doc = jsxFileToDoc(source);
    respond(res, { ok: true, doc, path: node.path, label: node.label });
  } catch {
    respond(res, { error: 'file not found' }, 404);
  }
}

async function handlePutPage(req, res, server) {
  const id = req.editorId;
  const body = await readBody(req);
  const navData = await readNav();
  const node = findNodeById(navData, id);
  if (!node?.path) return respond(res, { error: 'page not found' }, 404);

  const filePath = pageFilePath(node.path);
  let existingSource = null;
  try { existingSource = await fs.readFile(filePath, 'utf-8'); } catch { /* new file */ }

  const jsx = docToJsxFile(body.doc, node.label, existingSource);
  await fs.writeFile(filePath, jsx, 'utf-8');

  // Trigger Vite HMR for the changed file
  server.watcher.emit('change', filePath);
  respond(res, { ok: true });
}

async function handleCreatePage(req, res) {
  const { id, label, path: pagePath, parentId, icon } = await readBody(req);
  if (!id || !label || !pagePath) return respond(res, { error: 'id, label, path required' }, 400);

  const navData = await readNav();
  if (findNodeById(navData, id)) return respond(res, { error: 'id already exists' }, 409);

  // Create JSX file
  const filePath = pageFilePath(pagePath);
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, emptyPageJsx(label), 'utf-8');

  // Insert into nav
  const newNode = { id, label, path: pagePath, ...(icon ? { icon } : {}) };
  insertNode(navData, parentId ?? null, newNode);
  await writeNav(navData);

  respond(res, { ok: true });
}

async function handleDeletePage(req, res) {
  const id = req.editorId;
  const navData = await readNav();
  const node = findNodeById(navData, id);
  if (!node) return respond(res, { error: 'page not found' }, 404);

  // Only delete leaf pages (no children) to be safe
  if (node.children?.length) return respond(res, { error: 'cannot delete page with children' }, 400);

  if (node.path) {
    try { await fs.unlink(pageFilePath(node.path)); } catch { /* file may not exist */ }
  }
  removeNodeById(navData, id);
  await writeNav(navData);
  respond(res, { ok: true });
}

async function handleListImages(_, res) {
  const imagesDir = path.join(ROOT, 'public', 'images');
  try {
    const files = await fs.readdir(imagesDir);
    const images = files.filter((f) => /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(f)).map((f) => `/images/${f}`);
    respond(res, images);
  } catch {
    respond(res, []);
  }
}

// ─── Template ────────────────────────────────────────────────────────────────

function emptyPageJsx(label) {
  const escapedLabel = label.replace(/'/g, "\\'");
  return `import { Breadcrumb, H1, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>${escapedLabel}</H1>
      <P></P>
    </div>
  );
}
`;
}

// ─── Plugin export ────────────────────────────────────────────────────────────

export function editorPlugin() {
  return {
    name: 'editor-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/editor', (req, res, next) => {
        // Parse URL: /api/editor/<resource>[/<id>]
        const urlPath = req.url.split('?')[0].replace(/^\//, '');
        const [resource, ...rest] = urlPath.split('/');
        const id = rest.join('/') || null;

        req.editorId = id;

        const key = `${req.method} ${resource}`;
        const handlers = {
          'GET nav':    handleGetNav,
          'PUT nav':    handlePutNav,
          'GET page':   handleGetPage,
          'PUT page':   handlePutPage,
          'POST page':  handleCreatePage,
          'DELETE page': handleDeletePage,
          'GET images': handleListImages,
        };

        const handler = handlers[key];
        if (!handler) { next(); return; }

        handler(req, res, server).catch((err) => {
          console.error('[editor-api]', err);
          respond(res, { error: String(err) }, 500);
        });
      });
    },
  };
}
