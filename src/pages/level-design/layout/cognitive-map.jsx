import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Layout' }]} go={go} />
      <H1><Icon name="map" className="page-icon" />Cognitive Map</H1>
      <H3 id="cognitive-map-elements"><InternalLink id="coginitive-map-elements" go={go}>Cognitive Map Elements</InternalLink></H3>
      <P>The way players recognize space.</P>
      <H3 id="waytracking-disruptions"><InternalLink id="waytracking-disruptions" go={go}>Waytracking Disruptions</InternalLink></H3>
      <P>Patterns that break navigation and memory.</P>
    </div>
  );
}
