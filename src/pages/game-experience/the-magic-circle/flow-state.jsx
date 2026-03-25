import React from 'react';
import { Breadcrumb, Figure, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Flow State</H1>
      <P>Flow state is often discussed in game design. It emerges when certain conditions are met. It can arise from any activity the player finds enjoyable, combined with continuous positive feedback that sustains engagement.</P>
      <Figure src="/images/flow-state.png" caption="Flow State (Csikszentmihalyi)" />
      <H2 id="match-difficulty-with-player-growth"><InternalLink id="match-difficulty-with-player-growth" go={go}>Match Difficulty with Player Growth</InternalLink></H2>
      <P>Keep challenge aligned with mastery.</P>
    </div>
  );
}
