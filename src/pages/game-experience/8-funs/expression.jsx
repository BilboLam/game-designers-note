import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience', id: 'game-experience' }, { label: 'boxes-stacked8 Funs' }]} go={go} />
      <H1><Icon name="paintbrush-pencil" className="page-icon" />Expression</H1>
      <H3 id="player-agency"><InternalLink id="player-agency" go={go}>Player Agency</InternalLink></H3>
      <P>How much control players feel they have.</P>
    </div>
  );
}
