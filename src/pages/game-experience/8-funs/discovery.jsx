import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Discovery</H1>
      <H3 id="curiosity"><InternalLink id="curiosity" go={go}>Curiosity</InternalLink></H3>
      <P>The drive to explore.</P>
      <H3 id="the-eureka-moment"><InternalLink id="the-eureka-moment" go={go}>The Eureka Moment</InternalLink></H3>
      <P>Sudden surprise of discovery.</P>
    </div>
  );
}
