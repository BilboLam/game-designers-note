import React from 'react';
import { Blockquote, Breadcrumb, Callout, Figure, H1, H2, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Branching Structures</H1>
      <Figure src="/images/branching-structures.png" />
      <H2 id="shrub">Shrub</H2>
      <Blockquote>E.g. Detroit</Blockquote>
      <H2 id="reconverging-branches">Reconverging branches</H2>
      <H2 id="choices-at-ending">Choices at Ending</H2>
      <H2 id="reflective-choices">Reflective Choices</H2>
      <Blockquote>No consequence, merely create an illusion of choice</Blockquote>
      <Callout type="info">
      <P>Make the meaning of player choices clear; e.g. if an option means declaring war, the wording should say so.</P>
      </Callout>
    </div>
  );
}
