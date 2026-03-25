import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Progression System</H1>
      <H2 id="character-specific-growth">Character-specific Growth</H2>
      <Blockquote>When there are multi characters, avoid one character gaining all growth while others stagnate.</Blockquote>
    </div>
  );
}
