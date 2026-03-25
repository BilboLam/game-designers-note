import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, LI, P, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Actions</H1>
      <H3 id="active-inputs">Active Inputs</H3>
      <P>Action games can be placed on a spectrum defined by the amount of active input performance available to the player.</P>
      <UL>
        <LI>Low input performance — depth comes from outside the player. Enemies, encounters, and the environment are the primary sources of complexity.</LI>
      </UL>
      <Blockquote>E.g. FromSoftware games</Blockquote>
      <UL>
        <LI>High input performance — depth comes from within. The focus shifts to exploring and mastering the player's own toolkit.</LI>
      </UL>
      <Blockquote>E.g. Devil May Cry, Ninja Gaiden</Blockquote>
      <P>What both share, regardless of where they sit on the spectrum, is that depth in action games is always emergent.</P>
      <H3 id="common-actions">Common actions</H3>
      <UL>
        <LI>Poise Bar</LI>
        <LI>Dodge Roll</LI>
        <LI>Parry</LI>
        <LI>Ukemi</LI>
      </UL>
    </div>
  );
}
