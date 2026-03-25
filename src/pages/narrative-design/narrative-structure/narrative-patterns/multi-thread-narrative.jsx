import React from 'react';
import { Breadcrumb, Callout, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Narrative Design', id: 'narrative-design' }, { label: 'Narrative Structure', id: 'narrative-structure' }, { label: 'Narrative Patterns' }]} go={go} />
      <H1>Multi-thread Narrative</H1>
      <P>Multiple threads can reveal different parts of the world, while a single thread can't show the full picture.</P>
      <Callout type="info">
        <span>Player-driven narrative might be a greater need in the era of AI Game Development</span>
      </Callout>
      <H3 id="branching-structure"><InternalLink id="branching-structures" go={go}>Branching Structure</InternalLink></H3>
      <P>Different structure of branching choices.</P>
    </div>
  );
}
