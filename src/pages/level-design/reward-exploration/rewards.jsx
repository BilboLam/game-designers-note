import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Reward & Exploration' }]} go={go} />
      <H1><Icon name="gift" className="page-icon" />Rewards</H1>
      <H3 id="reward-expectation">Reward Expectation</H3>
      <Blockquote>Mismatch between expectation and reward reduces motivation to explore. E.g. mushrooms in Elden Ring</Blockquote>
      <H3 id="rewards-as-a-hint">Rewards as a hint</H3>
      <Blockquote>Small coin → big coin → hidden path</Blockquote>
      <H3 id="reward-types">Reward types</H3>
      <Blockquote>Collectibles / resources / clues (notes, treasure maps)</Blockquote>
      <H3 id="reward-as-endpoint">Reward as endpoint</H3>
      <Blockquote>Reward symbolizes destination; if players reach a dead end and find nothing, they may doubt if there is more ahead. BG3's survival check chest is a fair approach to show that its just a dead end.</Blockquote>
    </div>
  );
}
