import React from 'react';
import { Breadcrumb, H1, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Game Experience</H1>
      <P>8 Funs | Game Designer's Note</P>
    </div>
  );
}
