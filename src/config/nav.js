import { pickIconForNavNode } from './nav-icon-policy.js';
import NAV_SOURCE from './nav-data.json';

function decorateNavTree(nodes, depth = 0) {
  return nodes.map((n) => {
    const o = { ...n };
    if (depth > 2) {
      delete o.icon;
    } else if (!o.icon) {
      o.icon = pickIconForNavNode(o, depth);
    }
    if (o.children) o.children = decorateNavTree(o.children, depth + 1);
    return o;
  });
}

export const NAV = decorateNavTree(NAV_SOURCE);


// Build id↔path maps from explicit GitBook paths on each node
function buildPaths(nodes) {
  const idToPath = {};
  const pathToId = {};
  function walk(list) {
    for (const node of list) {
      if (node.id === 'home') {
        idToPath.home = '/';
        pathToId['/'] = 'home';
      } else {
        const p = `/${node.path}`;
        idToPath[node.id] = p;
        pathToId[p] = node.id;
      }
      if (node.children) walk(node.children);
    }
  }
  walk(nodes);
  return { idToPath, pathToId };
}

export const { idToPath, pathToId } = buildPaths(NAV);

