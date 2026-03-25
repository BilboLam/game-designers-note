import React from 'react';
import { Blockquote, Breadcrumb, Callout, H1, H2, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Negative Experience</H1>
      <H2 id="things-to-avoid">Things to Avoid</H2>
      <Blockquote>
        <H2 id="grinding">Grinding</H2>
        <Blockquote>Once players master the gameplay, repetition becomes grinding</Blockquote>
        <H2 id="down-time">Down Time</H2>
        <Blockquote>Trash time when
          <UL>
            <LI>You know you are losing but game hasn't end</LI>
            <LI>Waiting for other players to move</LI>
            <LI>Long death animation</LI>
          </UL>
        </Blockquote>
        <H2 id="commanding-players">Commanding players</H2>
        <Blockquote>allow, don't command</Blockquote>
      </Blockquote>
      <Callout type="info">In a light-hearted game, negative experiences can be more easily ignored</Callout>
    </div>
  );
}
