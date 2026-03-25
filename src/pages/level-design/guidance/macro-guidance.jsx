import React from 'react';
import { Blockquote, Breadcrumb, CrossLink, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Macro Guidance</H1>
      <H2 id="landmark"><CrossLink pageId="coginitive-map-elements" anchor="landmark-2-tool-against-getting-lost" go={go}>Landmark</CrossLink></H2>
      <H2 id="experience-guidance">Experience guidance</H2>
      <Blockquote>
        <H2 id="numeric-guidance">Numeric guidance</H2>
        <Blockquote>Areas with monsters of different levels</Blockquote>
        <H2 id="interest-based-guidance">Interest-based guidance</H2>
        <Blockquote>E.g. The Crush House / Paper Mario's hamster wheel: use boring gameplay to guide players to core experience</Blockquote>
      </Blockquote>
      <H2 id="signposting">Signposting</H2>
      <Blockquote>Simpler signs are clearer</Blockquote>
      <H2 id="vantage-points">Vantage points</H2>
      <Blockquote>Prospect and Refuge</Blockquote>
      <H2 id="hint-npcs">Hint NPCs</H2>
      <Blockquote>Ask what players plan to do and offer a variety of answers</Blockquote>
      <H2 id="quest-log">Quest Log</H2>
    </div>
  );
}
