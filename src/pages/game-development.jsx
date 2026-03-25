import React from 'react';
import { Breadcrumb, H1, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Game Development</H1>
      <P>Structure | Game Designer's Note</P>
    </div>
  );
}
