import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Flavors of Difficulty</H1>
      <P>From '8 flavors of difficulty' at the 2026 GDC.</P>
      <H2 id="reasoning"><InternalLink id="reasoning" go={go}>Reasoning</InternalLink></H2>
      <H2 id="physical"><InternalLink id="physical" go={go}>Physical</InternalLink></H2>
    </div>
  );
}
