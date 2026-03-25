import React from 'react';
import { Breadcrumb, H1, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Readability</H1>
      <UL>
        <LI>Intuitive Design</LI>
        <LI>Enemy Readability</LI>
        <LI>Action Readability</LI>
        <LI>End-turn Resolution</LI>
      </UL>
    </div>
  );
}
