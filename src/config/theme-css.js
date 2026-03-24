import { DARK, LIGHT } from './themes.js';

/** Maps theme object to :root CSS variables (--color-* plus legacy aliases for existing components). */
export function buildThemeRootCss(themeName) {
  const T = themeName === 'dark' ? DARK : LIGHT;
  return `:root{
    --color-bg:${T.bg};
    --color-sidebar:${T.sidebar};
    --color-surface:${T.surface};
    --color-border:${T.border};
    --color-text:${T.text};
    --color-muted:${T.muted};
    --color-hint:${T.hint};
    --color-accent:${T.accent};
    --color-accent-bg:${T.accentBg};
    --color-link:${T.link};
    --color-code-bg:${T.codeBg};
    --color-block-bg:${T.blockBg};
    --color-accent-soft:${T.accentBg};
    --bg:var(--color-bg);
    --sidebar:var(--color-sidebar);
    --surface:var(--color-surface);
    --border:var(--color-border);
    --text:var(--color-text);
    --muted:var(--color-muted);
    --hint:var(--color-hint);
    --accent:var(--color-accent);
    --accent-bg:var(--color-accent-bg);
    --link:var(--color-link);
    --code-bg:var(--color-code-bg);
    --block-bg:var(--color-block-bg);
  }`;
}
