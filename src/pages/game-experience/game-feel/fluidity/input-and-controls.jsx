import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience', id: 'game-experience' }, { label: 'Game Feel', id: 'game-feel' }, { label: 'Fluidity' }]} go={go} />
      <H1>Input &amp; Controls</H1>
      <H3 id="consistent-interaction-logic-across-systems">Consistent interaction logic across systems</H3>
      <H3 id="avoid-player-misinputs">Avoid player misinputs</H3>
      <Blockquote>Follow player habits</Blockquote>
      <H3 id="use-input-buffering">Use Input buffering</H3>
      <H3 id="use-camera-buffering">Use Camera buffering</H3>
    </div>
  );
}
