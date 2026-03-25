import React from 'react';
import { Breadcrumb, H1, H2, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Multiplayer</H1>
      <H2 id="teamwork-pvps">Teamwork PvPs</H2>
      <UL>
        <LI>Unlike co-op games, overemphasizing teamwork in PvPs can creates friction — players may be unwilling to communicate or simply want their moment of individual heroism.</LI>
        <LI>Offline is different. In face-to-face settings, communication and teamwork is natural. E.g. Killer Queen — a 5v5 arcade game.</LI>
      </UL>
    </div>
  );
}
