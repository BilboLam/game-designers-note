import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Character Design</H1>
      <H2 id="protagonist-tone"><InternalLink id="protagonist-tone" go={go}>Protagonist Tone</InternalLink></H2>
      <P>How the protagonist feels and speaks.</P>
      <H2 id="grounded-characters"><InternalLink id="grounded-characters" go={go}>Grounded Characters</InternalLink></H2>
      <P>Make characters feel specific and grounded.</P>
      <H2 id="emotional-link"><InternalLink id="emotional-link" go={go}>Emotional Link</InternalLink></H2>
      <P>Make characters relatable and emotionally engaging.</P>
      <H2 id="world-building"><InternalLink id="world-building" go={go}>World Building</InternalLink></H2>
      <P>Let characters reveal the world.</P>
    </div>
  );
}
