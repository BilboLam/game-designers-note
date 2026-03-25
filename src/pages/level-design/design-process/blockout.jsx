import React from 'react';
import { Breadcrumb, H1, H2, LI, OL, P, UL } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Design Process' }]} go={go} />
      <H1><Icon name="cube" className="page-icon" />Blockout</H1>
      <P>When the paperwork is done or when you're itching to begin, it's time to start building your blockout.</P>
      <UL>
        <LI>A blockout (also blockmesh or graybox) is a rough draft level built with simple shapes but without any details or polished art assets.</LI>
      </UL>
      <H2 id="why-use-blockout">Why use Blockout?</H2>
      <OL>
        <LI>Levels are likely to change dramatically during the prototyping phase, and it would be a big waste of resources to start making art resources</LI>
        <LI>Design problems become apparent when we remove art assets</LI>
      </OL>
    </div>
  );
}
