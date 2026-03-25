import { pathToId } from '@/config/nav.js';

const modules = import.meta.glob('../pages/**/*.jsx', { eager: true });

export const pages = {};
for (const filePath of Object.keys(modules)) {
  const routePath = `/${filePath.replace('../pages/', '').replace('.jsx', '')}`;
  const id = pathToId[routePath] ?? filePath.replace(/^.*\//, '').replace('.jsx', '');
  pages[id] = modules[filePath].default;
}
