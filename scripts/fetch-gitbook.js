// Fetches all GitBook pages and saves them as markdown files in content/
import { writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, '..', 'content');
const BASE_URL = 'https://coffwee.gitbook.io/game-designers-note';
const DELAY_MS = 400;

// All paths extracted from src/data/nav.js
const PATHS = [
  '',
  'gameplay-design',
  'gameplay-design/emergent-gameplay',
  'gameplay-design/emergent-gameplay/complex-systems',
  'gameplay-design/game-vision',
  'gameplay-design/game-vision/checklist',
  'gameplay-design/game-vision/game-loop',
  'gameplay-design/specific-systems',
  'gameplay-design/specific-systems/core-systems',
  'gameplay-design/specific-systems/core-systems/action-games',
  'gameplay-design/specific-systems/core-systems/action-games/enemy',
  'gameplay-design/specific-systems/core-systems/action-games/enemy/boss',
  'gameplay-design/specific-systems/core-systems/action-games/enemy/boss/boss-design',
  'gameplay-design/specific-systems/core-systems/action-games/enemy/boss/boss-design/boss-attacks',
  'gameplay-design/specific-systems/core-systems/action-games/enemy/boss/boss-design/boss-reaction',
  'gameplay-design/specific-systems/core-systems/action-games/enemy/boss/boss-design/boss-types',
  'gameplay-design/specific-systems/core-systems/action-games/enemy/boss/boss-design/stagger-system',
  'gameplay-design/specific-systems/core-systems/action-games/enemy/boss/multiple-bosses',
  'gameplay-design/specific-systems/core-systems/action-games/enemy/mob',
  'gameplay-design/specific-systems/core-systems/action-games/player',
  'gameplay-design/specific-systems/core-systems/action-games/player/actions',
  'gameplay-design/specific-systems/core-systems/action-games/player/platformer',
  'gameplay-design/specific-systems/core-systems/card-games',
  'gameplay-design/specific-systems/core-systems/card-games/balancing',
  'gameplay-design/specific-systems/core-systems/card-games/card-design',
  'gameplay-design/specific-systems/core-systems/card-games/end-turn-resolution',
  'gameplay-design/specific-systems/core-systems/detective-games',
  'gameplay-design/specific-systems/core-systems/puzzle-games',
  'gameplay-design/specific-systems/core-systems/tactic-system',
  'gameplay-design/specific-systems/more-systems',
  'gameplay-design/specific-systems/more-systems/dice-system',
  'gameplay-design/specific-systems/more-systems/engineering-system',
  'gameplay-design/specific-systems/more-systems/minigame-system',
  'gameplay-design/specific-systems/more-systems/multiplayer',
  'gameplay-design/specific-systems/more-systems/negotiation-system',
  'gameplay-design/specific-systems/more-systems/partner-system',
  'gameplay-design/specific-systems/more-systems/partner-system/parallel-presence',
  'gameplay-design/specific-systems/supporting-systems',
  'gameplay-design/specific-systems/supporting-systems/achievement-system',
  'gameplay-design/specific-systems/supporting-systems/animation-system',
  'gameplay-design/specific-systems/supporting-systems/death-system',
  'gameplay-design/specific-systems/supporting-systems/home',
  'gameplay-design/specific-systems/supporting-systems/map-system',
  'gameplay-design/specific-systems/supporting-systems/moving-system',
  'gameplay-design/specific-systems/supporting-systems/progression-system',
  'gameplay-design/specific-systems/supporting-systems/randomness',
  'gameplay-design/system-review',
  'gameplay-design/system-review/intuitive-design',
  'gameplay-design/system-review/self-check',
  'game-experience',
  'game-experience/8-funs',
  'game-experience/8-funs/challenge',
  'game-experience/8-funs/challenge/depth-of-gameplay',
  'game-experience/8-funs/challenge/flavors-of-difficulty',
  'game-experience/8-funs/challenge/flavors-of-difficulty/physical',
  'game-experience/8-funs/challenge/flavors-of-difficulty/reasoning',
  'game-experience/8-funs/challenge/how-difficult',
  'game-experience/8-funs/challenge/how-difficult/control-difficulty',
  'game-experience/8-funs/challenge/how-difficult/how-our-brain-works',
  'game-experience/8-funs/discovery',
  'game-experience/8-funs/discovery/curiosity',
  'game-experience/8-funs/discovery/curiosity/building-curiosity',
  'game-experience/8-funs/discovery/curiosity/extra-content',
  'game-experience/8-funs/discovery/curiosity/objects-of-curiosity',
  'game-experience/8-funs/discovery/curiosity/rewarding-exploration',
  'game-experience/8-funs/discovery/the-eureka-moment',
  'game-experience/8-funs/expression',
  'game-experience/8-funs/expression/player-agency',
  'game-experience/8-funs/sensation',
  'game-experience/8-funs/submission',
  'game-experience/game-feel',
  'game-experience/game-feel/fluidity',
  'game-experience/game-feel/fluidity/input-and-controls',
  'game-experience/game-feel/fluidity/time-scale',
  'game-experience/game-feel/juice-elements',
  'game-experience/game-feel/readability',
  'game-experience/other-experience',
  'game-experience/other-experience/horror-and-discomfort',
  'game-experience/other-experience/horror-and-discomfort/creating-unease',
  'game-experience/other-experience/horror-and-discomfort/creating-unease/uncanny-valley',
  'game-experience/other-experience/horror-and-discomfort/creating-unease/unknown',
  'game-experience/other-experience/horror-and-discomfort/types-of-fear',
  'game-experience/the-magic-circle',
  'game-experience/the-magic-circle/expectation-management',
  'game-experience/the-magic-circle/feedback-loops',
  'game-experience/the-magic-circle/flow-state',
  'game-experience/the-magic-circle/flow-state/match-difficulty-with-player-growth',
  'game-experience/the-magic-circle/flow-state/match-difficulty-with-player-growth/player-progression',
  'game-development',
  'game-development/bug-handling',
  'game-development/structure',
  'level-design',
  'level-design/design-process',
  'level-design/design-process/blockout',
  'level-design/design-process/plan',
  'level-design/design-process/review',
  'level-design/design-process/sketch',
  'level-design/guidance',
  'level-design/guidance/macro-guidance',
  'level-design/guidance/micro-guidance',
  'level-design/guidance/tutorial-levels',
  'level-design/layout',
  'level-design/layout/cognitive-map',
  'level-design/layout/cognitive-map/coginitive-map-elements',
  'level-design/layout/cognitive-map/waytracking-disruptions',
  'level-design/layout/level-components',
  'level-design/layout/level-components/layout-patterns',
  'level-design/layout/level-components/layout-patterns/functional-patterns',
  'level-design/layout/level-components/level-elements',
  'level-design/layout/map-hierarchy',
  'level-design/layout/verticality',
  'level-design/layout/verticality/stairs',
  'level-design/pacing',
  'level-design/pacing/circulation',
  'level-design/pacing/circulation/circulation-elements',
  'level-design/pacing/circulation/circulation-patterns',
  'level-design/pacing/circulation/pace-control',
  'level-design/pacing/circulation/pace-control/psychology',
  'level-design/pacing/game-beat',
  'level-design/pacing/game-beat/common-beat-elements',
  'level-design/pacing/game-beat/design-beat-by-need',
  'level-design/pacing/game-beat/game-beat-examples',
  'level-design/pacing/game-beat/open-world',
  'level-design/puzzle-design',
  'level-design/reward-and-exploration',
  'level-design/reward-and-exploration/collectibles',
  'level-design/reward-and-exploration/lock-and-key',
  'level-design/reward-and-exploration/rewards',
  'narrative-design',
  'narrative-design/moral',
  'narrative-design/moral/descrimination',
  'narrative-design/moral/violence',
  'narrative-design/narrative-structure',
  'narrative-design/narrative-structure/narrative-elements',
  'narrative-design/narrative-structure/narrative-patterns',
  'narrative-design/narrative-structure/narrative-patterns/emergent-narrative',
  'narrative-design/narrative-structure/narrative-patterns/fragmented-narrative',
  'narrative-design/narrative-structure/narrative-patterns/linear-narrative',
  'narrative-design/narrative-structure/narrative-patterns/multi-thread-narrative',
  'narrative-design/narrative-structure/narrative-patterns/multi-thread-narrative/branching-structures',
  'narrative-design/narrative-structure/narrative-timing',
  'narrative-design/narrative-structure/suspense',
  'narrative-design/player-and-character',
  'narrative-design/player-and-character/character-design',
  'narrative-design/player-and-character/character-design/emotional-link',
  'narrative-design/player-and-character/character-design/grounded-characters',
  'narrative-design/player-and-character/character-design/grounded-characters/dialogue',
  'narrative-design/player-and-character/character-design/grounded-characters/dialogue/character-through-dialogue',
  'narrative-design/player-and-character/character-design/grounded-characters/dialogue/exposition-through-dialogue',
  'narrative-design/player-and-character/character-design/protagonist-tone',
  'narrative-design/player-and-character/character-design/world-building',
  'narrative-design/world-building',
  'narrative-design/world-building/level-design',
  'narrative-design/world-building/where-to-start',
  'narrative-design/world-building/world-authenticity',
  'appendix',
  'appendix/books-to-read',
  'appendix/tools',
  'celeste-and-forgiveness',
];

