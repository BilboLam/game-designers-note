import React from 'react';
import { Breadcrumb, Callout, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Curiosity</H1>
      <Callout type="tip">Best Game Ever: Outer Wilds</Callout>
      <H2 id="building-curiosity"><InternalLink id="building-curiosity" go={go}>Building Curiosity</InternalLink></H2>
      <P>Create questions players want to answer.</P>
      <H2 id="objects-of-curiosity"><InternalLink id="objects-of-curiosity" go={go}>Objects of Curiosity</InternalLink></H2>
      <P>What can players be curious about?</P>
      <H2 id="rewarding-exploration"><InternalLink id="rewarding-exploration" go={go}>Rewarding Exploration</InternalLink></H2>
      <P>Reward exploration to encourage curiosity.</P>
      <H2 id="extra-content"><InternalLink id="extra-content" go={go}>Extra Content</InternalLink></H2>
      <P>Optional discovery beyond the game.</P>
    </div>
  );
}
