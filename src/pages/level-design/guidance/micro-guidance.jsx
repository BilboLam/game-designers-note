import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Micro Guidance</H1>
      <H3 id="spotlight-and-guide-lines">SpotLight &amp; Guide Lines</H3>
      <Blockquote>Object under spotlight matters more.</Blockquote>
      <Blockquote>Don't overestimate the power of Spotlight and guide lines though.</Blockquote>
      <H3 id="attention-and-saliency">Attention &amp; saliency</H3>
      <Blockquote>
        <H3 id="contrast">Contrast</H3>
        <Blockquote>Contrast in color, size, direction, shape, motion, texture contrast</Blockquote>
        <H3 id="player-attention-matters">Player attention matters</H3>
        <Blockquote>Player attention may be in wrong direction — e.g. player may think the goal is to open a locked gate, when the solution is to climb through a window</Blockquote>
        <Blockquote>Objects outside attention become hard to notice — e.g. players will notice enemies that from behind. If enemies come from behind, use explosions or something to announce their appearance. Or if you know where players are looking at, let enemies appear in front of players view.</Blockquote>
      </Blockquote>
      <H3 id="visual-language">Visual language</H3>
      <Blockquote>
        <H3 id="real-world-logic">Real-world Logic</H3>
        <Blockquote>E.g. ant trails lead to a cave / lizards crawl on climbable surfaces</Blockquote>
        <H3 id="camera">Camera</H3>
        <Blockquote>visual center / composition</Blockquote>
        <H3 id="affordance">Affordance</H3>
        <Blockquote>Let appearance matches actual function</Blockquote>
        <Blockquote>Positive affordance → attract — e.g. white walls are climbable</Blockquote>
        <Blockquote>Negative affordance → block — e.g. roadblocks</Blockquote>
      </Blockquote>
      <H3 id="mechanic">Mechanic</H3>
      <Blockquote>
        <H3 id="lethal-areas">Lethal areas</H3>
        <Blockquote>Fire, spikes</Blockquote>
        <H3 id="indicate-a-dead-end">Indicate a dead end</H3>
        <Blockquote>Shovel striking metal bounces off with a "clang" sound</Blockquote>
      </Blockquote>
      <H3 id="id-3d-perspective">3D perspective</H3>
      <Blockquote>players may more easily miss visual cues in 3D perspective</Blockquote>
      <H3 id="ai-guidance">AI guidance</H3>
      <Blockquote>NPCs, animals(e.g. Ghost of Tsushima), environment(e.g. Monster Hunter)</Blockquote>
    </div>
  );
}
