import React from 'react';
import { Blockquote, Breadcrumb, H1, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Core Systems', id: 'core-systems' }, { label: 'Action Games', id: 'action-games' }, { label: 'Enemy', id: 'enemy' }, { label: 'Boss', id: 'boss' }, { label: 'Boss Design' }]} go={go} />
      <H1>Boss Reaction</H1>
      <P>The boss should also feel like a living things that respond to damage</P>
      <Blockquote>E.g. In Monster Hunter, monsters flinch, get stunned, drool, and have parts broken from damage.</Blockquote>
    </div>
  );
}
