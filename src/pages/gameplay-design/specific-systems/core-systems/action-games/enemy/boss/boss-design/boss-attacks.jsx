import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, LI, P, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Boss Attacks</H1>
      <H3 id="action-readability">Action Readability</H3>
      <UL>
        <LI>Wind-up pose</LI>
        <LI>__BQ_OPEN__</LI>
      </UL>
      <P>Even slow attacks should have a subtle cue before the hit</P>
      <P>circle-exclamationAvoid counting frames to be the only solution</P>
      <UL>
        <LI>Avoid Frame-skipped attack</LI>
      </UL>
      <Blockquote>Attack animation accelerating sharply mid-swing can be hard for learning the attack rythm. Tweaking the easing curve or add wind-up pose for visual cue.</Blockquote>
      <H3 id="leave-moderate-attack-windows-for-players">Leave moderate attack windows for players</H3>
    </div>
  );
}
