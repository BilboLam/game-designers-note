import React from 'react';
import { Breadcrumb, CrossLink, Figure, H1, H2, LI, P, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Complex Systems</H1>
      <P>Complex systems encourage emergent gameplay.</P>
      <H2 id="what-makes-a-system">What Makes a System</H2>
      <UL>
        <LI>Can you identify distinct parts?</LI>
        <LI>Do the parts affect each other?</LI>
        <LI>Do the parts together produce an effect different from each part on its own?</LI>
        <LI>Does that effect persist across a variety of circumstances?</LI>
      </UL>
      <H2 id="use-systems-to-constrain-interaction-logic">Use systems to constrain interaction logic</H2>
      <Figure src="/images/temperature-system.png" />
      <H2 id="stone-soup"><CrossLink pageId="structure" anchor="stone-soup" go={go}>Stone Soup</CrossLink></H2>
    </div>
  );
}
