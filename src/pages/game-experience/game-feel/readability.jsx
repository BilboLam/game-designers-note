import React from 'react';
import { Breadcrumb, H1, LI, UL } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience', id: 'game-experience' }, { label: 'Game Feel' }]} go={go} />
      <H1><Icon name="glasses" className="page-icon" />Readability</H1>
      <UL>
        <LI>Intuitive Design</LI>
        <LI>Enemy Readability</LI>
        <LI>Action Readability</LI>
        <LI>End-turn Resolution</LI>
      </UL>
    </div>
  );
}
