import React from 'react';
import { Breadcrumb, H1, H2, InternalLink } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Fluidity</H1>
      <H2 id="time-scale"><InternalLink id="time-scale" go={go}>Time-scale</InternalLink></H2>
      <H2 id="input-and-controls"><InternalLink id="input-and-controls" go={go}>Input &amp; Controls</InternalLink></H2>
      <H2 id="moving"><InternalLink id="moving-system" go={go}>Moving</InternalLink></H2>
    </div>
  );
}
