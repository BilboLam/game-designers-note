/** DFS path from a root in `nodes` to the node with `targetId`, or null. */
export function getNavPathToId(nodes, targetId, chain = []) {
  for (const n of nodes) {
    if (n.id === targetId) return [...chain, n];
    if (n.children) {
      const r = getNavPathToId(n.children, targetId, [...chain, n]);
      if (r) return r;
    }
  }
  return null;
}

/** Breadcrumb segments: ancestors of current page (each with id for navigation). */
export function getBreadcrumbCrumbs(nodes, currentId) {
  const path = getNavPathToId(nodes, currentId);
  if (!path || path.length < 2) return [];
  return path.slice(0, -1).map((n) => ({ label: n.label, id: n.id }));
}

/** Returns nav node and depth from root (0 = top-level row next to home). */
export function getNavNodeById(nodes, targetId, depth = 0) {
  for (const n of nodes) {
    if (n.id === targetId) return { node: n, depth };
    if (n.children) {
      const r = getNavNodeById(n.children, targetId, depth + 1);
      if (r) return r;
    }
  }
  return null;
}

/** Returns DFS prev/next nav node info for a given nav id. */
export function getPageNeighbors(targetId, nodes) {
  const flat = [];
  const flatten = (list) => { for (const n of list) { flat.push(n); if (n.children) flatten(n.children); } };
  flatten(nodes);
  const idx = flat.findIndex((n) => n.id === targetId);
  if (idx < 0) return {};
  const prev = flat[idx - 1], next = flat[idx + 1];
  return { prevId: prev?.id, prevLabel: prev?.label, nextId: next?.id, nextLabel: next?.label };
}

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
