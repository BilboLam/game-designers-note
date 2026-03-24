/** Ids that must be expanded so the route target row and its subtree are visible. */
export function getAncestorIds(nodes, targetId) {
  if (targetId === 'home') return [];
  const walk = (list, chain) => {
    for (const n of list) {
      if (n.id === targetId) {
        const out = [...chain];
        if (n.children && n.children.length) out.push(n.id);
        return out;
      }
      if (n.children) {
        const r = walk(n.children, [...chain, n.id]);
        if (r !== null) return r;
      }
    }
    return null;
  };
  return walk(nodes, []) || [];
}
