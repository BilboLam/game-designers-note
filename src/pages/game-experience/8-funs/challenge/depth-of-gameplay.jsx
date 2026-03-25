import React from 'react';
import { Blockquote, Breadcrumb, ExtLink, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Depth of Gameplay</H1>
      <H3 id="enrich-strategy-space">Enrich Strategy Space</H3>
      <P>total sum of decisions available to players</P>
      <Blockquote>- Different balanced choices</Blockquote>
      <Blockquote>Each option occupies a distinct niche. Choices differ not just in power, but in trade-offs —  e.g. Monster Hunter: attacks with different damage, speed, and follow-ups; Slay the Spire: cards with subtle differences that shine in specific builds.</Blockquote>
      <Blockquote>- Interactions between Actions — e.g. Mario's hat jump</Blockquote>
      <Blockquote>- Emergent depth from stacking simple rules</Blockquote>
      <H3 id="complex-system">Complex system</H3>
      <Blockquote><ExtLink href="https://www.youtube.com/watch?v=C5FUtrmO7gI&t=1685s">Systems answer questions.</ExtLink></Blockquote>
    </div>
  );
}
