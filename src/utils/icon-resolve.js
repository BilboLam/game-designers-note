const FALLBACK = ['far', 'circle'];

/** Use icon name exactly as provided; no auto remapping. */
export function resolveIconName(name) {
  if (!name || typeof name !== 'string') return FALLBACK;
  if (/[\u{1F300}-\u{1FAFF}]/u.test(name) || name.length === 1) return FALLBACK;
  if (!name.includes(':')) return ['fas', name];
  const [prefix, iconName] = name.split(':');
  if (!prefix || !iconName) return FALLBACK;
  return [prefix, iconName];
}


