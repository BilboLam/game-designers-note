import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Suspense</H1>
      <H2 id="recurring-hooks">Recurring hooks</H2>
      <Blockquote>Re-surface the main mystery and thread the story together</Blockquote>
      <H2 id="twists">Twists</H2>
      <Blockquote>Make players feel they guessed right but they didn't</Blockquote>
      <H2 id="suspense-reveal">Suspense Reveal</H2>
      <Blockquote>If the suspense reveal and emotional climax are too tightly packed, players may not have enough time to absorb them</Blockquote>
    </div>
  );
}
