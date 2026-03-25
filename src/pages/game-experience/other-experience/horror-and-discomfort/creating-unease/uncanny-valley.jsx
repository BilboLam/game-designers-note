import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Uncanny Valley</H1>
      <P>Here, the uncanny valley is used in a broader sense, referring to any form of uncanny discomfort.</P>
      <H3 id="popular-topics-that-involve-the-uncanny-valley">Popular topics that involve the uncanny valley</H3>
      <Blockquote>Liminal spaces: Backrooms / Core aesthetic</Blockquote>
      <Blockquote>Humanoid</Blockquote>
      <H3 id="element-of-the-uncanny-valley">Element of the uncanny valley</H3>
      <H3 id="unfamiliar">Unfamiliar</H3>
      <Blockquote>a trace of wrongness in a comfortable environment, e.g.  g roup photo with friends—except there’s a stranger among them.</Blockquote>
      <H3 id="beyond-comprehension">Beyond comprehension</H3>
      <Blockquote>E.g. Rule-based Horror (destruction of order)</Blockquote>
    </div>
  );
}
