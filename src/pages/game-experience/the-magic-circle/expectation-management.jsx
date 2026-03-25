import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Expectation Management</H1>
      <P>The dark side of game design. The forbidden black magic of gotcha games.</P>
      <H3 id="stack-reward-expectations">Stack reward expectations</H3>
      <Blockquote>To eliminate player motivation gaps, give players multiple reward expectations — ensure at least one motivation exists at every moment</Blockquote>
      <H3 id="variable-reward-expectation">Variable reward expectation</H3>
      <Blockquote>Skinner box — random reward schedule</Blockquote>
    </div>
  );
}