// --- Text extraction helpers ---

function getLeafText(node) {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (node.object === 'text' || node.object === 'leaf') {
    let text = node.text || node.leaves?.map(l => l.text).join('') || '';
    if (node.marks) {
      for (const m of node.marks) {
        if (m.type === 'bold') text = `**${text}**`;
        else if (m.type === 'italic') text = `*${text}*`;
        else if (m.type === 'code') text = `\`${text}\``;
        else if (m.type === 'strikethrough') text = `~~${text}~~`;
      }
    }
    return text;
  }
  if (Array.isArray(node)) return node.map(getLeafText).join('');
  if (node.leaves) return node.leaves.map(getLeafText).join('');
  if (node.nodes) return node.nodes.map(getLeafText).join('');
  if (node.children) return node.children.map(getLeafText).join('');
  return '';
}

function inlineNodes(nodes) {
  return (nodes || []).map(n => {
    if (n.object === 'text' || n.object === 'leaf') return getLeafText(n);
    if (n.type === 'link') {
      const text = inlineNodes(n.nodes || n.children);
      const href = n.data?.href || n.data?.url || '';
      return href ? `[${text}](${href})` : text;
    }
    return inlineNodes(n.nodes || n.children || []);
  }).join('');
}

// --- Block to markdown converter ---

