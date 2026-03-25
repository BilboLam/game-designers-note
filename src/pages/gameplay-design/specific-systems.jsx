import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design' }]} go={go} />
      <H1><Icon name="diagram-project" className="page-icon" />Specific Systems</H1>
      <H3 id="core-systems"><InternalLink id="core-systems" go={go}>Core Systems</InternalLink></H3>
      <P>The main gameplay.</P>
      <H3 id="secondary-systems"><InternalLink id="more-systems" go={go}>Secondary Systems</InternalLink></H3>
      <P>Other systems that add into the gameplay.</P>
      <H3 id="supporting-systems"><InternalLink id="supporting-systems" go={go}>Supporting Systems</InternalLink></H3>
      <P>Improves readability, fluidity, and accessibility.</P>
    </div>
  );
}
