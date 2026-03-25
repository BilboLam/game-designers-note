import React from 'react';
import { Breadcrumb, H1, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Detective Games</H1>
      <P>Clue-driven, tests information integration and inference</P>
    </div>
  );
}
