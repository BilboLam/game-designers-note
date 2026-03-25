/**
 * Picks a Font Awesome icon name for nav nodes at depth 0–2 when the source tree has no icon.
 */
const ID_ICON = {
  'design-process': 'bars-progress',
  appendix: 'book-open',
  'celeste-and-forgiveness': 'heart',
  'game-development': 'gears',
  'game-experience': 'far:face-grin-hearts',
  'level-design': 'map-location-dot',
  'narrative-design': 'book-open-reader',
};

export function pickIconForNavNode(node, depth) {
  const id = node.id;
  if (ID_ICON[id]) return ID_ICON[id];

  const s = id.toLowerCase();
  if (/challenge|difficulty|depth-of-gameplay|flavor|how-difficult|control-difficulty/.test(s)) return 'trophy';
  if (/discovery|curiosity|eureka|exploration/.test(s)) return 'compass';
  if (/expression|player-agency|icons/.test(s)) return 'icons';
  if (s === 'sensation') return 'ear-listen';
  if (/fantasy|magic-circle/.test(s)) return 'wand-sparkles';
  if (/horror|discomfort|unease|uncanny|unknown/.test(s)) return 'ghost';
  if (/flow-state|match-difficulty|player-progression/.test(s)) return 'chart-line';
  if (/circulation|pace-control|game-beat/.test(s)) return 'route';
  if (/layout|cognitive|verticality/.test(s)) return 'layer-group';
  if (/guidance|tutorial/.test(s)) return 'signs-post';
  if (/reward|collectible|lock-and-key|rewards/.test(s)) return 'gem';
  if (/moral|violence|descrimination/.test(s)) return 'scale-balanced';
  if (/player-and-character|character-design|grounded/.test(s)) return 'people-group';
  if (/world-building|world-authenticity|where-to-start/.test(s)) return 'globe';
  if (/narrative-structure|narrative-elements|narrative-patterns|multi-thread/.test(s)) return 'book';
  if (/design-process|blockout|^plan$/.test(s)) return 'cubes';
  if (/bug-handling|^bug/.test(s)) return 'bug';
  if (s === 'structure') return 'folder-tree';
  if (/system-review|intuitive-design|self-check/.test(s)) return 'magnifying-glass';
  if (/supporting-systems|more-systems|core-systems/.test(s)) return 'screwdriver-wrench';
  if (/narrative|story|dialogue/.test(s)) return 'book';
  if (/level|layout|map|route|circulation|pacing/.test(s)) return 'map-location-dot';
  if (/character|player|identity/.test(s)) return 'user';
  if (/system|mechanic/.test(s)) return 'gears';
  if (/review|checklist|self-check/.test(s)) return 'clipboard-check';

  if (depth === 0) return 'folder-open';
  if (depth === 1) return 'folder';
  return 'file-lines';
}
