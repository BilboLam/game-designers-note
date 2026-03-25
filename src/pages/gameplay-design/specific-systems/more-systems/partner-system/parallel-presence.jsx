import React from 'react';
import { Blockquote, Breadcrumb, H1, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Parallel Presence</H1>
      <P>Seeing other players struggle at the same spot creates a sense of fellowship.</P>
      <Blockquote>E.g. Elden Ring bloodstains and phantoms; Death Stranding structures and likes ; Super Mario Wonder</Blockquote>
    </div>
  );
}
