import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Player</H1>
      <H3 id="actions"><InternalLink id="actions" go={go}>Actions</InternalLink></H3>
      <P>The player's verb set.</P>
      <H3 id="platformer"><InternalLink id="platformer" go={go}>Platformer</InternalLink></H3>
      <P>Tricks for platformer games.</P>
    </div>
  );
}
