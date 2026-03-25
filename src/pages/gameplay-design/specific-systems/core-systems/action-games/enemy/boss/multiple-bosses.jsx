import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, LI, P, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Multiple Bosses</H1>
      <H2 id="interaction-between-bosses">Interaction Between Bosses</H2>
      <P>The two bosses should feel like they exist in the same world — their behaviors can affect each other, and maybe the player can exploit this.</P>
      <Blockquote>E.g. In Black Myth: Wukong , the player can lure Second Rat Prince into knocking a pillar onto the other — a hidden mechanic most players miss entirely</Blockquote>
      <H2 id="attention-management">Attention Management</H2>
      <P>Player attention spreads across multiple active threats.</P>
      <UL>
        <LI>Keep both bosses within a readable field of view</LI>
        <LI>Stagger their aggression so the player is never fully blind to one of them</LI>
        <LI>Design around players managing their blind spot</LI>
      </UL>
      <H2 id="multiple-boss-pacing">Multiple-boss Pacing</H2>
      <P>Most multiple-boss encounters push players toward a single rhythm: rush one boss down as fast as possible to escape the outnumbered situation. This works as a valid strategy, but it shouldn't be the only one.</P>
    </div>
  );
}
