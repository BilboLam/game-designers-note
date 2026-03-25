import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Core Systems', id: 'core-systems' }, { label: 'Action Games', id: 'action-games' }, { label: 'Enemy', id: 'enemy' }, { label: 'Boss' }]} go={go} />
      <H1>Boss Design</H1>
      <H3 id="boss-attacks"><InternalLink id="boss-attacks" go={go}>Boss Attacks</InternalLink></H3>
      <P>How to design boss behaviors</P>
      <H3 id="boss-reactions"><InternalLink id="boss-reaction" go={go}>Boss Reactions</InternalLink></H3>
      <P>The boss reacts to player actions.</P>
      <H3 id="stagger-system"><InternalLink id="stagger-system" go={go}>Stagger System</InternalLink></H3>
      <P>A mechanic where enough accumulated damage causes an enemy to visibly break, opening a window for a high-damage execute.</P>
      <H3 id="multiple-bosses"><InternalLink id="multiple-bosses" go={go}>Multiple Bosses</InternalLink></H3>
      <P>How to design a boss fight where the player faces multiple bosses.</P>
    </div>
  );
}
