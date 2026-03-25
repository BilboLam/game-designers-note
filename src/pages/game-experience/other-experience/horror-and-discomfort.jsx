import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience', id: 'game-experience' }, { label: 'Other Experience' }]} go={go} />
      <H1><Icon name="ghost" className="page-icon" />Horror &amp; Discomfort</H1>
      <H3 id="types-of-fear"><InternalLink id="types-of-fear" go={go}>Types of Fear</InternalLink></H3>
      <P>The emotional flavors horror can target.</P>
      <H3 id="creating-unease"><InternalLink id="creating-unease" go={go}>Creating Unease</InternalLink></H3>
      <P>Techniques for creating unease.</P>
    </div>
  );
}
