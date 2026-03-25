import React from 'react';
import { Blockquote, Breadcrumb, Figure, H1, H2, InternalLink } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Game Beat Examples</H1>
      <H2 id="general-beat">General Beat</H2>
      <Figure src="/images/general-beat.png" />
      <H2 id="peak-end-beat">Peak-end Beat</H2>
      <Figure src="/images/peak-end-beat.jpg" />
      <H2 id="non-linear-levels">Non-linear levels</H2>
      <Figure src="/images/non-linear-levels.png" />
      <H2 id="control-pacing-by-flow">Control Pacing by <InternalLink id="flow-state" go={go}>Flow</InternalLink></H2>
      <Blockquote>Alternate challenge and safety</Blockquote>
      <Blockquote>Alternate long and short levels</Blockquote>
      <H2 id="timeline">Timeline</H2>
      <Figure src="/images/timeline.jpg" />
      <Figure src="/images/timeline-2.png" />
    </div>
  );
}
