import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design' }]} go={go} />
      <H1><Icon name="magnifying-glass" className="page-icon" />System Review</H1>
      <P>Questions to ask when designing a new system</P>
      <P>Questions to ask when designing a new system.</P>
      <H3 id="self-check"><InternalLink id="self-check" go={go}>Self-check</InternalLink></H3>
      <P>Review the system against core design questions.</P>
      <H3 id="intuitive-design"><InternalLink id="intuitive-design" go={go}>Intuitive Design</InternalLink></H3>
      <P>Check whether players can understand the system naturally.</P>
    </div>
  );
}
