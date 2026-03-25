import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, InternalLink } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Pacing', id: 'pacing' }, { label: 'Game Beat' }]} go={go} />
      <H1>Game Beat Examples</H1>
      <H3 id="general-beat">General Beat</H3>
      <H3 id="peak-end-beat">Peak-end Beat</H3>
      <H3 id="non-linear-levels">Non-linear levels</H3>
      <H3 id="control-pacing-by-flow">Control Pacing by <InternalLink id="flow-state" go={go}>Flow</InternalLink></H3>
      <Blockquote>Alternate challenge and safety</Blockquote>
      <Blockquote>Alternate long and short levels</Blockquote>
      <H3 id="timeline">Timeline</H3>
    </div>
  );
}
