import React from 'react';
import { Breadcrumb, H1, H3, InternalLink } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Fluidity</H1>
      <H3 id="time-scale"><InternalLink id="time-scale" go={go}>Time-scale</InternalLink></H3>
      <H3 id="input-and-controls"><InternalLink id="input-and-controls" go={go}>Input &amp; Controls</InternalLink></H3>
      <H3 id="moving"><InternalLink id="moving-system" go={go}>Moving</InternalLink></H3>
    </div>
  );
}
