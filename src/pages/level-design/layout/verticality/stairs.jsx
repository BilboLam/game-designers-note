import React from 'react';
import { Breadcrumb, H1 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Layout', id: 'layout' }, { label: 'Verticality' }]} go={go} />
      <H1>Stairs</H1>
    </div>
  );
}
