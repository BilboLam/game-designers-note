import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Supporting Systems</H1>
      <P>Supporting systems support the core loop by improving clarity and fluidity.</P>
      <H3 id="randomness"><InternalLink id="randomness" go={go}>Randomness</InternalLink></H3>
      <H3 id="moving-system"><InternalLink id="moving-system" go={go}>Moving System</InternalLink></H3>
      <H3 id="death-system"><InternalLink id="death-system" go={go}>Death System</InternalLink></H3>
      <H3 id="map-system"><InternalLink id="map-system" go={go}>Map System</InternalLink></H3>
      <H3 id="progression-system"><InternalLink id="progression-system" go={go}>Progression System</InternalLink></H3>
      <H3 id="achievement-system"><InternalLink id="achievement-system" go={go}>Achievement System</InternalLink></H3>
      <H3 id="animation-system"><InternalLink id="animation-system" go={go}>Animation System</InternalLink></H3>
    </div>
  );
}
