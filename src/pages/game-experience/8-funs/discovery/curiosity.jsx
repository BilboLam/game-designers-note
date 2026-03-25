import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Curiosity</H1>
      <P>circle-checkBest Game Ever: Outer Wilds</P>
      <H3 id="building-curiosity"><InternalLink id="building-curiosity" go={go}>Building Curiosity</InternalLink></H3>
      <P>Create questions players want to answer.</P>
      <H3 id="objects-of-curiosity"><InternalLink id="objects-of-curiosity" go={go}>Objects of Curiosity</InternalLink></H3>
      <P>What can players be curious about?</P>
      <H3 id="rewarding-exploration"><InternalLink id="rewarding-exploration" go={go}>Rewarding Exploration</InternalLink></H3>
      <P>Reward exploration to encourage curiosity.</P>
      <H3 id="extra-content"><InternalLink id="extra-content" go={go}>Extra Content</InternalLink></H3>
      <P>Optional discovery beyond the game.</P>
    </div>
  );
}
