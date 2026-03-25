import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience', id: 'game-experience' }, { label: 'The Magic Circle', id: 'the-magic-circle' }, { label: 'Flow State' }]} go={go} />
      <H1>Match Difficulty with Player Growth</H1>
      <P>If players progressed through the game, the difficulty should grow to match the <InternalLink id="player-progression" go={go}>players' growth</InternalLink>.</P>
      <H3 id="modulate-difficulty">Modulate Difficulty</H3>
      <H3 id="high-challenge-low-ability-anxiety">High challenge, low ability → anxiety</H3>
      <Blockquote>The Finals's Gameplay put players in sustained pressure so easily feel anxious)</Blockquote>
      <H3 id="low-challenge-high-ability-boredom">Low challenge, high ability → boredom</H3>
      <H3 id="oscillate-difficulty">Oscillate Difficulty</H3>
      <Blockquote>Give players room to breathe — so they expect next challenge more — e.g. Sekiro's Four Easy Bosses</Blockquote>
    </div>
  );
}
