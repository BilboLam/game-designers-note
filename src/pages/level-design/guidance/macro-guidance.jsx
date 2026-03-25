import React from 'react';
import { Blockquote, Breadcrumb, CrossLink, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Macro Guidance</H1>
      <H3 id="landmark"><CrossLink pageId="coginitive-map-elements" anchor="landmark-2-tool-against-getting-lost" go={go}>Landmark</CrossLink></H3>
      <H3 id="experience-guidance">Experience guidance</H3>
      <Blockquote>
        <H3 id="numeric-guidance">Numeric guidance</H3>
        <Blockquote>Areas with monsters of different levels</Blockquote>
        <H3 id="interest-based-guidance">Interest-based guidance</H3>
        <Blockquote>E.g. The Crush House / Paper Mario's hamster wheel: use boring gameplay to guide players to core experience</Blockquote>
      </Blockquote>
      <H3 id="signposting">Signposting</H3>
      <Blockquote>Simpler signs are clearer</Blockquote>
      <H3 id="vantage-points">Vantage points</H3>
      <Blockquote>Prospect and Refuge</Blockquote>
      <H3 id="hint-npcs">Hint NPCs</H3>
      <Blockquote>Ask what players plan to do and offer a variety of answers</Blockquote>
      <H3 id="quest-log">Quest Log</H3>
    </div>
  );
}
