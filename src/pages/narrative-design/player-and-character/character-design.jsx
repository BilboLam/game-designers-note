import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Narrative Design', id: 'narrative-design' }, { label: 'Player & Character' }]} go={go} />
      <H1><Icon name="id-card" className="page-icon" />Character Design</H1>
      <H3 id="protagonist-tone"><InternalLink id="protagonist-tone" go={go}>Protagonist Tone</InternalLink></H3>
      <P>How the protagonist feels and speaks.</P>
      <H3 id="grounded-characters"><InternalLink id="grounded-characters" go={go}>Grounded Characters</InternalLink></H3>
      <P>Make characters feel specific and grounded.</P>
      <H3 id="emotional-link"><InternalLink id="emotional-link" go={go}>Emotional Link</InternalLink></H3>
      <P>Make characters relatable and emotionally engaging.</P>
      <H3 id="world-building"><InternalLink id="world-building" go={go}>World Building</InternalLink></H3>
      <P>Let characters reveal the world.</P>
    </div>
  );
}
