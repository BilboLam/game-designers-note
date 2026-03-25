import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Extra Content</H1>
      <H2 id="easter-eggs">Easter eggs</H2>
      <H2 id="games-outside-of-games">Games outside of games</H2>
      <Blockquote>E.g. Inscryption</Blockquote>
      <H2 id="forums">Forums</H2>
      <H2 id="meta-design">Meta design</H2>
    </div>
  );
}
