import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Coginitive Map Elements</H1>
      <H2 id="paths-1-tool-against-getting-lost">Paths — #1 tool against getting lost</H2>
      <Blockquote>
        <H2 id="looping-paths">Looping paths</H2>
        <Blockquote>Minimize backtracking, increase freedom, but burden navigation</Blockquote>
        <H2 id="backtrack">BackTrack</H2>
        <Blockquote>Same path feels completely different in reverse</Blockquote>
        <Blockquote>Solution: right-side torch rule — place landmarks on one side / asymmetric road design</Blockquote>
      </Blockquote>
      <H2 id="landmark-2-tool-against-getting-lost">Landmark — #2 tool against getting lost</H2>
      <Blockquote>
        <H2 id="orientation">Orientation</H2>
        <Blockquote>Landmark orient players from a distance, but fbetter be directional — non-axis-symmetric</Blockquote>
        <H2 id="landmarks-of-different-sizes">Landmarks of different sizes</H2>
        <Blockquote>Macro: the castle in Breath of the Wild</Blockquote>
        <Blockquote>Meso: a house</Blockquote>
        <Blockquote>Micro: a tree stump</Blockquote>
        <H2 id="occlude-irrelevant-landmarks-at-current-stage">Occlude irrelevant landmarks at current stage</H2>
      </Blockquote>
      <H2 id="districts">Districts</H2>
      <Blockquote>Uniformity in districts</Blockquote>
      <Blockquote>All similar objects or follow same logic — a place open enough to drive through</Blockquote>
      <H2 id="edges-use-carefully">Edges — use carefully</H2>
      <Blockquote>Crossing / being blocked by edges is memorable</Blockquote>
      <Blockquote>Helps players form cognitive map</Blockquote>
      <H2 id="nodes-where-paths-meet">Nodes — where paths meet</H2>
      <Blockquote>
        <H2 id="nodes-are-not-memorable-by-default">Nodes are not memorable by default</H2>
        <Blockquote>Turn them into a place</Blockquote>
        <Blockquote>Distinguish different routes. Major routes lead to significant spaces, while secondary paths lead to less important areas</Blockquote>
      </Blockquote>
      <H2 id="details">Details</H2>
      <Blockquote>Redundant information necessary for world-building</Blockquote>
    </div>
  );
}
