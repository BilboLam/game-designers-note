import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/styles/tokens.css';
import '@/styles/reset.css';
import '@/styles/global.css';
import App from './App.jsx';

// Editor is only loaded in dev mode; tree-shaken out of prod builds.
const EditorApp = import.meta.env.DEV
  ? lazy(() => import('@/editor/EditorApp.jsx'))
  : null;

const isEditor = import.meta.env.DEV && window.location.pathname.startsWith('/editor');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {isEditor ? (
        <Suspense fallback={null}>
          <EditorApp />
        </Suspense>
      ) : (
        <App />
      )}
    </BrowserRouter>
  </StrictMode>,
);
