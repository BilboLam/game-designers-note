import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>How Difficult</H1>
      <H3 id="how-our-brain-works"><InternalLink id="how-our-brain-works" go={go}>How our Brain Works</InternalLink></H3>
      <P>Understanding limits of human brain.</P>
      <H3 id="control-difficulty"><InternalLink id="control-difficulty" go={go}>Control Difficulty</InternalLink></H3>
      <P>Techniques for tuning challenges.</P>
    </div>
  );
}
