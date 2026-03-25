import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Narrative Structure</H1>
      <H2 id="narrative-patterns"><InternalLink id="narrative-patterns" go={go}>Narrative Patterns</InternalLink></H2>
      <P>Different ways games deliver story.</P>
      <H2 id="narrative-elements"><InternalLink id="narrative-elements" go={go}>Narrative Elements</InternalLink></H2>
      <P>Unique narrative elements of games.</P>
      <H2 id="narrative-timing"><InternalLink id="narrative-timing" go={go}>Narrative Timing</InternalLink></H2>
      <P>When and how to narrate during a game.</P>
      <H2 id="suspense"><InternalLink id="suspense" go={go}>Suspense</InternalLink></H2>
      <P>How to engage players with narration.</P>
    </div>
  );
}
