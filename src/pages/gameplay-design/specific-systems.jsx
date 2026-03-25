import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Specific Systems</H1>
      <H2 id="core-systems"><InternalLink id="core-systems" go={go}>Core Systems</InternalLink></H2>
      <P>The main gameplay.</P>
      <H2 id="secondary-systems"><InternalLink id="more-systems" go={go}>Secondary Systems</InternalLink></H2>
      <P>Other systems that add into the gameplay.</P>
      <H2 id="supporting-systems"><InternalLink id="supporting-systems" go={go}>Supporting Systems</InternalLink></H2>
      <P>Improves readability, fluidity, and accessibility.</P>
    </div>
  );
}
