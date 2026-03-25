import React from 'react';
import { Blockquote, Breadcrumb, ExtLink, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience', id: 'game-experience' }, { label: 'boxes-stacked8 Funs', id: '8-funs' }, { label: 'Discovery', id: 'discovery' }, { label: 'Curiosity' }]} go={go} />
      <H1>Building Curiosity</H1>
      <P>[</P>
      <P>&amp;#xNAN;Sparking Curiosity-Driven Exploration Through Narrative in 'Outer Wilds'arrow-up-right](https://www.youtube.com/watch?v=QaGu9tGCNbI)</P>
      <H3 id="get-players-invested-first">Get players invested first</H3>
      <Blockquote>Easier for players to get invested when understanding the story is a requirement for advancing</Blockquote>
      <H3 id="make-players-explore-intentionally">Make players explore intentionally</H3>
      <Blockquote>Always want players to be curious enough to have a question and be exploring intentionally</Blockquote>
      <H3 id="one-clue-points-to-another">One clue points to another</H3>
      <Blockquote>build a web of curiosity</Blockquote>
      <Blockquote>E.g. Ship log in Outer Wilds</Blockquote>
      <H3 id="test-if-players-can-be-motivated-by-curiosity-alone">Test if players can be motivated by curiosity alone</H3>
      <H3 id="players-cant-be-curious-about-something-specific-if-theyre-curious-about-everything">Players can't be curious about something specific if they're curious about everything</H3>
      <H3 id="make-interest-points-obvious-enough">Make interest points obvious enough</H3>
      <Blockquote>Don't want players exploring every nook and cranny just in case there's a secret</Blockquote>
    </div>
  );
}
