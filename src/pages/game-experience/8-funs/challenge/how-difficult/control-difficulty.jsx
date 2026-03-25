import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience', id: 'game-experience' }, { label: 'boxes-stacked8 Funs', id: '8-funs' }, { label: 'Challenge', id: 'challenge' }, { label: 'How Difficult' }]} go={go} />
      <H1>Control Difficulty</H1>
      <H3 id="teaching-difficulty">Teaching Difficulty</H3>
      <Blockquote>E.g. Celeste: jump+dash → jump+grab → jump+dash+grab</Blockquote>
      <H3 id="increase-difficulty">Increase difficulty</H3>
      <UL>
        <LI>Add more flavors of difficulty</LI>
        <LI>Add depth in one flavor</LI>
      </UL>
      <H3 id="personalize-difficulty">Personalize Difficulty</H3>
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
