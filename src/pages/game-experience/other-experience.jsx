import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Other Experience</H1>
      <H3 id="horror-and-discomfort"><InternalLink id="horror-and-discomfort" go={go}>Horror &amp; Discomfort</InternalLink></H3>
      <P>The core of horror game.</P>
    </div>
  );
}
