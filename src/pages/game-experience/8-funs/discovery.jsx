import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience', id: 'game-experience' }, { label: 'boxes-stacked8 Funs' }]} go={go} />
      <H1><Icon name="cat" className="page-icon" />Discovery</H1>
      <H3 id="curiosity"><InternalLink id="curiosity" go={go}>Curiosity</InternalLink></H3>
      <P>The drive to explore.</P>
      <H3 id="the-eureka-moment"><InternalLink id="the-eureka-moment" go={go}>The Eureka Moment</InternalLink></H3>
      <P>Sudden surprise of discovery.</P>
    </div>
  );
}
