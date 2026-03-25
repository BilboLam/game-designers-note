import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Layout Patterns</H1>
      <P>Layout patterns are reusable structures for designing level content and layout. They are the building blocks a designer reaches for when shaping how a level feels to play.</P>
      <H2 id="circulation-patterns"><InternalLink id="circulation-patterns" go={go}>Circulation Patterns</InternalLink></H2>
      <P>Common route structures that shape movement through a level.</P>
      <H2 id="functional-patterns"><InternalLink id="functional-patterns" go={go}>Functional Patterns</InternalLink></H2>
      <P>Recurring structures that support functions such as guidance, pacing, and challenge.</P>
    </div>
  );
}
