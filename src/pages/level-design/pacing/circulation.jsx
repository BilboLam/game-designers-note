import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Pacing' }]} go={go} />
      <H1><Icon name="route" className="page-icon" />Circulation</H1>
      <P>In level design, circulation refers to how players flow through the level. It forms the player experience in the level.</P>
      <H3 id="circulation-elements"><InternalLink id="circulation-elements" go={go}>Circulation Elements</InternalLink></H3>
      <P>The spatial elements that guide movement.</P>
      <H3 id="pace-control"><InternalLink id="pace-control" go={go}>Pace Control</InternalLink></H3>
      <P>Techniques for tuning player flow.</P>
    </div>
  );
}