function blockToMd(block, depth = 0) {
  const type = block.type;
  const nodes = block.nodes || block.children || [];
  const data = block.data || {};

  if (type === 'heading-1') return `# ${inlineNodes(nodes)}\n`;
  if (type === 'heading-2') return `## ${inlineNodes(nodes)}\n`;
  if (type === 'heading-3') return `### ${inlineNodes(nodes)}\n`;
  if (type === 'heading-4') return `#### ${inlineNodes(nodes)}\n`;
  if (type === 'paragraph') {
    const text = inlineNodes(nodes);
    return text ? `${text}\n` : '';
  }
  if (type === 'blockquote' || type === 'quote') {
    const inner = nodes.map(n => blockToMd(n, depth)).join('').trim();
    return inner.split('\n').map(l => `> ${l}`).join('\n') + '\n';
  }
  if (type === 'hint' || type === 'callout') {
    const style = data.style || data.type || 'info';
    const icon = style === 'warning' ? '⚠️ Warning' : style === 'danger' ? '🔴 Danger' : style === 'success' ? '✅ Success' : '📘 Info';
    const inner = nodes.map(n => blockToMd(n, depth)).join('').trim();
    return inner.split('\n').map((l, i) => i === 0 ? `> **${icon}:** ${l}` : `> ${l}`).join('\n') + '\n';
  }
  if (type === 'unordered-list' || type === 'bulleted-list') {
    return nodes.map(n => convertListItem(n, '-', depth)).join('');
  }
  if (type === 'ordered-list' || type === 'numbered-list') {
    return nodes.map((n, i) => convertListItem(n, `${i + 1}.`, depth)).join('');
  }
  if (type === 'list-item' || type === 'list_item') {
    return `- ${inlineNodes(nodes)}\n`;
  }
  if (type === 'code' || type === 'code-block') {
    const lang = data.language || data.syntax || '';
    const text = getLeafText(block);
    return `\`\`\`${lang}\n${text}\n\`\`\`\n`;
  }
  if (type === 'divider' || type === 'horizontal-rule') return `---\n`;
  if (type === 'image') {
    const src = data.src || data.url || '';
    const alt = data.alt || '';
    return src ? `![${alt}](${src})\n` : '';
  }
  if (type === 'embed' || type === 'file') {
    const url = data.url || data.src || '';
    const caption = data.caption || url;
    return url ? `[${caption}](${url})\n` : '';
  }
  if (type === 'table') return convertTable(block);
  // Fallthrough: recurse into children
  if (nodes.length) return nodes.map(n => blockToMd(n, depth)).join('');
  return '';
}

function convertListItem(node, prefix, depth) {
  const indent = '  '.repeat(depth);
  const children = node.nodes || node.children || [];
  const firstPara = children[0];
  const text = firstPara ? inlineNodes(firstPara.nodes || firstPara.children || []) : inlineNodes(children);
  let result = `${indent}${prefix} ${text}\n`;
  const rest = children.slice(1);
  for (const child of rest) {
    if (child.type === 'unordered-list' || child.type === 'bulleted-list')
      result += child.nodes.map(n => convertListItem(n, '-', depth + 1)).join('');
    else if (child.type === 'ordered-list' || child.type === 'numbered-list')
      result += child.nodes.map((n, i) => convertListItem(n, `${i + 1}.`, depth + 1)).join('');
    else result += `${indent}  ${inlineNodes(child.nodes || child.children || [])}\n`;
  }
  return result;
}

