import React from 'react';
import { Blockquote, Breadcrumb, Callout, H1, H3, LI, P, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>The Eureka Moment</H1>
      <H3 id="when">When</H3>
      <UL>
        <LI>Systems — Learning something genuinely interesting about the system, like physical Law</LI>
      </UL>
      <Blockquote>E.g. Zelda BotW, Noita</Blockquote>
      <UL>
        <LI>Synergy — Discovering unexpected interactions between known elements</LI>
      </UL>
      <Blockquote>E.g. Roguelikes— two buffs combining into something greater</Blockquote>
      <UL>
        <LI>New potential — Learning a new potential of an existing mechanic</LI>
        <LI>No-look pass — solving a puzzle in one go after brainstorming</LI>
        <LI>Combination — overcoming a challenge through unintended mechanic combinations</LI>
      </UL>
      <Callout type="info">
        <span>Maybe try design the eureka moments first, then build the puzzle</span>
      </Callout>
      <H3 id="juice-it">Juice It</H3>
      <P>Add juice to the Eureka moments to strengthen them.</P>
    </div>
  );
}
