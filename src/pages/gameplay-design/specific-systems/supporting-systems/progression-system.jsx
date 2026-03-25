import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Supporting Systems' }]} go={go} />
      <H1>Progression System</H1>
      <H3 id="character-specific-growth">Character-specific Growth</H3>
      <Blockquote>When there are multi characters, avoid one character gaining all growth while others stagnate.</Blockquote>
    </div>
  );
}
