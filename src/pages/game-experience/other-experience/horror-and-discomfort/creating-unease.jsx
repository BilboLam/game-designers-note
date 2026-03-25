import React from 'react';
import { Breadcrumb, H1, H2, InternalLink } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Creating Unease</H1>
      <H2 id="unknown"><InternalLink id="unknown" go={go}>Unknown</InternalLink></H2>
      <H2 id="uncanny-valley"><InternalLink id="uncanny-valley" go={go}>Uncanny Valley</InternalLink></H2>
    </div>
  );
}
