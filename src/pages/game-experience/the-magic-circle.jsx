import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience' }]} go={go} />
      <H1><Icon name="bullseye" className="page-icon" />The Magic Circle</H1>
      <P>Keep player interested</P>
      <H3 id="expectation-management"><InternalLink id="expectation-management" go={go}>Expectation Management</InternalLink></H3>
      <P>Some dark magic.</P>
      <H3 id="flow-state"><InternalLink id="flow-state" go={go}>Flow State</InternalLink></H3>
      <P>Sustain engagement by matching challenge and ability.</P>
      <H3 id="feedback-loops"><InternalLink id="feedback-loops" go={go}>Feedback Loops</InternalLink></H3>
      <P>Ways to keep players in flow state.</P>
    </div>
  );
}
