import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Pacing', id: 'pacing' }, { label: 'Circulation', id: 'circulation' }, { label: 'Pace Control' }]} go={go} />
      <H1>Psychology</H1>
      <H3 id="level-openness">Level Openness</H3>
      <Blockquote>Open space for moving, closed space for dwelling.</Blockquote>
      <H3 id="corner">Corner</H3>
      <P>Lack of vision in the corners slows down the player.</P>
      <H3 id="players-flow-through-levels-like-water">Players flow through levels like water</H3>
      <Blockquote>they enter the nearest room first</Blockquote>
      <H3 id="but-they-move-like-cars">But they move like cars</H3>
      <Blockquote>corners cut off sightlines and slow players down</Blockquote>
    </div>
  );
}
