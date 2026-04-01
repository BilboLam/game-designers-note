/** Flat depth-first traversal, calling cb(node, parent) on each node. */
export function walkNav(nodes, cb, parent = null) {
  for (const node of nodes) {
    cb(node, parent);
    if (node.children) walkNav(node.children, cb, node);
  }
}

export function findNodeById(nodes, id) {
  let found = null;
  walkNav(nodes, (node) => { if (node.id === id) found = node; });
  return found;
}

/** Remove node with given id from the tree. Returns true if removed. */
export function removeNodeById(nodes, id) {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].id === id) {
      nodes.splice(i, 1);
      return true;
    }
    if (nodes[i].children && removeNodeById(nodes[i].children, id)) return true;
  }
  return false;
}

/** Insert newNode as a child of parentId. If parentId is null, insert at root level. */
export function insertNode(nodes, parentId, newNode) {
  if (parentId === null) {
    nodes.push(newNode);
    return true;
  }
  const parent = findNodeById(nodes, parentId);
  if (!parent) return false;
  if (!parent.children) parent.children = [];
  parent.children.push(newNode);
  return true;
}

/** Move node with `id` to be after `afterId` in the same level, or as child of `parentId`. */
export function moveNode(nodes, id, afterId, parentId) {
  // Extract the node
  let moving = null;
  walkNav(nodes, (n) => { if (n.id === id) moving = { ...n }; });
  if (!moving) return false;

  removeNodeById(nodes, id);

  if (afterId === null) {
    // Insert as first child of parentId (or first root if parentId null)
    const targetList = parentId ? findNodeById(nodes, parentId)?.children ?? nodes : nodes;
    targetList.unshift(moving);
  } else {
    // Insert after afterId in its sibling list
    let inserted = false;
    const insert = (list) => {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === afterId) {
          list.splice(i + 1, 0, moving);
          inserted = true;
          return;
        }
        if (list[i].children) insert(list[i].children);
      }
    };
    insert(nodes);
    if (!inserted) nodes.push(moving);
  }
  return true;
}

/** Build id→path and path→id maps from the nav tree. */
export function buildPathMaps(nodes) {
  const idToPath = {}, pathToId = {};
  walkNav(nodes, (node) => {
    if (node.id === 'home') {
      idToPath.home = '/';
      pathToId['/'] = 'home';
    } else if (node.path) {
      const p = `/${node.path}`;
      idToPath[node.id] = p;
      pathToId[p] = node.id;
    }
  });
  return { idToPath, pathToId };
}

/** Flatten tree to [{...node, depth, parentId}] in DFS order, for dnd-kit. */
export function flattenTree(nodes, depth = 0, parentId = null) {
  const result = [];
  for (const node of nodes) {
    result.push({ ...node, depth, parentId, children: undefined });
    if (node.children?.length) result.push(...flattenTree(node.children, depth + 1, node.id));
  }
  return result;
}

/** Reconstruct nested tree from flattened list (produced by flattenTree after DnD reorder). */
export function buildTree(flat) {
  const root = [];
  const map = {};
  for (const item of flat) {
    map[item.id] = { ...item, children: item.depth > 0 ? undefined : undefined };
    delete map[item.id].depth;
    delete map[item.id].parentId;
  }
  for (const item of flat) {
    if (item.parentId === null) {
      root.push(map[item.id]);
    } else {
      const parent = map[item.parentId];
      if (parent) {
        if (!parent.children) parent.children = [];
        parent.children.push(map[item.id]);
      }
    }
  }
  return root;
}
