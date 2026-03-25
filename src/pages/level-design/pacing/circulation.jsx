import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Circulation</H1>
      <P>In level design, circulation refers to how players flow through the level. It forms the player experience in the level.</P>
      <H3 id="circulation-elements"><InternalLink id="circulation-elements" go={go}>Circulation Elements</InternalLink></H3>
      <P>The spatial elements that guide movement.</P>
      <H3 id="pace-control"><InternalLink id="pace-control" go={go}>Pace Control</InternalLink></H3>
      <P>Techniques for tuning player flow.</P>
    </div>
  );
}
