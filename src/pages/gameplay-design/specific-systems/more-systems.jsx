import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>More Systems</H1>
      <P>These systems sit alongside the core gameplay — not essential, but they add texture and variety to the experience.</P>
      <H2 id="minigame-system"><InternalLink id="minigame-system" go={go}>MiniGame System</InternalLink></H2>
      <H2 id="dice-system"><InternalLink id="dice-system" go={go}>Dice System</InternalLink></H2>
      <H2 id="partner-system"><InternalLink id="partner-system" go={go}>Partner System</InternalLink></H2>
      <H2 id="negotiation-system"><InternalLink id="negotiation-system" go={go}>Negotiation System</InternalLink></H2>
      <H2 id="engineering-system"><InternalLink id="engineering-system" go={go}>Engineering System</InternalLink></H2>
    </div>
  );
}
