import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience', id: 'game-experience' }, { label: 'The Magic Circle', id: 'the-magic-circle' }, { label: 'Flow State', id: 'flow-state' }, { label: 'Match Difficulty with Player Growth' }]} go={go} />
      <H1>Player Progression</H1>
      <P>Player grow in several aspects.</P>
      <H3 id="power-progression">Power progression</H3>
      <Blockquote>Linear attribute growth / exponential XP growth — drives players toward next area</Blockquote>
      <H3 id="divide-combat-zones">Divide combat zones</H3>
      <Blockquote>duration / difficulty / XP acquisition</Blockquote>
      <H3 id="skill-progression">Skill progression</H3>
    </div>
  );
}
