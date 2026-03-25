import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, H4, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Match Difficulty with Player Growth</H1>
      <P>If players progressed through the game, the difficulty should grow to match the <InternalLink id="player-progression" go={go}>players' growth</InternalLink>.</P>
      <H3 id="modulate-difficulty">Modulate Difficulty</H3>
      <Blockquote><H4>High challenge, low ability → anxiety</H4>
        <Blockquote>The Finals's Gameplay put players in sustained pressure so easily feel anxious)</Blockquote>
      </Blockquote>
      <Blockquote><H4>Low challenge, high ability → boredom</H4></Blockquote>
      <H3 id="oscillate-difficulty">Oscillate Difficulty</H3>
      <Blockquote>Give players room to breathe — so they expect next challenge more — e.g. Sekiro's Four Easy Bosses</Blockquote>
    </div>
  );
}
