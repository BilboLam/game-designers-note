import React from 'react';
import { Blockquote, Breadcrumb, Callout, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Linear Narrative</H1>
      <H2 id="four-act-ki-sho-ten-ketsu">Four-act (ki-sho-ten-ketsu)</H2>
      <Blockquote><strong>Introduction</strong></Blockquote>
      <Blockquote>Spark the player’s curiosity to explore</Blockquote>
      <Blockquote><strong>Development</strong></Blockquote>
      <Blockquote>Build character growth and establish the world</Blockquote>
      <Blockquote><strong>Turn</strong></Blockquote>
      <Blockquote>Trigger emotional impact and deepen immersion</Blockquote>
      <Blockquote><strong>Resolutions</strong></Blockquote>
      <Blockquote>Bring emotional closure</Blockquote>
      <H2 id="three-act">Three-act</H2>
      <Blockquote>Conventional dramatic structure</Blockquote>
      <Callout type="info">
        <span>A larger narrative arc that contains smaller arcs can be useful</span>
      </Callout>
    </div>
  );
}
