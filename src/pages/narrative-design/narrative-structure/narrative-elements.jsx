import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Narrative Elements</H1>
      <P>Games offer some unique narrative elements</P>
      <H2 id="side-quests">Side Quests</H2>
      <Blockquote>If a side quest is so important that players can't ignore it, maybe we should not view it as a side quest.</Blockquote>
      <H2 id="save-and-load-system">Save &amp; Load System</H2>
      <Blockquote>E.g. NieR</Blockquote>
      <H2 id="branching-structures"><InternalLink id="branching-structures" go={go}>Branching Structures</InternalLink></H2>
      <P>Nonlinear storytelling.</P>
    </div>
  );
}
