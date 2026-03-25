import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience', id: 'game-experience' }, { label: 'boxes-stacked8 Funs', id: '8-funs' }, { label: 'Challenge' }]} go={go} />
      <H1>Flavors of Difficulty</H1>
      <P>From '8 flavors of difficulty' at the 2026 GDC.</P>
      <H3 id="reasoning"><InternalLink id="reasoning" go={go}>Reasoning</InternalLink></H3>
      <H3 id="physical"><InternalLink id="physical" go={go}>Physical</InternalLink></H3>
    </div>
  );
}
