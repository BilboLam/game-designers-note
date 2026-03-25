import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Protagonist Tone</H1>
      <H3 id="expressive-protagonist">Expressive protagonist</H3>
      <Blockquote>Keep player and character separate; breaking immersion can create drama</Blockquote>
      <H3 id="immersive-protagonist">Immersive protagonist</H3>
      <Blockquote>Let the player embody the avatar</Blockquote>
    </div>
  );
}
