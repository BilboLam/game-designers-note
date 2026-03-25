import styles from './DocsHeader.module.css';

export function DocsHeader({
  onMenuClick,
  onBrandClick,
  search,
  setSearch,
  searchOpen,
  setSearchOpen,
  results,
  go,
  theme,
  setTheme,
  searchRef,
}) {
  return (
    <header className={styles.headerBar}>
      <button type="button" className={styles.menuToggle} onClick={onMenuClick} aria-label="Toggle sidebar">
        ☰
      </button>
      <span className={styles.brandTitle} onClick={onBrandClick}>
        🎮 Game Designer's Note
      </span>
      <div className={styles.searchRegion} ref={searchRef}>
        <span className={styles.searchGlyph}>🔍</span>
        <input
          className={styles.searchField}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSearchOpen(true);
          }}
          onFocus={() => setSearchOpen(true)}
          placeholder="Search… (press /)"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setSearch('');
              setSearchOpen(false);
            }
          }}
        />
        {searchOpen && results.length > 0 && (
          <div className={styles.resultsPanel}>
            {results.map((r) => (
              <div
                key={r.id}
                className={styles.resultRow}
                onClick={() => {
                  go(r.id);
                  setSearch('');
                  setSearchOpen(false);
                }}
              >
                <div className={styles.resultTitle}>{r.title}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <button type="button" className={styles.themeToggle} onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} aria-label="Toggle theme">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  );
}
