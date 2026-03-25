import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Objects of Curiosity</H1>
      <H2 id="lore">Lore</H2>
      <Blockquote>Not just lore, but lore should tied to player experience — otherwise it's like a museum biography</Blockquote>
      <H2 id="story">Story</H2>
      <Blockquote>random events / side quest choices</Blockquote>
      <H2 id="mechanics">Mechanics</H2>
      <Blockquote>interactions — e.g. Noita</Blockquote>
      <H2 id="environment">Environment</H2>
      <H2 id="spectacle-wide-exploration-space">Spectacle / wide exploration space</H2>
      <Blockquote>must avoid homogeneity or it becomes boring</Blockquote>
      <H2 id="connected-maps">Connected maps</H2>
      <Blockquote>e.g. Souls series</Blockquote>
    </div>
  );
}
