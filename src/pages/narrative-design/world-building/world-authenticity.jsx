import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, InternalLink } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Narrative Design', id: 'narrative-design' }, { label: 'World Building' }]} go={go} />
      <H1><Icon name="link" className="page-icon" />World Authenticity</H1>
      <H3 id="internal-consistency-between-world-and-gameplay">Internal consistency between world and gameplay</H3>
      <Blockquote>A backpack can hold a fridge, but must also be able to hold a microwave</Blockquote>
      <H3 id="small-interactions">Small interactions</H3>
      <Blockquote>E.g. toilets, vending machines, character interactions</Blockquote>
    </div>
  );
}
