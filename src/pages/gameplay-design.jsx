import React from 'react';
import { Breadcrumb, H1, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[]} go={go} />
      <H1>Gameplay Design</H1>
      <P>Game Vision | Game Designer's Note</P>
    </div>
  );
}
