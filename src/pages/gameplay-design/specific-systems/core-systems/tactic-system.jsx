import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Core Systems' }]} go={go} />
      <H1>Tactic System</H1>
      <H3 id="prioritize-tactics">Prioritize Tactics</H3>
      <Blockquote>Shadow Tactics and Desperados are still called RTT, but the adding of pause decrease the reaction demand so players can focus more decision-making. Personally, that's the right trade.</Blockquote>
    </div>
  );
}
