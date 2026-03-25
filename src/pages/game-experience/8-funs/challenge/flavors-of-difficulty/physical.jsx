import React from 'react';
import { Breadcrumb, H1, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Physical</H1>
      <UL>
        <LI>Timing</LI>
        <LI>Precision</LI>
        <LI>Amount of inputs</LI>
      </UL>
    </div>
  );
}
