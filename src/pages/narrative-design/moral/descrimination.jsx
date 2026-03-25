import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Descrimination</H1>
      <P>How games can reinforce bias through mechanics and world design — often without realising it.</P>
      <H2 id="avoid-dehumanization">Avoid dehumanization</H2>
      <Blockquote>E.g. treating Goblin as a racial shorthand</Blockquote>
      <H2 id="challenge-player-instinct">Challenge player instinct</H2>
      <Blockquote>Look at what the game validates. In 4X games, the core loop centers on exploiting, expanding, and controlling the world, which can reflect a colonialist way of thinking.</Blockquote>
      <P>circle-exclamationUnmoral gameplay may still feel fun, so there is a tradeoff.</P>
    </div>
  );
}
