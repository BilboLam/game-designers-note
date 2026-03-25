import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>How Difficult</H1>
      <H2 id="how-our-brain-works"><InternalLink id="how-our-brain-works" go={go}>How our Brain Works</InternalLink></H2>
      <P>Understanding limits of human brain.</P>
      <H2 id="control-difficulty"><InternalLink id="control-difficulty" go={go}>Control Difficulty</InternalLink></H2>
      <P>Techniques for tuning challenges.</P>
    </div>
  );
}
