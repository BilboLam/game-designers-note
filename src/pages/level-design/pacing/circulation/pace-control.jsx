import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Pace Control</H1>
      <H3 id="psychology"><InternalLink id="psychology" go={go}>Psychology</InternalLink></H3>
      <P>How spatial structure affects circulation.</P>
    </div>
  );
}
