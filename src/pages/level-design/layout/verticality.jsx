import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Layout' }]} go={go} />
      <H1><Icon name="arrows-up-down" className="page-icon" />Verticality</H1>
      <H3 id="stairs"><InternalLink id="stairs" go={go}>Stairs</InternalLink></H3>
      <P>Tips for connecting spaces with different verticality</P>
    </div>
  );
}
