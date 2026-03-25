import React from 'react';
import { Breadcrumb, CrossLink, H1, H3, InternalLink } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Readability</H1>
      <H3><InternalLink id="intuitive-design" go={go}>Intuitive Design</InternalLink></H3>
      <H3><CrossLink pageId="enemy" anchor="enemy-readability" go={go}>Enemy Readability</CrossLink></H3>
      <H3><CrossLink pageId="boss-attacks" anchor="action-readability" go={go}>Action Readability</CrossLink></H3>
      <H3><InternalLink id="end-turn-resolution" go={go}>End-turn Resolution</InternalLink></H3>
    </div>
  );
}
