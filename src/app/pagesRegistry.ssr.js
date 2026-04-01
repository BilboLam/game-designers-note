import { pathToId } from '@/config/nav.js';

// Eager imports for SSR — all pages must be synchronously available during prerender
const eagerModules = import.meta.glob('../pages/**/*.jsx', { eager: true });

function getId(filePath) {
  const routePath = `/${filePath.replace('../pages/', '').replace('.jsx', '')}`;
  return pathToId[routePath] ?? filePath.replace(/^.*\//, '').replace('.jsx', '');
}

export const pages = {};
for (const filePath of Object.keys(eagerModules)) {
  pages[getId(filePath)] = eagerModules[filePath].default;
}
