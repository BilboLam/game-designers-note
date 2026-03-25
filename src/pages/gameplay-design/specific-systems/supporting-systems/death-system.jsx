import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Death System</H1>
      <H2 id="reduce-negative-feedback-on-death">Reduce negative feedback on death</H2>
      <UL>
        <LI>Shorten death time</LI>
      </UL>
      <Blockquote>E.g. Celeste</Blockquote>
      <UL>
        <LI>Make death interesting</LI>
      </UL>
      <Blockquote>E.g. Hades — more stories to explore after dying</Blockquote>
    </div>
  );
}
