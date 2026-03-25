import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Negotiation System</H1>
      <H2 id="making-negotiation-fun">Making negotiation fun</H2>
      <UL>
        <LI><InternalLink id="detective-games" go={go}>Inference from Information</InternalLink> — weave negotiation into narrative
          <UL>
            <LI>Inference from customer personality, body language, wordings</LI>
          </UL>
        </LI>
        <LI>Reputation system</LI>
        <LI>Supply &amp; Demand system</LI>
        <LI>Special events (liars, altruists)</LI>
        <LI>Strengthen player autonomy
          <UL>
            <LI>negotiation style (marketing strategy)</LI>
            <LI>moral judgement</LI>
          </UL>
        </LI>
        <LI>Various outcomes</LI>
      </UL>
    </div>
  );
}
