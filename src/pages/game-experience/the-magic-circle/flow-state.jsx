import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience', id: 'game-experience' }, { label: 'The Magic Circle' }]} go={go} />
      <H1><Icon name="water" className="page-icon" />Flow State</H1>
      <P>Flow state is often discussed in game design. It emerges when certain conditions are met.</P>
      <P>It can arise from any activity the player finds enjoyable, combined with continuous positive feedback that sustains engagement.</P>
      <H3 id="match-difficulty-with-player-growth"><InternalLink id="match-difficulty-with-player-growth" go={go}>Match Difficulty with Player Growth</InternalLink></H3>
      <P>Keep challenge aligned with mastery.</P>
    </div>
  );
}
