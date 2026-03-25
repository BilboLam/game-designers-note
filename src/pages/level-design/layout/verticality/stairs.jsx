import React from 'react';
import { Breadcrumb, Figure, H1 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Stairs</H1>
      <Figure src="/images/stair-1.png" />
      <Figure src="/images/stair-2.png" />
      <Figure src="/images/stair-3.png" />
      <Figure src="/images/stair-4.png" />
    </div>
  );
}
