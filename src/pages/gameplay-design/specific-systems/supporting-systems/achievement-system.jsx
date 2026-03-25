import React from 'react';
import { Blockquote, Breadcrumb, Callout, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Achievement System</H1>
      <H3 id="consider-in-game-achievements">Consider In-game achievements</H3>
      <Blockquote>Progress visualization — e.g. camp in Pacific Drive</Blockquote>
      <H3 id="ranking-system">Ranking System</H3>
      <P>A ranking system is also some kind of achievement system.</P>
      <Callout type="info">
        <span>Personally, I'll let average players reach S-rank with some effort. Give hardcore players something else to optimize.</span>
      </Callout>
    </div>
  );
}
