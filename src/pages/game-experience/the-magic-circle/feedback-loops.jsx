import React from 'react';
import { Breadcrumb, Callout, H1, H3, LI, P, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Feedback Loops</H1>
      <H3 id="positive-feedback">Positive feedback</H3>
      <UL>
        <LI color="green">Reinforces power fantasy</LI>
        <LI color="green">Strengthens skill expression</LI>
        <LI color="green">Improves clarity of progression</LI>
        <LI color="red">Reduces tension once ahead</LI>
        <LI color="red">Flatten late-game decision-making</LI>
      </UL>
      <H3 id="negative-feedback">Negative feedback</H3>
      <UL>
        <LI color="green">Maintains tension and uncertainty</LI>
        <LI color="green">Encourages persistence in multiplayer</LI>
        <LI color="green">Keeps pacing more consistent</LI>
        <LI color="red">Weakens sense of mastery</LI>
        <LI color="red">Can feel controlled</LI>
        <LI color="red">Can feel unfair</LI>
      </UL>
      <Callout type="tip">
        <ul style={{ margin: 0, paddingLeft: 16 }}>
          <li>Be aware of unintentional feedback</li>
          <li>Combine the two feedbacks</li>
        </ul>
      </Callout>
    </div>
  );
}
