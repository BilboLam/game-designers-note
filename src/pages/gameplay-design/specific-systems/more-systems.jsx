import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>More Systems</H1>
      <P>These systems sit alongside the core gameplay — not essential, but they add texture and variety to the experience.</P>
      <H3 id="minigame-system"><InternalLink id="minigame-system" go={go}>MiniGame System</InternalLink></H3>
      <H3 id="dice-system"><InternalLink id="dice-system" go={go}>Dice System</InternalLink></H3>
      <H3 id="partner-system"><InternalLink id="partner-system" go={go}>Partner System</InternalLink></H3>
      <H3 id="negotiation-system"><InternalLink id="negotiation-system" go={go}>Negotiation System</InternalLink></H3>
      <H3 id="engineering-system"><InternalLink id="engineering-system" go={go}>Engineering System</InternalLink></H3>
    </div>
  );
}
