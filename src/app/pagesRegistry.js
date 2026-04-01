import { pathToId } from '@/config/nav.js';
import { lazy } from 'react';

// Lazy (dynamic) imports — enables per-page code splitting in the client bundle
const lazyModules = import.meta.glob('../pages/**/*.jsx');

function getId(filePath) {
  const routePath = `/${filePath.replace('../pages/', '').replace('.jsx', '')}`;
  return pathToId[routePath] ?? filePath.replace(/^.*\//, '').replace('.jsx', '');
}

export const pages = {};
for (const filePath of Object.keys(lazyModules)) {
  pages[getId(filePath)] = lazy(lazyModules[filePath]);
}
