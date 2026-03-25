import React from 'react';
import { Blockquote, Breadcrumb, H1, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'More Systems', id: 'more-systems' }, { label: 'Partner System' }]} go={go} />
      <H1>Parallel Presence</H1>
      <P>Seeing other players struggle at the same spot creates a sense of fellowship.</P>
      <Blockquote>E.g. Elden Ring bloodstains and phantoms; Death Stranding structures and likes ; Super Mario Wonder</Blockquote>
    </div>
  );
}
