import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, LI, P, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Home System</H1>
      <H3 id="application">Application</H3>
      <P>Players need to return to it frequently.</P>
      <UL>
        <LI>Support practical gameplay as a reason to return</LI>
        <LI>Be Recognizable, not too complicated</LI>
      </UL>
      <H3 id="emotional-investment">Emotional investment</H3>
      <P>Players should care about what happens to it.</P>
      <UL>
        <LI>Provide a space to relax, lowering their guard</LI>
        <LI>Make the home a reason for players to fight for — Save my home vs. Save the world</LI>
      </UL>
      <H3 id="examples">Examples</H3>
      <Blockquote>E.g. Stardew Valley, Persona 5, Pacific Drive</Blockquote>
    </div>
  );
}
