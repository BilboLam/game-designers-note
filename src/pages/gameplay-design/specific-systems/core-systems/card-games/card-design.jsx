import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Card Design</H1>
      <H3 id="categorize-cards">Categorize cards</H3>
      <P>Give cards type labels internally (no need to show the player); this helps players understand the game systematically and helps designers avoid confusion</P>
      <Blockquote>Balatro</Blockquote>
      <Blockquote>- By flow phase: Early-game / economy / Late-game</Blockquote>
      <Blockquote>- By scoring (Balatro): chips / +mult / *mult</Blockquote>
      <Blockquote>Slay the Spire</Blockquote>
      <Blockquote>- By card Role: Attack/Defense/Cycling</Blockquote>
    </div>
  );
}
