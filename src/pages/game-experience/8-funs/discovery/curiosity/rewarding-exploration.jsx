import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Rewarding Exploration</H1>
      <H2 id="effective-reward">Effective reward</H2>
      <Blockquote>Not mushrooms in Elden Ring</Blockquote>
      <H2 id="reward-off-path-behavior">Reward off-path behavior</H2>
      <Blockquote>E.g. BG3's survival check, Mario Odyssey's moons</Blockquote>
      <H2 id="dont-let-finding-rewards-be-a-task">Don't let finding rewards be a task</H2>
      <Blockquote>E.g. Korok in Breath of the Wild, don't mark total collectible count maybe?</Blockquote>
      <H2 id="subvert-expectations">Subvert expectations</H2>
      <Blockquote>play against player intuition</Blockquote>
    </div>
  );
}
