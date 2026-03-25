import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>System Review</H1>
      <P>Questions to ask when designing a new system.</P>
      <H2 id="self-check"><InternalLink id="self-check" go={go}>Self-check</InternalLink></H2>
      <P>Review the system against core design questions.</P>
      <H2 id="intuitive-design"><InternalLink id="intuitive-design" go={go}>Intuitive Design</InternalLink></H2>
      <P>Check whether players can understand the system naturally.</P>
    </div>
  );
}
