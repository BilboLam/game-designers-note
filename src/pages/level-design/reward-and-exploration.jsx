import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design' }]} go={go} />
      <H1><Icon name="gem" className="page-icon" />Reward &amp; Exploration</H1>
      <H3 id="rewards"><InternalLink id="rewards" go={go}>Rewards</InternalLink></H3>
      <P>What can be a reward?</P>
      <H3 id="collectibles"><InternalLink id="collectibles" go={go}>Collectibles</InternalLink></H3>
      <P>How to use collectibles.</P>
      <H3 id="lock-and-key"><InternalLink id="lock-and-key" go={go}>Lock &amp; Key</InternalLink></H3>
      <P>Exploration itself as a reward.</P>
    </div>
  );
}
