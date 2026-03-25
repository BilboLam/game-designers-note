import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Boss</H1>
      <H2 id="boss-design"><InternalLink id="boss-design" go={go}>Boss Design</InternalLink></H2>
      <P>Design Considerations when designing boss actions.</P>
      <H2 id="multiple-bosses"><InternalLink id="multiple-bosses" go={go}>Multiple Bosses</InternalLink></H2>
      <P>Design considerations when fighting multiple bosses at once.</P>
    </div>
  );
}
