import React from 'react';
import { Breadcrumb, ExtLink, H1, LI, OL } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Game Vision' }]} go={go} />
      <H1><Icon name="arrow-progress" className="page-icon" />Game Loop</H1>
      <OL>
        <LI>Start with the <ExtLink href="https://claritypotion.com/2024/04/15/30-second-fun-focusing-principle/">30-second core loop</ExtLink>.</LI>
        <LI>Build nested loops where small loops feed larger ones.</LI>
      </OL>
    </div>
  );
}
