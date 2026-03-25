import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Horror &amp; Discomfort</H1>
      <H2 id="types-of-fear"><InternalLink id="types-of-fear" go={go}>Types of Fear</InternalLink></H2>
      <P>The emotional flavors horror can target.</P>
      <H2 id="creating-unease"><InternalLink id="creating-unease" go={go}>Creating Unease</InternalLink></H2>
      <P>Techniques for creating unease.</P>
    </div>
  );
}
