import React from 'react';
import { Blockquote, Breadcrumb, H1, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Engineering System</H1>
      <P>Engineering combines <InternalLink id="expression" go={go}>expression</InternalLink> and <InternalLink id="challenge" go={go}>challenge</InternalLink> as core fun; it's about proving mastery over complexity.</P>
      <Blockquote>E.g. Writing code that compiles, Minecraft Redstone</Blockquote>
    </div>
  );
}
