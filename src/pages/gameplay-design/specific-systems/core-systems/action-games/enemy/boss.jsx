import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Boss</H1>
      <H3 id="boss-actions"><InternalLink id="boss-design" go={go}>Boss Actions</InternalLink></H3>
      <P>The behavior of the boss.</P>
      <H3 id="boss-types"><InternalLink id="boss-types" go={go}>Boss Types</InternalLink></H3>
      <P>Common boss types.</P>
    </div>
  );
}
