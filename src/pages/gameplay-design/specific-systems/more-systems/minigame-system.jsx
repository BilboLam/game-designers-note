import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Minigame System</H1>
      <H2 id="keeping-minigames-minigames">Keeping minigames minigames</H2>
      <P>Keeping them isolated from the main progression preserves their purity as a separate experience.</P>
      <Blockquote>E.g. Gwent in The Witcher 3 — completely optional, yet widely loved. On the other hand, The escape from Dankov minigame is required for story progression, which kills motivation to engage with it.</Blockquote>
    </div>
  );
}
