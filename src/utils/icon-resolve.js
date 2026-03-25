import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';

const FALLBACK = ['far', 'circle'];

/** Maps names (unprefixed or fas-only) to icon names that exist in @fortawesome/free-regular-svg-icons. */
const ICON_ALIASES = {
  'arrow-progress': 'chart-bar',
  'arrows-up-down': 'object-ungroup',
  'bars-progress': 'chart-bar',
  bolt: 'lightbulb',
  'book-open': 'folder-open',
  'book-open-reader': 'newspaper',
  bullseye: 'circle-dot',
  cat: 'face-smile',
  'chart-line': 'chart-bar',
  'clipboard-check': 'clipboard',
  'clipboard-list': 'rectangle-list',
  coins: 'money-bill-1',
  cube: 'square',
  cubes: 'gem',
  'diagram-project': 'object-group',
  'earth-asia': 'map',
  'folder-tree': 'folder-open',
  'gauge-high': 'chart-bar',
  ghost: 'face-dizzy',
  gift: 'gem',
  glasses: 'eye',
  'graduation-cap': 'bookmark',
  gears: 'keyboard',
  'hand-fist': 'hand-back-fist',
  key: 'id-card',
  'layer-group': 'object-group',
  link: 'paper-plane',
  'magnifying-glass': 'circle-question',
  'map-location-dot': 'map',
  'masks-theater': 'face-laugh',
  'paintbrush-pencil': 'pen-to-square',
  paintbrush: 'pen-to-square',
  pencil: 'pen-to-square',
  'puzzle-piece': 'object-group',
  route: 'map',
  'sack-dollar': 'money-bill-1',
  'scale-balanced': 'hourglass-half',
  'screwdriver-wrench': 'keyboard',
  seedling: 'sun',
  'signs-post': 'flag',
  sitemap: 'object-group',
  sliders: 'chart-bar',
  spider: 'face-grimace',
  'spider-black-widow': 'face-grimace',
  'table-cells-large': 'rectangle-list',
  'user-slash': 'eye-slash',
  water: 'cloud',
  trophy: 'star',
  icons: 'object-group',
  'ear-listen': 'headphones',
  'wand-sparkles': 'star',
  'people-group': 'handshake',
  globe: 'map',
  book: 'bookmark',
  bug: 'face-grimace',
  bars: 'rectangle-list',
  'chevron-right': 'square-caret-right',
};

function tryFar(iconKey) {
  if (iconKey === 'cat') {
    const solid = findIconDefinition({ prefix: 'fas', iconName: 'cat' });
    if (solid) return ['fas', 'cat'];
  }
  const base = ICON_ALIASES[iconKey] || iconKey;
  const def = findIconDefinition({ prefix: 'far', iconName: base });
  if (def) return ['far', base];
  return FALLBACK;
}

function splitPrefix(name) {
  const i = name.indexOf(':');
  if (i < 0) return null;
  return [name.slice(0, i), name.slice(i + 1)];
}

/** Resolves to Font Awesome Regular (outline) only; unprefixed solid-style names use ICON_ALIASES. */
export function resolveIconName(name) {
  if (!name || typeof name !== 'string') return FALLBACK;
  if (/[\u{1F300}-\u{1FAFF}]/u.test(name) || name.length === 1) return FALLBACK;
  const sp = splitPrefix(name);
  if (!sp) return tryFar(name);
  const [p, n] = sp;
  if (!n) return FALLBACK;
  if (p === 'fab') return [p, n];
  if (p === 'far' || p === 'fas') return tryFar(n);
  return tryFar(n);
}
