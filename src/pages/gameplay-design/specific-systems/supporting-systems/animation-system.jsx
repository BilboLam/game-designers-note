import React from 'react';
import { Breadcrumb, Callout, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Animation System</H1>
      <H2 id="turn-based-games">Turn-based games</H2>
      <Callout type="info">
        <span>Pre-cast animation when skill button is hovered — e.g. Baldur's Gate, Darkest Dungeon</span>
      </Callout>
    </div>
  );
}
