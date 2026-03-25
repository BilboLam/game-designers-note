import React from 'react';
import { Blockquote, Breadcrumb, H1, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Boss Reaction</H1>
      <P>The boss should also feel like a living things that respond to damage</P>
      <Blockquote>E.g. In Monster Hunter, monsters flinch, get stunned, drool, and have parts broken from damage.</Blockquote>
    </div>
  );
}