function convertTable(block) {
  const rows = (block.nodes || block.children || []);
  const mdRows = rows.map(row => {
    const cells = (row.nodes || row.children || []).map(cell => inlineNodes(cell.nodes || cell.children || []));
    return `| ${cells.join(' | ')} |`;
  });
  if (mdRows.length === 0) return '';
  const header = mdRows[0];
  const sep = header.replace(/[^|]/g, '-').replace(/--+/g, '--');
  return [header, sep, ...mdRows.slice(1)].join('\n') + '\n';
}

// --- GitBook JSON traversal ---

function findPageDocument(json) {
  // GitBook stores page content in various locations depending on version
  const candidates = [
    json?.props?.pageProps?.page?.document,
    json?.props?.pageProps?.page?.nodes,
    json?.props?.pageProps?.space?.currentPage?.document,
    json?.pageProps?.page?.document,
    json?.props?.pageProps?.initialData?.page?.document,
  ];
  for (const c of candidates) {
    if (c && (c.nodes || c.children)) return c;
  }
  // Deep search for first object with a 'document' key containing nodes
  return deepFind(json, v => v && typeof v === 'object' && (v.nodes || v.children) && v.object === 'document');
}

function deepFind(obj, predicate, depth = 0) {
  if (depth > 8 || !obj || typeof obj !== 'object') return null;
  if (predicate(obj)) return obj;
  for (const val of Object.values(obj)) {
    const found = deepFind(val, predicate, depth + 1);
    if (found) return found;
  }
  return null;
}

function findPageTitle(json) {
  const candidates = [
    json?.props?.pageProps?.page?.title,
    json?.props?.pageProps?.space?.currentPage?.title,
    json?.props?.pageProps?.title,
  ];
  for (const c of candidates) { if (c) return c; }
  return null;
}

function docToMarkdown(doc) {
  const topNodes = doc.nodes || doc.children || [];
  return topNodes.map(n => blockToMd(n)).join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

// --- HTML fallback: extract visible text ---

function extractTextFromHtml(html) {
  // Remove script/style/noscript tags
  let text = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '');
  // Extract main content area (between <main> tags if present)
  const mainMatch = text.match(/<main[\s\S]*?<\/main>/i);
  if (mainMatch) text = mainMatch[0];
  // Convert common HTML to rough markdown
  text = text
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '# $1\n')
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '## $1\n')
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '### $1\n')
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '#### $1\n')
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n')
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**')
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*')
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`')
    .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
    .replace(/<[^>]+>/g, '')  // strip remaining tags
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n').trim();
  return text;
}

// --- File saving ---

async function saveFile(pagePath, title, content, url) {
  const filePath = pagePath === ''
    ? join(CONTENT_DIR, 'index.md')
    : join(CONTENT_DIR, ...pagePath.split('/')) + '.md';
  await mkdir(dirname(filePath), { recursive: true });
  const frontmatter = `---\ntitle: ${JSON.stringify(title || pagePath || 'Home')}\ngitbook_url: ${url}\npath: ${pagePath || '/'}\n---\n\n`;
  await writeFile(filePath, frontmatter + content, 'utf-8');
  return filePath;
}

// --- Main fetch loop ---

async function fetchPage(pagePath) {
  const url = pagePath ? `${BASE_URL}/${pagePath}` : BASE_URL;
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; content-mirror/1.0)' }
  });
  if (!res.ok) return { ok: false, status: res.status, url };
  const html = await res.text();

  // Try __NEXT_DATA__ first
  const nextDataMatch = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (nextDataMatch) {
    try {
      const json = JSON.parse(nextDataMatch[1]);
      const doc = findPageDocument(json);
      const title = findPageTitle(json);
      if (doc) {
        const md = docToMarkdown(doc);
        return { ok: true, title, content: md, url, strategy: 'next_data' };
      }
    } catch (_) {}
  }

  // Fallback: extract from HTML
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(' | GitBook', '').trim() : pagePath;
  const content = extractTextFromHtml(html);
  return { ok: true, title, content, url, strategy: 'html_fallback' };
}

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  await mkdir(CONTENT_DIR, { recursive: true });
  let success = 0, failed = 0;
  console.log(`Fetching ${PATHS.length} pages...\n`);

  for (const pagePath of PATHS) {
    const label = pagePath || '(home)';
    try {
      const result = await fetchPage(pagePath);
      if (!result.ok) {
        console.log(`  SKIP [${result.status}] ${label}`);
        failed++;
      } else {
        const filePath = await saveFile(pagePath, result.title, result.content, result.url);
        const shortPath = filePath.replace(CONTENT_DIR, 'content');
        console.log(`  OK   [${result.strategy}] ${label} → ${shortPath}`);
        success++;
      }
    } catch (err) {
      console.log(`  ERR  ${label}: ${err.message}`);
      failed++;
    }
    await sleep(DELAY_MS);
  }

  console.log(`\nDone: ${success} saved, ${failed} failed.`);
}

main().catch(err => { console.error(err); process.exit(1); });
