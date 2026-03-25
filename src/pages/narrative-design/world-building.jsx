import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Narrative Design' }]} go={go} />
      <H1><Icon name="earth-asia" className="page-icon" />World Building</H1>
      <H3 id="world-authenticity"><InternalLink id="world-authenticity" go={go}>World Authenticity</InternalLink></H3>
      <P>The world follows its own logic.</P>
      <H3 id="level-design"><InternalLink id="world-building-level-design" go={go}>Level Design</InternalLink></H3>
      <P>Let level tell stories.</P>
      <H3 id="where-to-start"><InternalLink id="where-to-start" go={go}>Where to Start</InternalLink></H3>
      <P>Some entry points.</P>
    </div>
  );
}
