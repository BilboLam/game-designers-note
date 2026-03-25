import { SEARCH_INDEX as NAV_SEARCH_INDEX, pathToId } from './nav.js';

const rawPages = import.meta.glob('../pages/**/*.jsx', { eager: true, query: '?raw', import: 'default' });

const titleById = Object.fromEntries(NAV_SEARCH_INDEX.map((p) => [p.id, p.title]));

function normalizeSpace(s) {
  return s.replace(/\s+/g, ' ').trim();
}

function extractCandidates(src) {
  const withoutImports = src
    .replace(/^\s*import\s+.*$/gm, '')
    .replace(/^\s*export\s+.*$/gm, '');
  const tagText = Array.from(withoutImports.matchAll(/>([^<>{}][^<]*)</g)).map((m) => m[1]);
  return tagText.map(normalizeSpace).filter(Boolean);
}

function tagDelta(line) {
  const opens = Array.from(line.matchAll(/<([A-Za-z][\w]*)\b[^>]*>/g))
    .filter((m) => !m[0].startsWith('</') && !m[0].endsWith('/>')).length;
  const closes = Array.from(line.matchAll(/<\/([A-Za-z][\w]*)>/g)).length;
  return opens - closes;
}

// Split page source into top-level JSX blocks for scoped snippets.
function extractBlockSources(src) {
  const blocks = [];
  let current = [];
  let depth = 0;
  for (const line of src.split('\n')) {
    if (!current.length && !/^ {6}</.test(line)) continue;
    current.push(line);
    depth += tagDelta(line);
    if (depth > 0) continue;
    blocks.push(current.join('\n'));
    current = [];
  }
  return blocks;
}

function buildSearchText(candidates) {
  const uniq = new Set();
  for (const c of candidates) {
    if (c.length < 2) continue;
    if (c.startsWith('./') || c.startsWith('../')) continue;
    uniq.add(c);
  }
  return Array.from(uniq).join(' ');
}

function buildBlocks(src) {
  return extractBlockSources(src)
    .map((blockSrc) => ({ text: buildSearchText(extractCandidates(blockSrc)) }))
    .filter((block) => block.text);
}

export const SEARCH_DOCS_INDEX = Object.keys(rawPages)
  .map((filePath) => {
    const routePath = `/${filePath.replace('../pages/', '').replace('.jsx', '')}`;
    const id = pathToId[routePath] ?? filePath.replace(/^.*\//, '').replace('.jsx', '');
    const title = titleById[id] ?? titleById[filePath.replace(/^.*\//, '').replace('.jsx', '')] ?? id;
    const blocks = buildBlocks(rawPages[filePath]);
    const text = blocks.map((block) => block.text).join('\n');
    return { id, title, text, blocks };
  })
  .filter((p) => p.id && p.title);

