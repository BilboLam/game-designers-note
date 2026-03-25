import React from 'react';
import { Breadcrumb, H1, H3, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Core Systems', id: 'core-systems' }, { label: 'Action Games', id: 'action-games' }, { label: 'Enemy' }]} go={go} />
      <H1>Mob</H1>
      <H3 id="how-to-stack-enemies">How to stack enemies</H3>
      <UL>
        <LI>Make enemy actions interruptible</LI>
        <LI>Turn large numbers of enemies into satisfaction — e.g. Ninja Gaiden executions</LI>
        <LI>Turn many-vs-one into player advantage — e.g. using walls</LI>
      </UL>
    </div>
  );
}
