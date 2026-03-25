import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Card Games</H1>
      <H2 id="lore">Lore</H2>
      <Blockquote>Define the physics of the world in which duels take place and form a world to explore.</Blockquote>
      <Blockquote><InternalLink id="emergent-narrative" go={go}>Emergent Narrative</InternalLink></Blockquote>
      <H2 id="card-design"><InternalLink id="card-design" go={go}>Card Design</InternalLink></H2>
      <P>How to design a new card.</P>
      <H2 id="balancing"><InternalLink id="balancing" go={go}>Balancing</InternalLink></H2>
      <P>Balance the whole pool</P>
      <H2 id="end-turn-resolution"><InternalLink id="end-turn-resolution" go={go}>End-turn Resolution</InternalLink></H2>
      <P>Visualizing the behavior of a turn.</P>
    </div>
  );
}
