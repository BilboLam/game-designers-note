import React from 'react';
import { Breadcrumb, Figure, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Waytracking Disruptions</H1>
      <H2 id="decision-stacking">Decision Stacking</H2>
      <Figure src="/images/decision-stacking.jpg" />
      <H2 id="pickups-and-flow-disruption">Pickups &amp; Flow Disruption</H2>
      <Figure src="/images/pickups-and-flow-disruption.jpg" />
      <H2 id="mixing-bowls">Mixing Bowls</H2>
      <Figure src="/images/mixing-bowls.jpg" />
    </div>
  );
}
