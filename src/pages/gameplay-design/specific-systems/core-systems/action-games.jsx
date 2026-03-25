import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Action Games</H1>
      <P>Player, environment, and enemy are the 3 most important aspects of action games.</P>
      <H3 id="player"><InternalLink id="player" go={go}>Player</InternalLink></H3>
      <H3 id="environment">Environment</H3>
      <H3 id="enemy"><InternalLink id="enemy" go={go}>Enemy</InternalLink></H3>
    </div>
  );
}
