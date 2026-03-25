import React from 'react';
import { Annotation, Blockquote, Breadcrumb, CheckItem, CheckList, CrossLink, ExtLink, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Plan</H1>
      <P>At the planning stage, don't rush into anything yet. Before you start, help yourself shape the level concept.</P>
      <H3 id="minimal-checklists">Minimal Checklists</H3>
      <CheckList>
        <CheckItem><b><Annotation note="Level concept can be conveying interesting mechanisms, stories, emotions, interactions, or layouts, or challenging players (a way to make the core mechanics more enjoyable for the player rather than punishing.)">Level Concept</Annotation>.</b> What's the core concept of your levels?</CheckItem>
        <CheckItem><b>Platform.</b> What engine and tools will you use?</CheckItem>
      </CheckList>
      <H3 id="basic-checklists">Basic Checklists</H3>
      <CheckList>
        <CheckItem><b>Players' goals.</b> Reach the end or collect collectibles.</CheckItem>
        <CheckItem><b>Scope.</b> How long is an average playthrough? How big is the level compared to player size?</CheckItem>
        <CheckItem><b>Pillars.</b> What are the 2-3 most important themes/features of this project? E.g. stealth, combat, puzzle</CheckItem>
        <CheckItem>What abilities do players have? <CrossLink pageId="level-elements" go={go}>What can they interact with?</CrossLink></CheckItem>
        <CheckItem><b>Asset list (basic).</b> What art assets and audios will you need for each level? What do you have already, and what needs to be found or made?</CheckItem>
      </CheckList>
      <H3 id="team-checklists">Team Checklists</H3>
      <P>For 3+ people or a series of levels.</P>
      <CheckList>
        <CheckItem><b>Pacing.</b> What happens in each level? Why? How do the levels fit together?</CheckItem>
        <CheckItem><b>Moodboard.</b> What are the inspirations for these levels?</CheckItem>
        <CheckItem><b><CrossLink pageId="world-building-level-design" go={go}>Worldbuilding</CrossLink>.</b> What is the lore of the level? What logic / mood guided the construction and use?</CheckItem>
      </CheckList>
      <P><ExtLink href="https://book.leveldesignbook.com/process/preproduction#project-planning">Pre-production | The Level Design Bookbook.leveldesignbook.com</ExtLink></P>
    </div>
  );
}
