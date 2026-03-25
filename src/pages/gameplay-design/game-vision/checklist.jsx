import React from 'react';
import { Breadcrumb, CheckItem, CheckList, H1 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Checklist</H1>
      <CheckList>
        <CheckItem>Target Audience</CheckItem>
        <CheckItem>Game Length</CheckItem>
        <CheckItem></CheckItem>
      </CheckList>
    </div>
  );
}
