import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Extra Content</H1>
      <H3 id="easter-eggs">Easter eggs</H3>
      <H3 id="games-outside-of-games">Games outside of games</H3>
      <Blockquote>E.g. Inscryption</Blockquote>
      <H3 id="forums">Forums</H3>
      <H3 id="meta-design">Meta design</H3>
    </div>
  );
}
