import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Supporting Systems' }]} go={go} />
      <H1>Moving System</H1>
      <H3 id="speed">Speed</H3>
      <Blockquote>Slow traversal kills pacing and breaks immersion.</Blockquote>
      <Blockquote>- Perceived speed matters more than actual speed</Blockquote>
      <Blockquote>- New traversal actions feel faster than the old ones</Blockquote>
      <H3 id="engagement">Engagement</H3>
      <Blockquote>- Give players something to do en route — e.g. jumping, Knife switch,</Blockquote>
      <Blockquote>- Random events along the way to make travel feel alive — e.g. Red Dead Redemption 2</Blockquote>
    </div>
  );
}
