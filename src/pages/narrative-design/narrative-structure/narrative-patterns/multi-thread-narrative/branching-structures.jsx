import React from 'react';
import { Blockquote, Breadcrumb, Callout, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Narrative Design', id: 'narrative-design' }, { label: 'Narrative Structure', id: 'narrative-structure' }, { label: 'Narrative Patterns', id: 'narrative-patterns' }, { label: 'Multi-thread Narrative' }]} go={go} />
      <H1>Branching Structures</H1>
      <H3 id="shrub">Shrub</H3>
      <Blockquote>E.g. Detroit</Blockquote>
      <H3 id="reconverging-branches">Reconverging branches</H3>
      <H3 id="choices-at-ending">Choices at Ending</H3>
      <H3 id="reflective-choices">Reflective Choices</H3>
      <Blockquote>No consequence, merely create an illusion of choice</Blockquote>
      <Callout type="info">
      </Callout>
      <H3 id="choice-clarity">Choice clarity</H3>
      <P>Make the meaning of player choices clear; e.g. if an option means declaring war, the wording should say so</P>
    </div>
  );
}
