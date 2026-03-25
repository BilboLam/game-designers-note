import React from 'react';
import { Breadcrumb, H1, H3, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Negotiation System</H1>
      <H3 id="making-negotiation-fun">Making negotiation fun</H3>
      <UL>
        <LI>Inference from Information — weave negotiation into narrativeInference from customer personality, body language, wordings</LI>
        <LI>Reputation system</LI>
        <LI>Supply &amp; Demand system</LI>
        <LI>Special events (liars, altruists)</LI>
        <LI>Strengthen player autonomynegotiation style (marketing strategy)</LI>
        <LI>moral judgement</LI>
        <LI>Various outcomes</LI>
      </UL>
    </div>
  );
}
