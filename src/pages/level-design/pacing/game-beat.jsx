import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Game Beat</H1>
      <H2 id="common-beat-elements"><InternalLink id="common-beat-elements" go={go}>Common Beat Elements</InternalLink></H2>
      <P>Common ingredients used to build a beat.</P>
      <H2 id="game-beat-examples"><InternalLink id="game-beat-examples" go={go}>Game Beat Examples</InternalLink></H2>
      <P>Examples of beat structures.</P>
      <H2 id="design-beat-by-need"><InternalLink id="design-beat-by-need" go={go}>Design Beat by Need</InternalLink></H2>
      <P>Create different game beat with intention</P>
      <H2 id="open-world"><InternalLink id="open-world" go={go}>Open world</InternalLink></H2>
      <P>How beat design changes in open structures.</P>
    </div>
  );
}
