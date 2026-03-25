import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Verticality</H1>
      <H3 id="stairs"><InternalLink id="stairs" go={go}>Stairs</InternalLink></H3>
      <P>Tips for connecting spaces with different verticality</P>
    </div>
  );
}
