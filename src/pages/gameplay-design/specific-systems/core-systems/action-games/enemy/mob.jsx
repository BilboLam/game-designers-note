import React from 'react';
import { Breadcrumb, H1, H2, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Mob</H1>
      <H2 id="how-to-stack-enemies">How to stack enemies</H2>
      <UL>
        <LI>Make enemy actions interruptible</LI>
        <LI>Turn large numbers of enemies into satisfaction — e.g. Ninja Gaiden executions</LI>
        <LI>Turn many-vs-one into player advantage — e.g. using walls</LI>
      </UL>
    </div>
  );
}
