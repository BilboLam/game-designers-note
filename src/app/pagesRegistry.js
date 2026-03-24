const modules = import.meta.glob('../pages/**/*.jsx', { eager: true });

export const pages = {};
for (const filePath of Object.keys(modules)) {
  const id = filePath.replace(/^.*\//, '').replace('.jsx', '');
  pages[id] = modules[filePath].default;
}
