// Generates JSX page files from content/*.md files based on nav.js structure.
import { readFile, writeFile, mkdir, readdir, stat } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CONTENT_DIR = join(ROOT, 'content');
const PAGES_DIR = join(ROOT, 'src', 'pages');
const NAV_FILE = join(ROOT, 'src', 'config', 'nav.js');

// --- Nav loading ---

async function loadNav() {
  const src = await readFile(NAV_FILE, 'utf-8');
  // Extract the NAV array by evaluating the JS module
  const match = src.match(/export const NAV\s*=\s*(\[[\s\S]*?\]);/);
  if (!match) throw new Error('Cannot parse NAV from nav.js');
  // eslint-disable-next-line no-new-func
  return Function(`return ${match[1]}`)();
}

function flattenNav(nodes, result = []) {
  for (const n of nodes) {
    if (n.path) result.push({ id: n.id, path: n.path, label: n.label });
    if (n.children) flattenNav(n.children, result);
  }
  return result;
}

// Build pathToId map from nav nodes
function buildPathToId(nodes, map = {}) {
  for (const n of nodes) {
    if (n.path) map[n.path] = n.id;
    if (n.children) buildPathToId(n.children, map);
  }
  return map;
}

// --- Existing JSX file scanner ---

async function scanJsxFiles(dir, map = {}) {
  const entries = await readdir(dir);
  for (const entry of entries) {
    const full = join(dir, entry);
    const s = await stat(full);
    if (s.isDirectory()) {
      await scanJsxFiles(full, map);
    } else if (extname(entry) === '.jsx' && entry !== 'registry.js') {
      const id = basename(entry, '.jsx');
      map[id] = full;
    }
  }
  return map;
}

// --- MD parsing ---

// Strip icon prefix: e.g. "boltJuice Elements" -> { icon: "bolt", text: "Juice Elements" }
function stripIconPrefix(str) {
  const m = str.match(/^([a-z][a-z0-9-]*)([A-Z].*)/s);
  if (m) return { icon: m[1], text: m[2] };
  return { icon: null, text: str };
}

