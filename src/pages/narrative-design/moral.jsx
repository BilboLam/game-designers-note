import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Moral</H1>
      <H2 id="descrimination"><InternalLink id="descrimination" go={go}>Descrimination</InternalLink></H2>
      <P>How games can reinforce bias.</P>
      <H2 id="violence"><InternalLink id="violence" go={go}>Violence</InternalLink></H2>
      <P>Reflect on violence as escapism.</P>
    </div>
  );
}
