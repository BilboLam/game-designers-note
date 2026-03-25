import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

// Renders a FontAwesome icon. Prefix defaults to 'fas'; pass name as "far:icon-name" for regular style.
export function Icon({ name, className, style }) {
  if (!name) return null;
  try {
    const [prefix, iconName] = name.includes(':') ? name.split(':') : ['fas', name];
    return <FontAwesomeIcon icon={[prefix, iconName]} className={className} style={style} />;
  } catch {
    return null;
  }
}
