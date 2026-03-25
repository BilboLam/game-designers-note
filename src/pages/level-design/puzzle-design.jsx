import React from 'react';
import { Blockquote, Breadcrumb, Callout, CrossLink, H1, H2, LI, OL, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Puzzle Design</H1>
      <H2 id="design-process">Design Process</H2>
      <OL>
        <LI>Define the puzzle (reduce noise)</LI>
        <LI>Add in difficulty</LI>
        <LI>Control possibility space</LI>
      </OL>
      <H2 id="increase-difficulty">Increase Difficulty</H2>
      <UL>
        <LI>Stacking mechanics</LI>
        <LI>Use distractors to hide intent and increase difficulty</LI>
        <LI>Subvert what players assume to be true</LI>
      </UL>
      <H2 id="control-difficulty">Control Difficulty</H2>
      <UL>
        <LI>Keep questions readable — let players understand what the puzzle is asking</LI>
        <LI>Allow multiple solutions</LI>
      </UL>
      <Callout type="info">
        <span>Dont let puzzle game be a test, guide players to find the answer.</span>
      </Callout>
      <H2 id="layering"><CrossLink pageId="functional-patterns" anchor="layering" go={go}>Layering</CrossLink></H2>
      <Blockquote>Increase difficulty gradually</Blockquote>
      <H2 id="hint">Hint</H2>
      <Blockquote>Use hint carefully. They help and they spoil.</Blockquote>
      <H2 id="reward">Reward</H2>
      <Blockquote>Reward insight, reward efforts, not only reward correct answers.</Blockquote>
    </div>
  );
}
