import { NavItem } from '@/features/navigation/NavItem.jsx';
import { DocsHeader } from '@/layouts/docs-header/DocsHeader.jsx';
import styles from './DocsShell.module.css';

export function DocsShell({
  NAV,
  sidebarOpen,
  setSidebarOpen,
  mainRef,
  onMainClick,
  currentId,
  expandedIds,
  toggleExpand,
  onNavRowClick,
  search,
  setSearch,
  searchOpen,
  setSearchOpen,
  results,
  go,
  theme,
  setTheme,
  searchRef,
  children,
}) {
  return (
    <div className={styles.appRoot}>
      <DocsHeader
        onMenuClick={() => setSidebarOpen((v) => !v)}
        onBrandClick={() => go('home')}
        search={search}
        setSearch={setSearch}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        results={results}
        go={go}
        theme={theme}
        setTheme={setTheme}
        searchRef={searchRef}
      />
      <div className={styles.bodyRow}>
        {sidebarOpen && <div className={styles.overlayScrim} onClick={() => setSidebarOpen(false)} />}
        <aside className={styles.sidebar}>
          {NAV.map((node) => (
            <NavItem
              key={node.path ?? node.id}
              node={node}
              currentId={currentId}
              onNavRowClick={onNavRowClick}
              depth={0}
              expandedIds={expandedIds}
              toggleExpand={toggleExpand}
            />
          ))}
        </aside>
        <main ref={mainRef} className={styles.mainPane} onClick={onMainClick}>
          <div className={styles.readingColumn}>{children}</div>
        </main>
      </div>
    </div>
  );
}
