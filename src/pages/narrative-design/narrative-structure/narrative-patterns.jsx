import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Narrative Patterns</H1>
      <H2 id="emergent-narrative"><InternalLink id="emergent-narrative" go={go}>Emergent Narrative</InternalLink></H2>
      <P>Stories created by systems and players.</P>
      <H2 id="fragmented-narrative"><InternalLink id="fragmented-narrative" go={go}>Fragmented Narrative</InternalLink></H2>
      <P>Stories assembled from scattered pieces.</P>
      <H2 id="linear-narrative"><InternalLink id="linear-narrative" go={go}>Linear Narrative</InternalLink></H2>
      <P>A directed sequence with fixed progression.</P>
      <H2 id="multi-thread-narrative"><InternalLink id="multi-thread-narrative" go={go}>Multi-thread Narrative</InternalLink></H2>
      <P>Several story lines in parallel.</P>
    </div>
  );
}
