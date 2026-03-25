import React from 'react';
import { Blockquote, Breadcrumb, Callout, H1, H3, InternalLink, LI, OL, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Puzzle Design</H1>
      <H3 id="design-process">Design Process</H3>
      <OL>
        <LI>Define the puzzle (reduce noise)</LI>
        <LI>Add in difficulty</LI>
        <LI>Control possibility space</LI>
      </OL>
      <H3 id="increase-difficulty">Increase Difficulty</H3>
      <UL>
        <LI>Stacking mechanics</LI>
        <LI>Use distractors to hide intent and increase difficulty</LI>
        <LI>Subvert what players assume to be true</LI>
      </UL>
      <H3 id="control-difficulty">Control Difficulty</H3>
      <UL>
        <LI>Keep questions readable — let players understand what the puzzle is asking</LI>
        <LI>Allow multiple solutions</LI>
      </UL>
      <Callout type="info">
        <span>Dont let puzzle game be a test, guide players to find the answer.</span>
      </Callout>
      <H3 id="layering">Layering</H3>
      <Blockquote>Increase difficulty gradually</Blockquote>
      <H3 id="hint">Hint</H3>
      <Blockquote>Use hint carefully. They help and they spoil.</Blockquote>
      <H3 id="reward">Reward</H3>
      <Blockquote>Reward insight, reward efforts, not only reward correct answers.</Blockquote>
    </div>
  );
}
