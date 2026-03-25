import React from 'react';
import { Breadcrumb, Callout, H1, H3, LI, P, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Feedback Loops</H1>
      <H3 id="positive-feedback">Positive feedback</H3>
      <P>+ Reinforces power fantasy</P>
      <P>+ Strengthens skill expression</P>
      <P>+ Improves clarity of progression</P>
      <UL>
        <LI>Reduces tension once ahead</LI>
      </UL>
      <UL>
        <LI>Flatten late-game decision-making</LI>
      </UL>
      <H3 id="negative-feedback">Negative feedback</H3>
      <P>+ Maintains tension and uncertainty</P>
      <P>+ Encourages persistence in multiplayer</P>
      <P>+ Keeps pacing more consistent</P>
      <UL>
        <LI>Weakens sense of mastery</LI>
      </UL>
      <UL>
        <LI>Can feel controlled</LI>
      </UL>
      <UL>
        <LI>Can feel unfair</LI>
      </UL>
      <Callout type="info">
        <span>- Be aware of unintentional feedback</span>
      </Callout>
      <UL>
        <LI>Combine the two feedbacks</LI>
      </UL>
    </div>
  );
}
