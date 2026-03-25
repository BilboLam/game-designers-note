import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Pacing' }]} go={go} />
      <H1><Icon name="chart-line" className="page-icon" />Game Beat</H1>
      <H3 id="common-beat-elements"><InternalLink id="common-beat-elements" go={go}>Common Beat Elements</InternalLink></H3>
      <P>Common ingredients used to build a beat.</P>
      <H3 id="game-beat-examples"><InternalLink id="game-beat-examples" go={go}>Game Beat Examples</InternalLink></H3>
      <P>Examples of beat structures.</P>
      <H3 id="design-beat-by-need"><InternalLink id="design-beat-by-need" go={go}>Design Beat by Need</InternalLink></H3>
      <P>Create different game beat with intention</P>
      <H3 id="open-world"><InternalLink id="open-world" go={go}>Open world</InternalLink></H3>
      <P>How beat design changes in open structures.</P>
    </div>
  );
}
