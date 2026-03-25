import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Narrative Design' }]} go={go} />
      <H1><Icon name="user" className="page-icon" />Player &amp; Character</H1>
      <P>Games are harder than traditional films and novels for expressing character psychology.</P>
      <H3 id="character-design"><InternalLink id="character-design" go={go}>Character Design</InternalLink></H3>
    </div>
  );
}
