import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Development' }]} go={go} />
      <H1><Icon name="spider-black-widow" className="page-icon" />Bug Handling</H1>
      <H3 id="keep-bugs-that-add-depth">Keep bugs that add depth</H3>
      <Blockquote>Not every bug should be removed. E.g. Riven animation cancels in League of Legends, bunny hopping in Counter-Strike, KBD in Tekken, and dribbling in basketball. Those mechanism were found out as bugs, but now they become an important part of the composition of the games.</Blockquote>
      <H3 id="instruction-overriding">Instruction overriding</H3>
      <Blockquote>Design carefully which inputs can cancel or override earlier inputs.</Blockquote>
      <H3 id="dont-be-afraid-to-restructure">Don't be Afraid to Restructure</H3>
      <Blockquote>If one part needs many exceptions, rework the structure.</Blockquote>
    </div>
  );
}
