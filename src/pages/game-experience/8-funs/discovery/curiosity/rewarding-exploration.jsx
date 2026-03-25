import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Rewarding Exploration</H1>
      <H3 id="effective-reward">Effective reward</H3>
      <Blockquote>Not mushrooms in Elden Ring</Blockquote>
      <H3 id="reward-off-path-behavior">Reward off-path behavior</H3>
      <Blockquote>E.g. BG3's survival check, Mario Odyssey's moons</Blockquote>
      <H3 id="dont-let-finding-rewards-be-a-task">Don't let finding rewards be a task</H3>
      <Blockquote>E.g. Korok in Breath of the Wild, don't mark total collectible count maybe?</Blockquote>
      <H3 id="subvert-expectations">Subvert expectations</H3>
      <Blockquote>play against player intuition</Blockquote>
    </div>
  );
}
