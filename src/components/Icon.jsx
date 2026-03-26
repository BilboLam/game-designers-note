import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { resolveIconName } from '@/utils/icon-resolve.js';

config.autoAddCss = false;
library.add(fas, far);

export function Icon({ name, className, style }) {
  if (!name) return null;
  try {
    const [prefix, iconName] = resolveIconName(name);
    return <FontAwesomeIcon icon={[prefix, iconName]} className={className} style={style} />;
  } catch {
    return null;
  }
}


