import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Cognitive Map</H1>
      <H2 id="cognitive-map-elements"><InternalLink id="coginitive-map-elements" go={go}>Cognitive Map Elements</InternalLink></H2>
      <P>The way players recognize space.</P>
      <H2 id="waytracking-disruptions"><InternalLink id="waytracking-disruptions" go={go}>Waytracking Disruptions</InternalLink></H2>
      <P>Patterns that break navigation and memory.</P>
    </div>
  );
}
