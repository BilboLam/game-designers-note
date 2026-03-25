import React from 'react';
import { Breadcrumb, H1, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Core Systems' }]} go={go} />
      <H1>Detective Games</H1>
      <P>Clue-driven, tests information integration and inference</P>
    </div>
  );
}
