import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, LI, P, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Dice System</H1>
      <P>E.g. DnD's six abilities, Disco Elysium's twenty-four personalities</P>
      <H3 id="roll-transparency">Roll Transparency</H3>
      <UL>
        <LI>Active roll — player initiates the roll &amp; what's being checked</LI>
      </UL>
      <Blockquote>Emphasize preparation and decisions making</Blockquote>
      <UL>
        <LI>Hidden roll — system handles the roll in secret</LI>
      </UL>
      <Blockquote>Integrate player stats into the world. Feel like the world operates on its own logic beneath the surface.</Blockquote>
      <UL>
        <LI>Silent roll — partial information of the roll shown to players</LI>
      </UL>
      <Blockquote>Hidden information at key decision points; choices feel weighty. Also help building immersion.</Blockquote>
    </div>
  );
}
