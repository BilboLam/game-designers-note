import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Narrative Design' }]} go={go} />
      <H1><Icon name="scale-balanced" className="page-icon" />Moral</H1>
      <H3 id="descrimination"><InternalLink id="descrimination" go={go}>Descrimination</InternalLink></H3>
      <P>How games can reinforce bias.</P>
      <H3 id="violence"><InternalLink id="violence" go={go}>Violence</InternalLink></H3>
      <P>Reflect on violence as escapism.</P>
    </div>
  );
}
