import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.join(__dirname, 'docs');

const template = fs.readFileSync(path.join(docsDir, 'index.html'), 'utf-8');
const { render, routes } = await import('./docs/server/entry-server.js');

let count = 0;
for (const route of routes) {
  const appHtml = render(route);
  const html = template.replace('<!--app-html-->', appHtml);
  const filePath =
    route === '/'
      ? path.join(docsDir, 'index.html')
      : path.join(docsDir, route.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html);
  count++;
}

console.log(`Prerendered ${count} routes.`);
