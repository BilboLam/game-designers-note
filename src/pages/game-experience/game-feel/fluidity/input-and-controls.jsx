import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Input &amp; Controls</H1>
      <H2 id="consistent-interaction-logic-across-systems">Consistent interaction logic across systems</H2>
      <H2 id="avoid-player-misinputs">Avoid player misinputs</H2>
      <Blockquote>Follow player habits</Blockquote>
      <H2 id="use-input-buffering">Use Input buffering</H2>
      <H2 id="use-camera-buffering">Use Camera buffering</H2>
    </div>
  );
}
