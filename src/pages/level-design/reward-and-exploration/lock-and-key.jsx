import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Lock &amp; Key</H1>
      <H3 id="lock-types">Lock types</H3>
      <Blockquote>
        <H3 id="information-lock">Information lock</H3>
        <Blockquote>E.g. fog of war</Blockquote>
        <H3 id="knowledge-lock">knowledge lock</H3>
        <Blockquote>Information lock that integrate better with world</Blockquote>
        <Blockquote>E.g. Outer wilds, Leap Year,</Blockquote>
        <H3 id="ability-lock">Ability lock</H3>
        <H3 id="entity-lock">Entity lock</H3>
        <H3 id="difficulty-lock">Difficulty lock</H3>
        <H3 id="one-way-lock">One-way lock</H3>
      </Blockquote>
      <H3 id="purpose">Purpose</H3>
      <UL>
        <LI>Reduce experience permutations and make the level more controllable</LI>
        <LI>Control flow</LI>
        <LI>Encourage exploration</LI>
      </UL>
      <H3 id="design-tips">Design Tips</H3>
      <UL>
        <LI>Make the lock visible to players</LI>
        <LI>Make the lock-key relationship clear</LI>
        <LI>Keep backtrack routes simple</LI>
      </UL>
    </div>
  );
}
