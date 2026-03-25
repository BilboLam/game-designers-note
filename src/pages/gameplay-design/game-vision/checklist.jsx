import React from 'react';
import { Breadcrumb, CheckItem, CheckList, H1 } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Game Vision' }]} go={go} />
      <H1><Icon name="clipboard-check" className="page-icon" />Checklist</H1>
      <CheckList>
        <CheckItem>Target Audience</CheckItem>
        <CheckItem>Game Length</CheckItem>
        <CheckItem></CheckItem>
      </CheckList>
    </div>
  );
}
