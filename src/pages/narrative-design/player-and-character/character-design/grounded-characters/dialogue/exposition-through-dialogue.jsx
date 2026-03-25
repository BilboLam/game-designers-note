import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Exposition Through Dialogue</H1>
      <H3 id="guide-character">Guide character</H3>
      <Blockquote>Fast and effective but unnatural, may causes player resistance</Blockquote>
      <H3 id="casual-world-building-through-daily-conversation">Casual world-building through daily conversation</H3>
      <Blockquote>｜ Deliver information gradually and leave room for mystery</Blockquote>
    </div>
  );
}
