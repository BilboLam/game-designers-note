import React from 'react';
import { Breadcrumb, H1 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Stairs</H1>
    </div>
  );
}
