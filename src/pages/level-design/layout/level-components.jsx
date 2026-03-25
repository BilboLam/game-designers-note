import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Layout' }]} go={go} />
      <H1><Icon name="cubes" className="page-icon" />Level Components</H1>
      <H3 id="level-elements"><InternalLink id="level-elements" go={go}>Level Elements</InternalLink></H3>
      <P>The smallest functional pieces in a level.</P>
      <H3 id="layout-patterns"><InternalLink id="layout-patterns" go={go}>Layout Patterns</InternalLink></H3>
      <P>Proven structures of element layout that can be reused as building blocks.</P>
    </div>
  );
}
