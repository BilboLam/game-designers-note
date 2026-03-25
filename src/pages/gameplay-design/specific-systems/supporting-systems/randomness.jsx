import React from 'react';
import { Breadcrumb, H1 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Supporting Systems' }]} go={go} />
      <H1>Randomness</H1>
    </div>
  );
}
