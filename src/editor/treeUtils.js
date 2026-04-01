/** Flatten nested nav tree to [{...node, depth, parentId}] in DFS order. */
export function flattenTree(nodes, depth = 0, parentId = null) {
  const result = [];
  for (const node of nodes) {
    result.push({ ...node, depth, parentId, children: undefined });
    if (node.children?.length) result.push(...flattenTree(node.children, depth + 1, node.id));
  }
  return result;
}

/** Reconstruct nested tree from a flat array produced by flattenTree. */
export function buildTree(flat) {
  const root = [];
  const map = {};
  for (const item of flat) {
    map[item.id] = { id: item.id, label: item.label, path: item.path };
    if (item.icon) map[item.id].icon = item.icon;
  }
  for (const item of flat) {
    if (item.parentId === null) {
      root.push(map[item.id]);
    } else {
      const parent = map[item.parentId];
      if (parent) {
        if (!parent.children) parent.children = [];
        parent.children.push(map[item.id]);
      } else {
        root.push(map[item.id]);
      }
    }
  }
  return root;
}
