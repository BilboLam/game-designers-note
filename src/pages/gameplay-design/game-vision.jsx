import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design' }]} go={go} />
      <H1><Icon name="bullseye" className="page-icon" />Game Vision</H1>
      <P>What is your game, why would anyone play it, and how do the systems all fit together</P>
      <H3 id="game-loop"><InternalLink id="game-loop" go={go}>Game Loop</InternalLink></H3>
      <P>What do players do repeatedly, and why does it stay engaging?</P>
      <H3 id="checklist"><InternalLink id="checklist" go={go}>Checklist</InternalLink></H3>
      <P>Check if your vision is clear.</P>
    </div>
  );
}
