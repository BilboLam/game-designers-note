import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Rewards</H1>
      <H2 id="reward-expectation">Reward Expectation</H2>
      <Blockquote>Mismatch between expectation and reward reduces motivation to explore. E.g. mushrooms in Elden Ring</Blockquote>
      <H2 id="rewards-as-a-hint">Rewards as a hint</H2>
      <Blockquote>Small coin → big coin → hidden path</Blockquote>
      <H2 id="reward-types">Reward types</H2>
      <Blockquote>Collectibles / resources / clues (notes, treasure maps)</Blockquote>
      <H2 id="reward-as-endpoint">Reward as endpoint</H2>
      <Blockquote>Reward symbolizes destination; if players reach a dead end and find nothing, they may doubt if there is more ahead. BG3's survival check chest is a fair approach to show that its just a dead end.</Blockquote>
    </div>
  );
}
