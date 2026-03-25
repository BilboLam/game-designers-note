import React from 'react';
import { Breadcrumb, Callout, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design' }]} go={go} />
      <H1><Icon name="table-cells-large" className="page-icon" />Layout</H1>
      <P>Layout is about how a level's physical space is structured and perceived. A good layout provides variety and adds depth to the core gameplay.</P>
      <Callout type="info">
      </Callout>
      <H3 id="learn-from-real-life-buildings">Learn from real-life buildings</H3>
      <H3 id="level-components"><InternalLink id="level-components" go={go}>Level Components</InternalLink></H3>
      <P>Reusable pieces.</P>
      <H3 id="cognitive-map"><InternalLink id="cognitive-map" go={go}>Cognitive Map</InternalLink></H3>
      <P>How players understand the space.</P>
      <H3 id="verticality"><InternalLink id="verticality" go={go}>Verticality</InternalLink></H3>
      <P>Height, elevation, and layered routes.</P>
      <H3 id="map-hierarchy"><InternalLink id="map-hierarchy" go={go}>Map Hierarchy</InternalLink></H3>
      <P>Link multiple spaces together.</P>
    </div>
  );
}
