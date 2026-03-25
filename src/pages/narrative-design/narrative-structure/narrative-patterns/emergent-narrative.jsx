import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Emergent Narrative</H1>
      <P>Players, game mechanics, and RNG together to produce an emergent narrative (e.g., Minecraft, Magic: The Gathering).</P>
      <P>Emergent Narrative can strengthen player involvement in the story</P>
      <H3 id="how-to-encourage-emergent-narrative">How To Encourage Emergent Narrative</H3>
      <H3 id="system-richness">System richness</H3>
      <Blockquote>Enough choices — chaotic system</Blockquote>
      <H3 id="plausibility">Plausibility</H3>
      <Blockquote>Player infers narrative from available character actions</Blockquote>
      <H3 id="fill-event-gaps">Fill event gaps</H3>
      <Blockquote>Provide a space for player imagination</Blockquote>
    </div>
  );
}
