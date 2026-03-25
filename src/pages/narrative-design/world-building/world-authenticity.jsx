import React from 'react';
import { Blockquote, Breadcrumb, CrossLink, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>World Authenticity</H1>
      <H3 id="internal-consistency-between-world-and-gameplay">Internal consistency between world and gameplay</H3>
      <Blockquote>A backpack can hold a fridge, but must also be able to hold a microwave</Blockquote>
      <H3 id="small-interactions">Small interactions</H3>
      <Blockquote>E.g. toilets, vending machines, <CrossLink pageId="emotional-link" anchor="small-interactions" go={go}>character interactions</CrossLink></Blockquote>
    </div>
  );
}
