import React from 'react';
import { Breadcrumb, H1, H3, InternalLink } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Creating Unease</H1>
      <H3 id="unknown"><InternalLink id="unknown" go={go}>Unknown</InternalLink></H3>
      <H3 id="uncanny-valley"><InternalLink id="uncanny-valley" go={go}>Uncanny Valley</InternalLink></H3>
    </div>
  );
}
