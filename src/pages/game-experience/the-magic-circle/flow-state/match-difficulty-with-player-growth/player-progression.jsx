import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Player Progression</H1>
      <P>Player grow in several aspects.</P>
      <H2 id="power-progression">Power progression</H2>
      <Blockquote>Linear attribute growth / exponential XP growth — drives players toward next area</Blockquote>
      <H2 id="divide-combat-zones">Divide combat zones</H2>
      <Blockquote>duration / difficulty / XP acquisition</Blockquote>
      <H2 id="skill-progression">Skill progression</H2>
    </div>
  );
}
