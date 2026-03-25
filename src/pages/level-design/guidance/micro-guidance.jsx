import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Micro Guidance</H1>
      <H2 id="spotlight-and-guide-lines">SpotLight &amp; Guide Lines</H2>
      <Blockquote>Object under spotlight matters more.</Blockquote>
      <Blockquote>Don't overestimate the power of Spotlight and guide lines though.</Blockquote>
      <H2 id="attention-and-saliency">Attention &amp; saliency</H2>
      <Blockquote>
        <H2 id="contrast">Contrast</H2>
        <Blockquote>Contrast in color, size, direction, shape, motion, texture contrast</Blockquote>
        <H2 id="player-attention-matters">Player attention matters</H2>
        <Blockquote>Player attention may be in wrong direction — e.g. player may think the goal is to open a locked gate, when the solution is to climb through a window</Blockquote>
        <Blockquote>Objects outside attention become hard to notice — e.g. players will notice enemies that from behind. If enemies come from behind, use explosions or something to announce their appearance. Or if you know where players are looking at, let enemies appear in front of players view.</Blockquote>
      </Blockquote>
      <H2 id="visual-language">Visual language</H2>
      <Blockquote>
        <H2 id="real-world-logic">Real-world Logic</H2>
        <Blockquote>E.g. ant trails lead to a cave / lizards crawl on climbable surfaces</Blockquote>
        <H2 id="camera">Camera</H2>
        <Blockquote>visual center / composition</Blockquote>
        <H2 id="affordance">Affordance</H2>
        <Blockquote>Let appearance matches actual function</Blockquote>
        <Blockquote>Positive affordance → attract — e.g. white walls are climbable</Blockquote>
        <Blockquote>Negative affordance → block — e.g. roadblocks</Blockquote>
      </Blockquote>
      <H2 id="mechanic">Mechanic</H2>
      <Blockquote>
        <H2 id="lethal-areas">Lethal areas</H2>
        <Blockquote>Fire, spikes</Blockquote>
        <H2 id="indicate-a-dead-end">Indicate a dead end</H2>
        <Blockquote>Shovel striking metal bounces off with a "clang" sound</Blockquote>
      </Blockquote>
      <H2 id="id-3d-perspective">3D perspective</H2>
      <Blockquote>players may more easily miss visual cues in 3D perspective</Blockquote>
      <H2 id="ai-guidance">AI guidance</H2>
      <Blockquote>NPCs, animals(e.g. Ghost of Tsushima), environment(e.g. Monster Hunter)</Blockquote>
    </div>
  );
}
