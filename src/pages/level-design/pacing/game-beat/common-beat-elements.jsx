import React from 'react';
import { Breadcrumb, H1, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Pacing', id: 'pacing' }, { label: 'Game Beat' }]} go={go} />
      <H1>Common Beat Elements</H1>
      <UL>
        <LI>Combat</LI>
        <LI>Choreo/cinematic</LI>
        <LI>Exploration</LI>
        <LI>Puzzles</LI>
      </UL>
    </div>
  );
}
