import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Fragmented Narrative</H1>
      <P>E.g. Dead Cells, Souls series</P>
      <H3 id="unified-with-weak-guidance">Unified with weak guidance</H3>
      <Blockquote>Art direction and light guidance can hold the narrative together</Blockquote>
    </div>
  );
}
