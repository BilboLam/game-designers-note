import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, LI, P, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Complex Systems</H1>
      <P>Complex systems encourage emergent gameplay.</P>
      <H3 id="what-makes-a-system">What Makes a System</H3>
      <UL>
        <LI>Can you identify distinct parts?</LI>
        <LI>Do the parts affect each other?</LI>
        <LI>Do the parts together produce an effect different from each part on its own?</LI>
        <LI>Does that effect persist across a variety of circumstances?</LI>
      </UL>
      <H3 id="use-systems-to-constrain-interaction-logic">Use systems to constrain interaction logic</H3>
      <H3 id="stone-soup">Stone Soup</H3>
    </div>
  );
}
