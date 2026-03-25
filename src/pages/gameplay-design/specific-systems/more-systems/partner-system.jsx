import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, InternalLink, LI, P, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Partner System</H1>
      <H2 id="parallel-presence"><InternalLink id="parallel-presence" go={go}>Parallel Presence</InternalLink></H2>
      <P>Players coexist in the same world without directly interacting.</P>
      <H2 id="purpose-of-partner-in-game">Purpose of partner in game</H2>
      <UL>
        <LI>Strike a chord</LI>
        <LI>Serve as mechanic</LI>
        <LI>Enhance immersion</LI>
      </UL>
      <Blockquote>Respond to player action — 'Nice shot!'</Blockquote>
      <UL>
        <LI>Relieve loneliness</LI>
      </UL>
      <H2 id="separation-scenarios">Separation scenarios</H2>
      <UL>
        <LI>Restrict player ability</LI>
        <LI>Advance story</LI>
        <LI>Reflect character growth</LI>
        <LI>Embody the need for each other</LI>
        <LI>Demonstrate difference in opinion</LI>
        <LI>Character death
          <UL>
            <LI>Shatter something beautiful</LI>
            <LI>Leave suspense if the death not confirmed</LI>
          </UL>
        </LI>
      </UL>
    </div>
  );
}
