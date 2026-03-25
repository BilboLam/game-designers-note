import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design' }]} go={go} />
      <H1><Icon name="signs-post" className="page-icon" />Guidance</H1>
      <H3 id="macro-guidance"><InternalLink id="macro-guidance" go={go}>Macro Guidance</InternalLink></H3>
      <P>Help players orient.</P>
      <H3 id="micro-guidance"><InternalLink id="micro-guidance" go={go}>Micro Guidance</InternalLink></H3>
      <P>Direct players' attention.</P>
      <H3 id="tutorial-levels"><InternalLink id="tutorial-levels" go={go}>Tutorial Levels</InternalLink></H3>
      <P>Teach mechanics through level structure.</P>
    </div>
  );
}
