import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV, SEARCH_INDEX, idToPath, pathToId } from '@/config/nav.js';
import { DocsShell } from '@/layouts/docs-shell/DocsShell.jsx';
import { getAncestorIds } from '@/utils/navigation.js';
import { pages } from './pagesRegistry.js';
import { ThemeColorRoot } from './ThemeColorRoot.jsx';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentId = pathToId[location.pathname] || 'home';
  const [theme, setTheme] = useState('light');
  const [search, setSearch] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [expandedIds, setExpandedIds] = useState(() => new Set(getAncestorIds(NAV, pathToId[location.pathname] || 'home')));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mainRef = useRef(null);
  const searchRef = useRef(null);

  const go = useCallback(
    (id) => {
      if (!pages[id]) return;
      navigate(idToPath[id] || '/');
      setSidebarOpen(false);
      if (mainRef.current) mainRef.current.scrollTop = 0;
    },
    [navigate],
  );

  const onNavRowClick = useCallback(
    (id, hasChildren) => {
      if (!pages[id]) return;
      navigate(idToPath[id] || '/');
      setSidebarOpen(false);
      if (mainRef.current) mainRef.current.scrollTop = 0;
      if (hasChildren) {
        setExpandedIds((prev) => {
          const next = new Set(prev);
          next.add(id);
          return next;
        });
      }
    },
    [navigate],
  );

  const toggleExpand = useCallback((id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  useEffect(() => {
    const ancestors = getAncestorIds(NAV, currentId);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- merge ancestor ids when route changes
    setExpandedIds((prev) => {
      const next = new Set(prev);
      ancestors.forEach((id) => next.add(id));
      return next;
    });
  }, [currentId]);

  const results = search.trim()
    ? SEARCH_INDEX.filter((p) => {
        const q = search.toLowerCase();
        return p.title.toLowerCase().includes(q) || p.text.toLowerCase().includes(q);
      }).slice(0, 8)
    : [];

  const PageComponent = pages[currentId] || pages.home;

  return (
    <>
      <ThemeColorRoot theme={theme} />
      <DocsShell
        NAV={NAV}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mainRef={mainRef}
        onMainClick={() => setSearchOpen(false)}
        currentId={currentId}
        expandedIds={expandedIds}
        toggleExpand={toggleExpand}
        onNavRowClick={onNavRowClick}
        search={search}
        setSearch={setSearch}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        results={results}
        go={go}
        theme={theme}
        setTheme={setTheme}
        searchRef={searchRef}
      >
        <PageComponent go={go} />
      </DocsShell>
    </>
  );
}
