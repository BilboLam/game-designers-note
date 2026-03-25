import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, InternalLink } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Sensation</H1>
      <H2 id="juice"><InternalLink id="juice-elements" go={go}>Juice</InternalLink></H2>
      <Blockquote>Level-up sounds, VFX, and similar payoffs.</Blockquote>
    </div>
  );
}
