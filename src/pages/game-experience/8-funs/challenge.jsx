import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Challenge</H1>
      <H2 id="how-difficult"><InternalLink id="how-difficult" go={go}>How Difficult</InternalLink></H2>
      <P>Tuning difficulty for target audience</P>
      <H2 id="depth-of-gameplay"><InternalLink id="depth-of-gameplay" go={go}>Depth of Gameplay</InternalLink></H2>
      <P>Explores decision space and replay value.</P>
      <H2 id="flavors-of-difficulty"><InternalLink id="flavors-of-difficulty" go={go}>Flavors of Difficulty</InternalLink></H2>
      <P>Separates different kinds of challenges.</P>
    </div>
  );
}
