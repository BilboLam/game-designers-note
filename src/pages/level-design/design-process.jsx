import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Design Process</H1>
      <P>When designing a new level, consider following this sequence:</P>
      <H2 id="plan"><InternalLink id="plan" go={go}>Plan</InternalLink></H2>
      <P>Shape the level concept before building.</P>
      <H2 id="sketch"><InternalLink id="sketch" go={go}>Sketch</InternalLink></H2>
      <P>Explore the space quickly before committing to details.</P>
      <H2 id="blockout"><InternalLink id="blockout" go={go}>Blockout</InternalLink></H2>
      <P>Build a rough white box without final art.</P>
      <H2 id="review"><InternalLink id="review" go={go}>Review</InternalLink></H2>
      <P>Check whether the level meets its design goals.</P>
    </div>
  );
}
