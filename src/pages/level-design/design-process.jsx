import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Design Process</H1>
      <P>When designing a new level, consider following this sequence:</P>
      <H3 id="plan"><InternalLink id="plan" go={go}>Plan</InternalLink></H3>
      <P>Shape the level concept before building.</P>
      <H3 id="sketch"><InternalLink id="sketch" go={go}>Sketch</InternalLink></H3>
      <P>Explore the space quickly before committing to details.</P>
      <H3 id="blockout"><InternalLink id="blockout" go={go}>Blockout</InternalLink></H3>
      <P>Build a rough white box without final art.</P>
      <H3 id="review"><InternalLink id="review" go={go}>Review</InternalLink></H3>
      <P>Check whether the level meets its design goals.</P>
    </div>
  );
}
