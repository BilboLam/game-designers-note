import React from 'react';
import { Blockquote, Breadcrumb, Callout, H1, H3, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Pacing', id: 'pacing' }, { label: 'Circulation' }]} go={go} />
      <H1>Circulation Patterns</H1>
      <H3 id="straight-on">Straight-On</H3>
      <UL>
        <LI>High Level of Authorship</LI>
        <LI>Little Player Choice Available</LI>
      </UL>
      <H3 id="one-way-loopback">One-Way Loopback</H3>
      <UL>
        <LI>Sense of Control (regional division)</LI>
        <LI>Can Seem Contrived</LI>
      </UL>
      <H3 id="branching-chokepoint">Branching Chokepoint</H3>
      <UL>
        <LI>Emphasis on Player Choice</LI>
        <LI>Create risk-reward routes</LI>
        <LI>Bigger Scope</LI>
        <LI>Choices can feel illusory</LI>
      </UL>
      <H3 id="swiss-cheese-approach">Swiss-Cheese Approach</H3>
      <UL>
        <LI>Emphasis on Player Choice</LI>
        <LI>Bigger Scope</LI>
        <LI>Less Design Control of early experience</LI>
      </UL>
      <H3 id="branching-fractal">Branching Fractal</H3>
      <H3 id="hub-and-spoke">Hub and Spoke</H3>
      <UL>
        <LI>Efficient: Highly Reused Hub Space</LI>
        <LI>Hub Can Become Dull/Repetitive</LI>
      </UL>
      <H3 id="gated-hubs">Gated Hubs</H3>
      <Callout type="info">
      </Callout>
      <H3 id="avoid-room-hallway-room-structure">Avoid room-hallway-room structure</H3>
      <H3 id="level-reuse">Level Reuse</H3>
      <Blockquote>- Power reversal</Blockquote>
      <Blockquote>E.g. Once the player captures a machine gun position, they can use it to fight back against enemies.</Blockquote>
      <Blockquote>- Reverse traversal</Blockquote>
      <Blockquote>- Level mutation</Blockquote>
      <Blockquote>e.g. Hollow Knight</Blockquote>
    </div>
  );
}
