import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Fragmented Narrative</H1>
      <P>E.g. Dead Cells, Souls series</P>
      <H2 id="unified-with-weak-guidance">Unified with weak guidance</H2>
      <Blockquote>Art direction and light guidance can hold the narrative together</Blockquote>
    </div>
  );
}
