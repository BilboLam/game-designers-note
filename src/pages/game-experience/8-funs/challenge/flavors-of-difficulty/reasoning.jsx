import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Reasoning</H1>
      <H3 id="limited-information">Limited information</H3>
      <Blockquote>E.g. fog of war</Blockquote>
      <H3 id="different-certainties">Different certainties</H3>
      <UL>
        <LI>Certain → Puzzle</LI>
        <LI>Uncertain → Strategy
          <UL>
            <LI>High complexity so players can't accurately predict — e.g. Civilization</LI>
            <LI>A little Randomness — e.g. Rogue</LI>
            <LI>game theory — PvP</LI>
          </UL>
        </LI>
        <LI>Unpredictable → Dice</LI>
      </UL>
    </div>
  );
}
