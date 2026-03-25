import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design' }]} go={go} />
      <H1><Icon name="paintbrush-pencil" className="page-icon" />Emergent Gameplay</H1>
      <H3 id="complex-system"><InternalLink id="complex-systems" go={go}>Complex System</InternalLink></H3>
      <P>Complex systems encourage emergent gameplay.</P>
    </div>
  );
}
