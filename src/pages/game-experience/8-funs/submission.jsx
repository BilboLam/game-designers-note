import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Submission</H1>
      <H2 id="numbers">Numbers</H2>
      <Blockquote>Satisfaction from numbers going up. Think incremental games or Balatro.</Blockquote>
    </div>
  );
}
