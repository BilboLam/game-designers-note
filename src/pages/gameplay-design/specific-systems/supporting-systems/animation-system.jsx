import React from 'react';
import { Breadcrumb, Callout, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Supporting Systems' }]} go={go} />
      <H1>Animation System</H1>
      <H3 id="turn-based-games">Turn-based games</H3>
      <Callout type="info">
        <span>Pre-cast animation when skill button is hovered — e.g. Baldur's Gate, Darkest Dungeon</span>
      </Callout>
    </div>
  );
}
