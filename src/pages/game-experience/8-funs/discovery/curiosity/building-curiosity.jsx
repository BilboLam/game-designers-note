import React from 'react';
import { Blockquote, Breadcrumb, ExtLink, H1, H2, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Building Curiosity</H1>
      <P><ExtLink href="https://www.youtube.com/watch?v=QaGu9tGCNbI">Sparking Curiosity-Driven Exploration Through Narrative in 'Outer Wilds'</ExtLink></P>
      <H2 id="get-players-invested-first">Get players invested first</H2>
      <Blockquote>Easier for players to get invested when understanding the story is a requirement for advancing</Blockquote>
      <H2 id="make-players-explore-intentionally">Make players explore intentionally</H2>
      <Blockquote>Always want players to be curious enough to have a question and be exploring intentionally</Blockquote>
      <H2 id="one-clue-points-to-another">One clue points to another</H2>
      <Blockquote>build a web of curiosity</Blockquote>
      <Blockquote>E.g. Ship log in Outer Wilds</Blockquote>
      <H2 id="test-if-players-can-be-motivated-by-curiosity-alone">Test if players can be motivated by curiosity alone</H2>
      <H2 id="players-cant-be-curious-about-something-specific-if-theyre-curious-about-everything">Players can't be curious about something specific if they're curious about everything</H2>
      <H2 id="make-interest-points-obvious-enough">Make interest points obvious enough</H2>
      <Blockquote>Don't want players exploring every nook and cranny just in case there's a secret</Blockquote>
    </div>
  );
}
