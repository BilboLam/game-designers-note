import React from 'react';
import { Blockquote, Breadcrumb, Callout, Figure, H1, H3, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Circulation Patterns</H1>
      <H3 id="straight-on">Straight-On</H3>
      <UL>
        <LI color="green">High Level of Authorship</LI>
        <LI color="red">Little Player Choice Available</LI>
      </UL>
      <Figure src="/images/straight-on.jpg" />
      <H3 id="one-way-loopback">One-Way Loopback</H3>
      <UL>
        <LI color="green">Sense of Control (regional division)</LI>
        <LI color="red">Can Seem Contrived</LI>
      </UL>
      <Figure src="/images/one-way-loop-back.jpg" />
      <H3 id="branching-chokepoint">Branching Chokepoint</H3>
      <UL>
        <LI color="green">Emphasis on Player Choice</LI>
        <LI color="green">Create risk-reward routes</LI>
        <LI color="red">Bigger Scope</LI>
        <LI color="red">Choices can feel illusory</LI>
      </UL>
      <Figure src="/images/branching-chokepoint.jpg" />
      <H3 id="swiss-cheese-approach">Swiss-Cheese Approach</H3>
      <UL>
        <LI color="green">Emphasis on Player Choice</LI>
        <LI color="red">Bigger Scope</LI>
        <LI color="red">Less Design Control of early experience</LI>
      </UL>
      <Figure src="/images/swiss-cheese-approach.jpg" />
      <H3 id="branching-fractal">Branching Fractal</H3>
      <Figure src="/images/branching-fractal.jpg" />
      <H3 id="hub-and-spoke">Hub and Spoke</H3>
      <UL>
        <LI color="green">Efficient: Highly Reused Hub Space</LI>
        <LI color="red">Hub Can Become Dull/Repetitive</LI>
      </UL>
      <Figure src="/images/hub-and-spoke.jpg" />
      <H3 id="gated-hubs">Gated Hubs</H3>
      <Figure src="/images/gated-hubs.jpg" />
      <Callout type="info">Avoid room-hallway-room structure</Callout>
      <H3 id="level-reuse">Level Reuse</H3>
      <UL>
        <LI>Power reversal
          <Blockquote>E.g. Once the player captures a machine gun position, they can use it to fight back against enemies.</Blockquote>
        </LI>
        <LI>Reverse traversal</LI>
        <LI>Level mutation
          <Blockquote>e.g. Hollow Knight</Blockquote>
        </LI>
      </UL>
    </div>
  );
}
