import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Supporting Systems</H1>
      <P>Supporting systems support the core loop by improving clarity and fluidity.</P>
      <H2 id="randomness"><InternalLink id="randomness" go={go}>Randomness</InternalLink></H2>
      <H2 id="moving-system"><InternalLink id="moving-system" go={go}>Moving System</InternalLink></H2>
      <H2 id="death-system"><InternalLink id="death-system" go={go}>Death System</InternalLink></H2>
      <H2 id="map-system"><InternalLink id="map-system" go={go}>Map System</InternalLink></H2>
      <H2 id="progression-system"><InternalLink id="progression-system" go={go}>Progression System</InternalLink></H2>
      <H2 id="achievement-system"><InternalLink id="achievement-system" go={go}>Achievement System</InternalLink></H2>
      <H2 id="animation-system"><InternalLink id="animation-system" go={go}>Animation System</InternalLink></H2>
    </div>
  );
}
