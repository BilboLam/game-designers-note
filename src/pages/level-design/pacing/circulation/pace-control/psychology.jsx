import React from 'react';
import { Blockquote, Breadcrumb, Figure, H1, H2, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Psychology</H1>
      <H2 id="level-openness">Level Openness</H2>
      <Blockquote>Open space for moving, closed space for dwelling.</Blockquote>
      <H2 id="corner">Corner</H2>
      <P>Lack of vision in the corners slows down the player.</P>
      <Figure src="/images/corner.jpg" />
      <H2 id="players-flow-through-levels-like-water">Players flow through levels like water</H2>
      <Blockquote>they enter the nearest room first</Blockquote>
      <H2 id="but-they-move-like-cars">But they move like cars</H2>
      <Blockquote>corners cut off sightlines and slow players down</Blockquote>
    </div>
  );
}
