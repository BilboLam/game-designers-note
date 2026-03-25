import React from 'react';
import { Blockquote, Breadcrumb, CheckItem, CheckList, ExtLink, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Plan</H1>
      <P>At the planning stage, don't rush into anything yet. Before you start, help yourself shape the level concept.</P>
      <H3 id="minimal-checklists">Minimal Checklists</H3>
      <CheckList>
        <CheckItem>Level Concept. What's the core concept of your levels?</CheckItem>
        <CheckItem>Platform. What engine and tools will you use?</CheckItem>
      </CheckList>
      <H3 id="basic-checklists">Basic Checklists</H3>
      <CheckList>
        <CheckItem>Players' goals. Reach the end or collect collectibles.</CheckItem>
        <CheckItem>Scope. How long is an average playthrough? How big is the level compared to player size?</CheckItem>
        <CheckItem>Pillars. What are the 2-3 most important themes/features of this project? E.g. stealth, combat, puzzle</CheckItem>
        <CheckItem>What abilities do players have? What can they interact with?</CheckItem>
        <CheckItem>Asset list (basic). What art assets and audios will you need for each level? What do you have already, and what needs to be found or made?</CheckItem>
      </CheckList>
      <H3 id="team-checklists">Team Checklists</H3>
      <P>For 3+ people or a series of levels.</P>
      <CheckList>
        <CheckItem>Pacing. What happens in each level? Why? How do the levels fit together?</CheckItem>
        <CheckItem>Moodboard. What are the inspirations for these levels?</CheckItem>
        <CheckItem>Worldbuilding. What is the lore of the level? What logic / mood guided the construction and use?</CheckItem>
      </CheckList>
      <P><ExtLink href="https://book.leveldesignbook.com/process/preproduction#project-planning">Pre-production | The Level Design Bookbook.leveldesignbook.com</ExtLink>Planning section in The Level Design Book</P>
      <H3 id="game-beats">Game beats</H3>
      <Blockquote>@游玩节奏图</Blockquote>
      <H3 id="decide">Decide</H3>
      <Blockquote>element, location, gameplay, objective, plot, new content, enemy, traps, interactive facilities, NPC, loot, time, color scheme</Blockquote>
    </div>
  );
}
