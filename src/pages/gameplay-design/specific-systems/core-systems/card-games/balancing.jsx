import React from 'react';
import { Blockquote, Breadcrumb, Callout, CrossLink, H1, H2, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Balancing</H1>
      <H2 id="power-sorting">Power Sorting</H2>
      <UL>
        <LI>Power sort by <CrossLink pageId="card-design" anchor="categorize-cards" go={go}>tags</CrossLink></LI>
      </UL>
      <Callout type="info">
        <span>Underconstruction</span>
      </Callout>
      <H2 id="card-rarity">Card Rarity</H2>
      <Blockquote>Rare cards can be powerful, but more often intricate</Blockquote>
      <H2 id="handle-power-creep">Handle Power Creep</H2>
      <UL>
        <LI>Include counter</LI>
        <LI>Think about card weaknesses beforehand</LI>
      </UL>
    </div>
  );
}
