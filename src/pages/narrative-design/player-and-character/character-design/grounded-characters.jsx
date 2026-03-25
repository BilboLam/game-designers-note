import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Grounded Characters</H1>
      <H2 id="dialogue"><InternalLink id="dialogue" go={go}>Dialogue</InternalLink></H2>
      <P>Dialogue is the most common way to reveal character.</P>
      <H2 id="behavior">Behavior</H2>
      <Blockquote>But actions, reactions, and habits reveal character more</Blockquote>
      <H2 id="values">Values</H2>
      <Blockquote>Show what characters care about, protect, reject, or sacrifice</Blockquote>
    </div>
  );
}
