import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Reasoning</H1>
      <H3 id="limited-information">Limited information</H3>
      <Blockquote>E.g. fog of war</Blockquote>
      <H3 id="different-certainties">Different certainties</H3>
      <Blockquote>- Certain → Puzzle</Blockquote>
      <Blockquote>- Uncertain → Strategy</Blockquote>
      <Blockquote>- High complexity so players can't accurately predict — e.g. Civilization</Blockquote>
      <Blockquote>- A little Randomness — e.g. Rogue</Blockquote>
      <Blockquote>- game theory — PvP</Blockquote>
      <Blockquote>- Unpredictable → Dice</Blockquote>
    </div>
  );
}