function decodeEntities(str) {
  return str
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

// Extract anchor id from "[hashtag](#id)" prefix
function stripHashtag(str) {
  const m = str.match(/^\[hashtag\]\(#([^)]*)\)(.*)/s);
  if (m) return { id: m[1] === 'undefined' ? null : m[1], text: m[2].trim() };
  return { id: null, text: str };
}

// Remove bold markers from heading text
function stripBold(str) {
  return str.replace(/\*\*(.*?)\*\*/g, '$1');
}

// Parse inline content: handles ext links, internal links, bold, code
function parseInline(str, pathToId) {
  if (!str) return '';
  str = decodeEntities(str);

  const parts = [];
  // Split on links: [text](url)
  const linkRe = /\[([^\]]*)\]\(([^)]+)\)/g;
  let last = 0, m;
  while ((m = linkRe.exec(str)) !== null) {
    if (m.index > last) parts.push({ type: 'text', value: str.slice(last, m.index) });
    const rawText = m[1];
    const url = m[2];
    // Strip known trailing icon names from link text (e.g. arrow-up-right)
    const cleanText = rawText.replace(/(?:arrow-up-right|chevron-right|chevron-left|external-link)$/, '').trim();
    if (url.startsWith('http')) {
      parts.push({ type: 'extlink', href: url, text: cleanText || rawText });
    } else if (url.startsWith('/game-designers-note/')) {
      const path = url.replace('/game-designers-note/', '').replace(/^\//, '');
      const id = pathToId[path] || null;
      parts.push({ type: 'intlink', id, path, text: cleanText || rawText });
    } else {
      parts.push({ type: 'text', value: rawText });
    }
    last = m.index + m[0].length;
  }
  if (last < str.length) parts.push({ type: 'text', value: str.slice(last) });

  return parts;
}

function inlineToJsx(parts, go = true) {
  if (typeof parts === 'string') {
    parts = [{ type: 'text', value: parts }];
  }
  if (!Array.isArray(parts)) return '';

  return parts.map(p => {
    if (p.type === 'extlink') return `<ExtLink href="${escJsx(p.href)}">${escText(p.text)}</ExtLink>`;
    if (p.type === 'intlink') {
      if (p.id) return `<InternalLink id="${escJsx(p.id)}"${go ? ' go={go}' : ''}>${escText(p.text)}</InternalLink>`;
      return escText(p.text);
    }
    // type === 'text': escape special chars first, then apply **bold** and `code`
    let v = p.value;
    v = v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\{/g, "{'{'}" ).replace(/\}/g, "{'}'}");
    v = v.replace(/\*\*(.*?)\*\*/gs, (_, t) => `<strong>${t}</strong>`);
    v = v.replace(/`([^`]+)`/g, (_, t) => `<Code>${t}</Code>`);
    return v;
  }).join('');
}

function escJsx(str) {
  return str.replace(/"/g, '&quot;');
}

function escText(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, "{'{'}")
    .replace(/\}/g, "{'}'}");
}

// Parse breadcrumb lines at top of md file
// Returns { crumbs: [{label, id}], linesConsumed } — skips blank lines between items
function parseBreadcrumbs(lines, pathToId) {
  const crumbs = [];
  let k = 0, linesConsumed = 0;
  while (k < lines.length) {
    const line = lines[k];
    if (line.trim() === '') { k++; continue; }
    // Match "- [iconLabel](...)" or "N. [iconLabel](...)chevron-right"
    const m = line.match(/^(?:-|\d+\.)\s+\[([^\]]*)\]\(\/game-designers-note\/([^)]*)\)(chevron-right)?$/);
    if (!m) break;
    k++;
    linesConsumed = k;
    const rawLabel = m[1];
    const path = m[2].replace(/^\//, '');
    const { text: label } = stripIconPrefix(rawLabel);
    const id = pathToId[path] || null;
    const isAncestor = !!m[3];
    crumbs.push({ label: decodeEntities(label), id: isAncestor ? id : null });
  }
  return { crumbs, linesConsumed };
}

// Main md parser: returns { breadcrumbs, h1Icon, h1Text, nodes }
function parseMd(content, pathToId) {
  const raw = content.split('\n');
  let i = 0;

  // Skip YAML frontmatter
  if (raw[i] === '---') {
    i++;
    while (i < raw.length && raw[i] !== '---') i++;
    i++; // skip closing ---
  }

  // Skip blank lines
  while (i < raw.length && raw[i].trim() === '') i++;

  // Parse breadcrumbs
  const { crumbs: breadcrumbs, linesConsumed } = parseBreadcrumbs(raw.slice(i), pathToId);
  i += linesConsumed;

  // Skip blank lines
  while (i < raw.length && raw[i].trim() === '') i++;

  // Parse H1
  let h1Icon = null, h1Text = '';
  if (i < raw.length && raw[i].startsWith('# ')) {
    const raw1 = raw[i].slice(2).trim();
    const { icon, text } = stripIconPrefix(raw1);
    h1Icon = icon;
    h1Text = decodeEntities(text);
    i++;
  }

  // First pass: normalize blockquote lines before splitting, so `> #### heading` becomes
  // a plain heading and won't be wrongly split by the hashtag splitter below.
  const bqNormalized = [];
  for (const rawLine of raw.slice(i)) {
    if (rawLine.startsWith('>')) {
      const stripped = rawLine.replace(/^(>\s*)+/, '').trim();
      if (!stripped) { bqNormalized.push(''); continue; }
      if (/^#{1,4}\s/.test(stripped)) { bqNormalized.push(stripped); continue; }
      bqNormalized.push(`__BQ__ ${stripped}`);
    } else {
      bqNormalized.push(rawLine);
    }
  }

  // Second pass: split lines with embedded ## headings. Skip # and __BQ__ lines.
  const processedLines = [];
  for (const line of bqNormalized) {
    if (/^\s*#/.test(line) || line.startsWith('__BQ__')) {
      processedLines.push(line);
    } else {
      const parts = line.split(/(?<![#])(?=#{2,4}\s*\[hashtag\]\()/);
      for (const part of parts) processedLines.push(part);
    }
  }

  // Parse body
  const nodes = [];
  let pendingCallout = null; // { id, text } - waiting for next paragraph

  for (let j = 0; j < processedLines.length; j++) {
    const line = processedLines[j];

    // Skip footer nav line
    if (/\[Previous.*chevron-left\]/.test(line) && /Last updated/.test(line)) continue;
    if (/\[Previous.*chevron-left\]/.test(line)) continue;
    if (/Last updated/.test(line) && line.length < 40) continue;

    // Blank line
    if (line.trim() === '') {
      if (pendingCallout) { nodes.push({ type: 'callout', ...pendingCallout, content: '' }); pendingCallout = null; }
      continue;
    }

    // Callout prefix: "circle-info#### ..."
    if (line.startsWith('circle-info')) {
      const rest = line.slice('circle-info'.length);
      const { id, text } = stripHashtag(rest.replace(/^#+\s*/, ''));
      pendingCallout = { id, text: decodeEntities(stripBold(text)) };
      continue;
    }

    // Headings (####, ###, ## in order so #### matches before ##)
    const h4m = line.match(/^####\s+(?:\[hashtag\]\(#([^)]*)\))?\s*(.*)/);
    const h3m = !h4m && line.match(/^###\s+(?:\[hashtag\]\(#([^)]*)\))?\s*(.*)/);
    const h2m = !h4m && !h3m && line.match(/^##\s+(?:\[hashtag\]\(#([^)]*)\))?\s*(.*)/);

    if (h4m) {
      if (pendingCallout) { nodes.push({ type: 'callout', ...pendingCallout, content: '' }); pendingCallout = null; }
      const id = h4m[1] && h4m[1] !== 'undefined' ? h4m[1] : null;
      const text = decodeEntities(stripBold(h4m[2].trim()));
      if (text) nodes.push({ type: 'h3', id, text });
      continue;
    }
    if (h3m) {
      if (pendingCallout) { nodes.push({ type: 'callout', ...pendingCallout, content: '' }); pendingCallout = null; }
      const id = h3m[1] && h3m[1] !== 'undefined' ? h3m[1] : null;
      const text = decodeEntities(stripBold(h3m[2].trim()));
      if (text) nodes.push({ type: 'h3', id, text });
      continue;
    }
    if (h2m) {
      if (pendingCallout) { nodes.push({ type: 'callout', ...pendingCallout, content: '' }); pendingCallout = null; }
      const id = h2m[1] && h2m[1] !== 'undefined' ? h2m[1] : null;
      const text = decodeEntities(stripBold(h2m[2].trim()));
      if (text) nodes.push({ type: 'h2', id, text });
      continue;
    }

    // Blockquote paragraph
    if (line.startsWith('__BQ__ ')) {
      if (pendingCallout) { nodes.push({ type: 'callout', ...pendingCallout, content: '' }); pendingCallout = null; }
      const text = decodeEntities(line.slice(7).trim());
      if (text) nodes.push({ type: 'blockquote', text });
      continue;
    }

    // Checkbox list — consume consecutive checkbox lines
    const ckm = line.match(/^[*-]\s+\[([ x])\]\s+(.*)/);
    if (ckm) {
      if (pendingCallout) { nodes.push({ type: 'callout', ...pendingCallout, content: '' }); pendingCallout = null; }
      const items = [{ checked: ckm[1] === 'x', text: decodeEntities(ckm[2].trim()) }];
      while (j + 1 < processedLines.length) {
        const nxt = processedLines[j + 1].match(/^[*-]\s+\[([ x])\]\s+(.*)/);
        if (!nxt) break;
        items.push({ checked: nxt[1] === 'x', text: decodeEntities(nxt[2].trim()) });
        j++;
      }
      nodes.push({ type: 'checkboxlist', items });
      continue;
    }

    // Ordered list — consume consecutive `N. ` lines, skipping blank lines between items
    const olm = line.match(/^\d+\.\s+(.*)/);
    if (olm) {
      if (pendingCallout) { nodes.push({ type: 'callout', ...pendingCallout, content: '' }); pendingCallout = null; }
      const items = [decodeEntities(olm[1].trim())];
      let k = j + 1;
      while (k < processedLines.length) {
        if (processedLines[k].trim() === '') { k++; continue; }
        const nxt = processedLines[k].match(/^\d+\.\s+(.*)/);
        if (!nxt) break;
        items.push(decodeEntities(nxt[1].trim()));
        j = k;
        k++;
      }
      nodes.push({ type: 'ol', items });
      continue;
    }

    // List item — consume consecutive list lines
    if (line.match(/^-\s+/)) {
      if (pendingCallout) { nodes.push({ type: 'callout', ...pendingCallout, content: '' }); pendingCallout = null; }
      const items = [];
      while (j < processedLines.length && processedLines[j].match(/^-\s+/)) {
        items.push(decodeEntities(processedLines[j].replace(/^-\s+/, '').trim()));
        j++;
      }
      j--; // the for loop will j++ again
      nodes.push({ type: 'ul', items });
      continue;
    }

    // Paragraph / callout content
    const text = decodeEntities(line.trim());
    if (text) {
      if (pendingCallout) {
        nodes.push({ type: 'callout', id: pendingCallout.id, text: pendingCallout.text, content: text });
        pendingCallout = null;
      } else {
        nodes.push({ type: 'p', text });
      }
    }
  }

  if (pendingCallout) nodes.push({ type: 'callout', ...pendingCallout, content: '' });

  return { breadcrumbs, h1Icon, h1Text, nodes };
}

// --- JSX generation ---

function nodeToJsx(node, pathToId) {
  if (node.type === 'h2') {
    const idAttr = node.id ? ` id="${node.id}"` : '';
    return `      <H2${idAttr}>${inlineToJsx(parseInline(node.text, pathToId))}</H2>`;
  }
  if (node.type === 'h3') {
    const idAttr = node.id ? ` id="${node.id}"` : '';
    return `      <H3${idAttr}>${inlineToJsx(parseInline(node.text, pathToId))}</H3>`;
  }
  if (node.type === 'p') {
    const inline = inlineToJsx(parseInline(node.text, pathToId));
    return `      <P>${inline}</P>`;
  }
  if (node.type === 'ul') {
    const items = node.items.map(item => {
      const inline = inlineToJsx(parseInline(item, pathToId));
      return `        <LI>${inline}</LI>`;
    }).join('\n');
    return `      <UL>\n${items}\n      </UL>`;
  }
  if (node.type === 'callout') {
    const label = node.text ? `\n        <span>${escText(node.text)}</span>` : '';
    const body = node.content ? ` <span>${inlineToJsx(parseInline(node.content, pathToId))}</span>` : '';
    return `      <Callout type="info">${label}${body}\n      </Callout>`;
  }
  if (node.type === 'blockquote') {
    return `      <Blockquote>${inlineToJsx(parseInline(node.text, pathToId))}</Blockquote>`;
  }
  if (node.type === 'checkboxlist') {
    const items = node.items.map(item => {
      const inline = inlineToJsx(parseInline(item.text, pathToId));
      return `        <CheckItem${item.checked ? ' checked' : ''}>${inline}</CheckItem>`;
    }).join('\n');
    return `      <CheckList>\n${items}\n      </CheckList>`;
  }
  if (node.type === 'ol') {
    const items = node.items.map(item => {
      const inline = inlineToJsx(parseInline(item, pathToId));
      return `        <LI>${inline}</LI>`;
    }).join('\n');
    return `      <OL>\n${items}\n      </OL>`;
  }
  return '';
}

// Determine which imports are needed
function collectImports(nodes, h1Icon, breadcrumbs, hasInternalLinks, hasExtLinks, hasCode) {
  const comps = new Set(['H1', 'Breadcrumb']);
  if (h1Icon) comps.add('Icon');
  for (const n of nodes) {
    if (n.type === 'h2') comps.add('H2');
    if (n.type === 'h3') comps.add('H3');
    if (n.type === 'p') comps.add('P');
    if (n.type === 'ul') { comps.add('UL'); comps.add('LI'); }
    if (n.type === 'callout') comps.add('Callout');
    if (n.type === 'blockquote') comps.add('Blockquote');
    if (n.type === 'checkboxlist') { comps.add('CheckList'); comps.add('CheckItem'); }
    if (n.type === 'ol') { comps.add('OL'); comps.add('LI'); }
  }
  if (hasExtLinks) comps.add('ExtLink');
  if (hasInternalLinks) comps.add('InternalLink');
  if (hasCode) comps.add('Code');

  const uiComps = [...comps].filter(c => c !== 'Icon').sort();
  const hasIcon = comps.has('Icon');
  return { uiComps, hasIcon };
}

function generateJsx(parsed, pathToId) {
  const { breadcrumbs, h1Icon, h1Text, nodes } = parsed;

  // Check inline usage
  let hasExtLinks = false, hasInternalLinks = false, hasCode = false;
  const allText = nodes.map(n => {
    if (n.type === 'p' || n.type === 'h2' || n.type === 'h3' || n.type === 'blockquote') return n.text;
    if (n.type === 'ul') return n.items.join(' ');
    if (n.type === 'checkboxlist') return n.items.map(i => i.text).join(' ');
    if (n.type === 'ol') return n.items.join(' ');
    return '';
  }).join(' ');
  if (/https?:\/\//.test(allText)) hasExtLinks = true;
  if (/\/game-designers-note\//.test(allText)) hasInternalLinks = true;
  if (/`[^`]+`/.test(allText)) hasCode = true;

  const { uiComps, hasIcon } = collectImports(nodes, h1Icon, breadcrumbs, hasInternalLinks, hasExtLinks, hasCode);

  const crumbsStr = breadcrumbs.length
    ? `[${breadcrumbs.map(c => c.id ? `{ label: '${c.label.replace(/'/g, "\\'")}', id: '${c.id}' }` : `{ label: '${c.label.replace(/'/g, "\\'")}' }`).join(', ')}]`
    : '[]';

  const bodyLines = nodes.map(n => nodeToJsx(n, pathToId)).filter(Boolean);

  const iconJsx = h1Icon ? `<Icon name="${h1Icon}" className="page-icon" />` : '';

  const lines = [
    "import React from 'react';",
    `import { ${uiComps.join(', ')} } from '@/components/ui.jsx';`,
    hasIcon ? "import { Icon } from '@/components/Icon.jsx';" : null,
    '',
    'export default function Page({ go }) {',
    '  return (',
    '    <div>',
    `      <Breadcrumb crumbs={${crumbsStr}} go={go} />`,
    `      <H1>${iconJsx}${escText(h1Text)}</H1>`,
    ...bodyLines,
    '    </div>',
    '  );',
    '}',
  ].filter(l => l !== null);

  return lines.join('\n') + '\n';
}

// --- Main ---

// Inject icon fields into NAV tree nodes based on iconMap { id → icon }
function injectIcons(nodes, iconMap) {
  for (const n of nodes) {
    if (n.path && iconMap[n.id] !== undefined) {
      if (iconMap[n.id]) n.icon = iconMap[n.id];
      else delete n.icon;
    }
    if (n.children) injectIcons(n.children, iconMap);
  }
}

async function main() {
  const nav = await loadNav();
  const navNodes = flattenNav(nav);
  const pathToId = buildPathToId(nav);
  const existingJsx = await scanJsxFiles(PAGES_DIR);

  let updated = 0, created = 0, skipped = 0;
  const iconMap = {}; // id → icon name or null

  for (const { id, path, label } of navNodes) {
    const mdPath = join(CONTENT_DIR, ...path.split('/')) + '.md';
    let mdContent;
    try {
      mdContent = await readFile(mdPath, 'utf-8');
    } catch {
      console.log(`  SKIP  [no content] ${path}`);
      skipped++;
      continue;
    }

    // Find target JSX
    let targetJsx = existingJsx[id];
    if (!targetJsx) {
      // Create at src/pages/{path}.jsx
      targetJsx = join(PAGES_DIR, ...path.split('/')) + '.jsx';
      await mkdir(dirname(targetJsx), { recursive: true });
      console.log(`  NEW   ${path} → ${targetJsx.replace(PAGES_DIR, 'pages')}`);
      created++;
    } else {
      updated++;
    }

    const parsed = parseMd(mdContent, pathToId);
    if (!parsed.h1Text) parsed.h1Text = label;
    iconMap[id] = parsed.h1Icon || null;
    const jsx = generateJsx(parsed, pathToId);

    await writeFile(targetJsx, jsx, 'utf-8');
    console.log(`  OK    [${id}] ${path}`);
  }

  // Write icons back into nav.js, preserving everything after the NAV array
  injectIcons(nav, iconMap);
  const originalNav = await readFile(NAV_FILE, 'utf-8');
  // Find the suffix starting from the first line after the NAV closing ];
  const navEndIdx = originalNav.indexOf('\nexport const SEARCH_INDEX');
  const suffix = navEndIdx >= 0 ? originalNav.slice(navEndIdx) : '';
  const navSrc = `export const NAV = ${JSON.stringify(nav, null, 2)};${suffix}`;
  await writeFile(NAV_FILE, navSrc, 'utf-8');
  const iconCount = Object.values(iconMap).filter(Boolean).length;
  console.log(`\nDone: ${updated} updated, ${created} created, ${skipped} skipped. Icons injected: ${iconCount}.`);
}

main().catch(err => { console.error(err); process.exit(1); });
