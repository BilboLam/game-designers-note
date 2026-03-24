import { buildThemeRootCss } from '@/config/theme-css.js';

export function ThemeColorRoot({ theme }) {
  return <style>{buildThemeRootCss(theme)}</style>;
}
