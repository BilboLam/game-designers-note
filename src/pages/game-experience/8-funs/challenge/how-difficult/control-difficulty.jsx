import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, InternalLink, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Control Difficulty</H1>
      <H2 id="teaching-difficulty">Teaching Difficulty</H2>
      <Blockquote>E.g. Celeste: jump+dash → jump+grab → jump+dash+grab</Blockquote>
      <H2 id="increase-difficulty">Increase difficulty</H2>
      <H2><InternalLink id="flavors-of-difficulty" go={go}>Flavors of Difficulty</InternalLink></H2>
      <H2><InternalLink id="depth-of-gameplay" go={go}>Depth of Gameplay</InternalLink></H2>
      <H2 id="personalize-difficulty">Personalize Difficulty</H2>
      <UL>
        <LI>Difficulty options</LI>
      </UL>
      <Blockquote>Effective but admit being weak feels bad</Blockquote>
      <UL>
        <LI>Different challenges</LI>
      </UL>
      <Blockquote>E.g. In Open world games, players can select different routes of different difficulty.</Blockquote>
      <Blockquote>Also, leave room for players to challenge themselves.</Blockquote>
      <UL>
        <LI>Grinding</LI>
      </UL>
      <Blockquote>Allow players self-adjust difficulty. (works but disrupts rhythm)</Blockquote>
      <UL>
        <LI>Modifiers</LI>
      </UL>
      <Blockquote>E.g. Celeste</Blockquote>
      <UL>
        <LI>DDA</LI>
      </UL>
      <Blockquote>E.g. Left 4 Dead AI Director</Blockquote>
    </div>
  );
}
