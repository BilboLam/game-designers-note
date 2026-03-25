import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Narrative Elements</H1>
      <P>Games offer some unique narrative elements</P>
      <H3 id="side-quests">Side Quests</H3>
      <Blockquote>If a side quest is so important that players can't ignore it, maybe we should not view it as a side quest.</Blockquote>
      <H3 id="save-and-load-system">Save &amp; Load System</H3>
      <Blockquote>E.g. NieR</Blockquote>
      <H3 id="branching-structures"><InternalLink id="branching-structures" go={go}>Branching Structures</InternalLink></H3>
      <P>Nonlinear storytelling.</P>
    </div>
  );
}
