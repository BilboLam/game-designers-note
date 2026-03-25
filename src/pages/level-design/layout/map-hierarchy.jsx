import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Layout' }]} go={go} />
      <H1><Icon name="sitemap" className="page-icon" />Map Hierarchy</H1>
      <P>For multiple Levels</P>
      <H3 id="style-consistency-between-areas">Style consistency between areas</H3>
      <H3 id="narrative-links-between-maps">Narrative links between maps</H3>
      <Blockquote>E.g. the rain in City of Tears comes from the blue lake (Hollow Knight)</Blockquote>
    </div>
  );
}
