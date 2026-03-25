import React from 'react';
import { NAV } from '@/config/nav.js';
import { Breadcrumb, H1, InternalLink } from '@/components/ui.jsx';

export default function Page({ go }) {
  const section = NAV.find((n) => n.id === 'level-design');
  const children = section?.children ?? [];
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Level Design</H1>
      {children.map((item) => (
        <h4 key={item.id} style={{ fontSize: 17, fontWeight: 600, color: 'var(--text)', marginTop: 16, marginBottom: 8 }}>
          <InternalLink id={item.id} go={go}>{item.label}</InternalLink>
        </h4>
      ))}
    </div>
  );
}
