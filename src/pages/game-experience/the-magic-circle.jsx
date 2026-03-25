import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>The Magic Circle</H1>
      <P>Keep player interested</P>
      <H2 id="expectation-management"><InternalLink id="expectation-management" go={go}>Expectation Management</InternalLink></H2>
      <P>Some dark magic.</P>
      <H2 id="flow-state"><InternalLink id="flow-state" go={go}>Flow State</InternalLink></H2>
      <P>Sustain engagement by matching challenge and ability.</P>
      <H2 id="feedback-loops"><InternalLink id="feedback-loops" go={go}>Feedback Loops</InternalLink></H2>
      <P>Ways to keep players in flow state.</P>
    </div>
  );
}
