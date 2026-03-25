import React from 'react';
import { Breadcrumb, H1, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Core Systems', id: 'core-systems' }, { label: 'Action Games', id: 'action-games' }, { label: 'Enemy', id: 'enemy' }, { label: 'Boss', id: 'boss' }, { label: 'Boss Design' }]} go={go} />
      <H1>Stagger System</H1>
      <UL>
        <LI>Creates multiple mini-loops within a fight — more execution opportunities, less chance of leaving flow state</LI>
        <LI>Executes also smooth over threshold transition— the boss visibly breaks rather than just hitting a number</LI>
      </UL>
    </div>
  );
}
