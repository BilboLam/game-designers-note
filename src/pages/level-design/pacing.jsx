import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Pacing</H1>
      <P>Pacing is about controlling the rhythm of a level — how intensity, challenge, and rest are sequenced over time.</P>
      <H3 id="circulation"><InternalLink id="circulation" go={go}>Circulation</InternalLink></H3>
      <P>How players move through space.</P>
      <H3 id="game-beat"><InternalLink id="game-beat" go={go}>Game Beat</InternalLink></H3>
      <P>How different level patterns are arranged to shape players experience.</P>
    </div>
  );
}
