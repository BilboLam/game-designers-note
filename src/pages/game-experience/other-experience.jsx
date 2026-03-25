import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience' }]} go={go} />
      <H1><Icon name="star" className="page-icon" />Other Experience</H1>
      <H3 id="horror-and-discomfort"><InternalLink id="horror-and-discomfort" go={go}>Horror &amp; Discomfort</InternalLink></H3>
      <P>The core of horror game.</P>
    </div>
  );
}
