import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, LI, P, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Narrative Design', id: 'narrative-design' }, { label: 'Player & Character', id: 'player-and-character' }, { label: 'Character Design' }]} go={go} />
      <H1>Emotional Link</H1>
      <H3 id="character-charisma">Character charisma</H3>
      <Blockquote>Knowledge, interests, and values can all be reasons player feel connected to a character</Blockquote>
      <H3 id="presence">Presence</H3>
      <Blockquote>Keep characters visible in the player's journey so the bond can accumulate.</Blockquote>
      <H3 id="small-interactions">Small Interactions</H3>
      <P>Players naturally enjoy small, low-stakes interactions like petting animals.</P>
      <UL>
        <LI>Creates a bond between player and character.</LI>
        <LI>Allow players to view the protagonist from a different angle.</LI>
      </UL>
      <Blockquote>E.g. RDR2 — brushing your horse, bathing, watching a show at the saloon</Blockquote>
    </div>
  );
}
