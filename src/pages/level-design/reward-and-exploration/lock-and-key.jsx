import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Lock &amp; Key</H1>
      <H2 id="lock-types">Lock types</H2>
      <Blockquote>
        <H2 id="information-lock">Information lock</H2>
        <Blockquote>E.g. fog of war</Blockquote>
        <H2 id="knowledge-lock">knowledge lock</H2>
        <Blockquote>Information lock that integrate better with world</Blockquote>
        <Blockquote>E.g. Outer wilds, Leap Year,</Blockquote>
        <H2 id="ability-lock">Ability lock</H2>
        <H2 id="entity-lock">Entity lock</H2>
        <H2 id="difficulty-lock">Difficulty lock</H2>
        <H2 id="one-way-lock">One-way lock</H2>
      </Blockquote>
      <H2 id="purpose">Purpose</H2>
      <UL>
        <LI>Reduce experience permutations and make the level more controllable</LI>
        <LI>Control flow</LI>
        <LI>Encourage exploration</LI>
      </UL>
      <H2 id="design-tips">Design Tips</H2>
      <UL>
        <LI>Make the lock visible to players</LI>
        <LI>Make the lock-key relationship clear</LI>
        <LI>Keep backtrack routes simple</LI>
      </UL>
    </div>
  );
}
