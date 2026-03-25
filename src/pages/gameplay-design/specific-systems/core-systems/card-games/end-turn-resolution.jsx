import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>End-turn Resolution</H1>
      <H2 id="readability">Readability</H2>
      <Blockquote>Notify players of resolution order and calculation method via interactive prompts — e.g. Balatro</Blockquote>
      <H2 id="reduce-downtime">Reduce downtime</H2>
      <Blockquote>Adjustable settlement speed</Blockquote>
    </div>
  );
}
