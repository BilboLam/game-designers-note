import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience', id: 'game-experience' }, { label: 'boxes-stacked8 Funs' }]} go={go} />
      <H1><Icon name="sack-dollar" className="page-icon" />Submission</H1>
      <H3 id="numbers">Numbers</H3>
      <Blockquote>Satisfaction from numbers going up. Think incremental games or Balatro.</Blockquote>
    </div>
  );
}
