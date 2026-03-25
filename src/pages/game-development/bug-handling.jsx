import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Bug Handling</H1>
      <H2 id="keep-bugs-that-add-depth">Keep bugs that add depth</H2>
      <Blockquote>Not every bug should be removed. E.g. Riven animation cancels in League of Legends, bunny hopping in Counter-Strike, KBD in Tekken, and dribbling in basketball. Those mechanism were found out as bugs, but now they become an important part of the composition of the games.</Blockquote>
      <H2 id="instruction-overriding">Instruction overriding</H2>
      <Blockquote>Design carefully which inputs can cancel or override earlier inputs.</Blockquote>
      <H2 id="dont-be-afraid-to-restructure">Don't be Afraid to Restructure</H2>
      <Blockquote>If one part needs many exceptions, rework the structure.</Blockquote>
    </div>
  );
}
