import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { pathToId } from '@/config/nav.js';
import App from './app/App.jsx';

export const routes = Object.keys(pathToId);

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
