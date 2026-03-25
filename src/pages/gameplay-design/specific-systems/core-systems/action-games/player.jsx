import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Player</H1>
      <H2 id="actions"><InternalLink id="actions" go={go}>Actions</InternalLink></H2>
      <P>The player's verb set.</P>
      <H2 id="platformer"><InternalLink id="platformer" go={go}>Platformer</InternalLink></H2>
      <P>Tricks for platformer games.</P>
    </div>
  );
}
