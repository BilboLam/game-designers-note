import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, InternalLink } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience', id: 'game-experience' }, { label: 'boxes-stacked8 Funs' }]} go={go} />
      <H1><Icon name="gem" className="page-icon" />Sensation</H1>
      <H3 id="juice"><InternalLink id="juice-elements" go={go}>Juice</InternalLink></H3>
      <Blockquote>Level-up sounds, VFX, and similar payoffs.</Blockquote>
    </div>
  );
}
