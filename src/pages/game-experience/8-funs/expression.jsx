import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Expression</H1>
      <H2 id="player-agency"><InternalLink id="player-agency" go={go}>Player Agency</InternalLink></H2>
      <P>How much control players feel they have.</P>
    </div>
  );
}
