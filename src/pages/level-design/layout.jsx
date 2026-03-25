import React from 'react';
import { Breadcrumb, Callout, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Layout</H1>
      <P>Layout is about how a level's physical space is structured and perceived. A good layout provides variety and adds depth to the core gameplay.</P>
      <Callout type="info">
      <p>Learn from real-life buildings </p>
      </Callout>
      <H2 id="learn-from-real-life-buildings">Learn from real-life buildings</H2>
      <H2 id="level-components"><InternalLink id="level-components" go={go}>Level Components</InternalLink></H2>
      <P>Reusable pieces.</P>
      <H2 id="cognitive-map"><InternalLink id="cognitive-map" go={go}>Cognitive Map</InternalLink></H2>
      <P>How players understand the space.</P>
      <H2 id="verticality"><InternalLink id="verticality" go={go}>Verticality</InternalLink></H2>
      <P>Height, elevation, and layered routes.</P>
      <H2 id="map-hierarchy"><InternalLink id="map-hierarchy" go={go}>Map Hierarchy</InternalLink></H2>
      <P>Link multiple spaces together.</P>
    </div>
  );
}
