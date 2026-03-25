import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Guidance</H1>
      <H2 id="macro-guidance"><InternalLink id="macro-guidance" go={go}>Macro Guidance</InternalLink></H2>
      <P>Help players orient.</P>
      <H2 id="micro-guidance"><InternalLink id="micro-guidance" go={go}>Micro Guidance</InternalLink></H2>
      <P>Direct players' attention.</P>
      <H2 id="tutorial-levels"><InternalLink id="tutorial-levels" go={go}>Tutorial Levels</InternalLink></H2>
      <P>Teach mechanics through level structure.</P>
    </div>
  );
}
