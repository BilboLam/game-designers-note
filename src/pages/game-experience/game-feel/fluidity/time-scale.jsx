import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Time-scale</H1>
      <H3 id="slow-motion">Slow Motion</H3>
      <UL>
        <LI>Extra reaction time</LI>
        <LI>Amplifies the impact of key moments</LI>
        <LI>Change rhythm</LI>
      </UL>
      <Blockquote>E.g. Black Myth: Wukong's perfect dodge</Blockquote>
    </div>
  );
}
