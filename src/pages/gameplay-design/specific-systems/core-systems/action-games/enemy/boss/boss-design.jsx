import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Boss Design</H1>
      <H2 id="boss-attacks"><InternalLink id="boss-attacks" go={go}>Boss Attacks</InternalLink></H2>
      <P>How to design boss behaviors</P>
      <H2 id="boss-reactions"><InternalLink id="boss-reaction" go={go}>Boss Reactions</InternalLink></H2>
      <P>The boss reacts to player actions.</P>
      <H2 id="stagger-system"><InternalLink id="stagger-system" go={go}>Stagger System</InternalLink></H2>
      <P>A mechanic where enough accumulated damage causes an enemy to visibly break, opening a window for a high-damage execute.</P>
      <H2 id="multiple-bosses"><InternalLink id="multiple-bosses" go={go}>Multiple Bosses</InternalLink></H2>
      <P>How to design a boss fight where the player faces multiple bosses.</P>
    </div>
  );
}
