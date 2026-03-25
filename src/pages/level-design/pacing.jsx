import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design' }]} go={go} />
      <H1><Icon name="gauge-high" className="page-icon" />Pacing</H1>
      <P>Pacing is about controlling the rhythm of a level — how intensity, challenge, and rest are sequenced over time.</P>
      <H3 id="circulation"><InternalLink id="circulation" go={go}>Circulation</InternalLink></H3>
      <P>How players move through space.</P>
      <H3 id="game-beat"><InternalLink id="game-beat" go={go}>Game Beat</InternalLink></H3>
      <P>How different level patterns are arranged to shape players experience.</P>
    </div>
  );
}
