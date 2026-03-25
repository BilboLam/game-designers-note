const ID_ICON = {
  'game-experience': 'fas:eyes',
  'bug-handling': 'fas:bug',
  'game-development': 'keyboard',
  'level-design': 'map-location-dot',
  'narrative-design': 'book-open-reader',
  appendix: 'book-open',
};

export function pickIconForNavNode(node, depth) {
  const id = node.id;
  if (ID_ICON[id]) return ID_ICON[id];
  if (depth === 0) return 'folder-open';
  if (depth === 1) return 'folder';
  return 'file-lines';
}




