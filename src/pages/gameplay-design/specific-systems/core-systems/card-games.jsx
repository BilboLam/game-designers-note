import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Core Systems' }]} go={go} />
      <H1>Card Games</H1>
      <H3 id="lore">Lore</H3>
      <Blockquote>Define the physics of the world in which duels take place and form a world to explore.</Blockquote>
      <Blockquote><InternalLink id="emergent-narrative" go={go}>Emergent Narrative</InternalLink></Blockquote>
      <H3 id="card-design"><InternalLink id="card-design" go={go}>Card Design</InternalLink></H3>
      <P>How to design a new card.</P>
      <H3 id="balancing"><InternalLink id="balancing" go={go}>Balancing</InternalLink></H3>
      <P>Balance the whole pool</P>
      <H3 id="end-turn-resolution"><InternalLink id="end-turn-resolution" go={go}>End-turn Resolution</InternalLink></H3>
      <P>Visualizing the behavior of a turn.</P>
    </div>
  );
}
