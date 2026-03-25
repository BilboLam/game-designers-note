import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Core Systems', id: 'core-systems' }, { label: 'Card Games' }]} go={go} />
      <H1>End-turn Resolution</H1>
      <H3 id="readability">Readability</H3>
      <Blockquote>Notify players of resolution order and calculation method via interactive prompts — e.g. Balatro</Blockquote>
      <H3 id="reduce-downtime">Reduce downtime</H3>
      <Blockquote>Adjustable settlement speed</Blockquote>
    </div>
  );
}
