import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Emergent Narrative</H1>
      <P>Players, game mechanics, and RNG together to produce an emergent narrative (e.g., Minecraft, Magic: The Gathering).</P>
      <P>Emergent Narrative can strengthen player involvement in the story</P>
      <H2 id="how-to-encourage-emergent-narrative">How To Encourage Emergent Narrative</H2>
      <H2 id="system-richness">System richness</H2>
      <Blockquote>Enough choices — chaotic system</Blockquote>
      <H2 id="plausibility">Plausibility</H2>
      <Blockquote>Player infers narrative from available character actions</Blockquote>
      <H2 id="fill-event-gaps">Fill event gaps</H2>
      <Blockquote>Provide a space for player imagination</Blockquote>
    </div>
  );
}
