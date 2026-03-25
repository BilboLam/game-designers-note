import React from 'react';
import { Blockquote, Breadcrumb, Callout, H1, H3, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Negative Experience</H1>
      <H3 id="things-to-avoid">Things to Avoid</H3>
      <Blockquote>
        <H3 id="grinding">Grinding</H3>
        <Blockquote>Once players master the gameplay, repetition becomes grinding</Blockquote>
        <H3 id="down-time">Down Time</H3>
        <Blockquote>Trash time when
          <UL>
            <LI>You know you are losing but game hasn't end</LI>
            <LI>Waiting for other players to move</LI>
            <LI>Long death animation</LI>
          </UL>
        </Blockquote>
        <H3 id="commanding-players">Commanding players</H3>
        <Blockquote>allow, don't command</Blockquote>
      </Blockquote>
      <Callout type="info">In a light-hearted game, negative experiences can be more easily ignored</Callout>
    </div>
  );
}
