import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Narrative Design', id: 'narrative-design' }, { label: 'Player & Character', id: 'player-and-character' }, { label: 'Character Design' }]} go={go} />
      <H1>Grounded Characters</H1>
      <H3 id="dialogue"><InternalLink id="dialogue" go={go}>Dialogue</InternalLink></H3>
      <P>Dialogue is the most common way to reveal character.</P>
      <H3 id="behavior">Behavior</H3>
      <Blockquote>But actions, reactions, and habits reveal character more</Blockquote>
      <H3 id="values">Values</H3>
      <Blockquote>Show what characters care about, protect, reject, or sacrifice</Blockquote>
    </div>
  );
}
