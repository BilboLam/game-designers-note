import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Submission</H1>
      <H3 id="numbers">Numbers</H3>
      <Blockquote>Satisfaction from numbers going up. Think incremental games or Balatro.</Blockquote>
    </div>
  );
}
