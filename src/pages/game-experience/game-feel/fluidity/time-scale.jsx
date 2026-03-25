import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Time-scale</H1>
      <H2 id="slow-motion">Slow Motion</H2>
      <UL>
        <LI color="green">Extra reaction time</LI>
        <LI color="green">Amplifies the impact of key moments</LI>
        <LI color="red">Change rhythm</LI>
      </UL>
      <Blockquote>E.g. Black Myth: Wukong's perfect dodge</Blockquote>
    </div>
  );
}
