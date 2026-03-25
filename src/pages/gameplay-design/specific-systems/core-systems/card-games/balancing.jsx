import React from 'react';
import { Blockquote, Breadcrumb, Callout, H1, H3, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Balancing</H1>
      <H3 id="power-sorting">Power Sorting</H3>
      <UL>
        <LI>Power sort by tags</LI>
      </UL>
      <Callout type="info">
        <span>Underconstruction</span>
      </Callout>
      <H3 id="card-rarity">Card Rarity</H3>
      <Blockquote>Rare cards can be powerful, but more often intricate</Blockquote>
      <H3 id="handle-power-creep">Handle Power Creep</H3>
      <UL>
        <LI>Include counter</LI>
        <LI>Think about card weaknesses beforehand</LI>
      </UL>
    </div>
  );
}
