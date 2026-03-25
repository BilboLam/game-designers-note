import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Narrative Design', id: 'narrative-design' }, { label: 'Narrative Structure' }]} go={go} />
      <H1><Icon name="hourglass-half" className="page-icon" />Suspense</H1>
      <H3 id="recurring-hooks">Recurring hooks</H3>
      <Blockquote>Re-surface the main mystery and thread the story together</Blockquote>
      <H3 id="twists">Twists</H3>
      <Blockquote>Make players feel they guessed right but they didn't</Blockquote>
      <H3 id="suspense-reveal">Suspense Reveal</H3>
      <Blockquote>If the suspense reveal and emotional climax are too tightly packed, players may not have enough time to absorb them</Blockquote>
    </div>
  );
}
