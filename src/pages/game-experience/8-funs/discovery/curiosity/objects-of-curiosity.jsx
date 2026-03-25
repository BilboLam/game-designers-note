import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Objects of Curiosity</H1>
      <H3 id="lore">Lore</H3>
      <Blockquote>Not just lore, but lore should tied to player experience — otherwise it's like a museum biography</Blockquote>
      <H3 id="story">Story</H3>
      <Blockquote>random events / side quest choices</Blockquote>
      <H3 id="mechanics">Mechanics</H3>
      <Blockquote>interactions — e.g. Noita</Blockquote>
      <H3 id="environment">Environment</H3>
      <H3 id="spectacle-wide-exploration-space">Spectacle / wide exploration space</H3>
      <Blockquote>must avoid homogeneity or it becomes boring</Blockquote>
      <H3 id="connected-maps">Connected maps</H3>
      <Blockquote>e.g. Souls series</Blockquote>
    </div>
  );
}
