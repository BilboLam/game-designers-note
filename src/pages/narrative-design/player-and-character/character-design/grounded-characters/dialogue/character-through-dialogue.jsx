import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, InternalLink } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Character Through Dialogue</H1>
      <H2 id="speech-patterns-and-accent">Speech patterns &amp; accent</H2>
      <Blockquote>Combine with character behavior or world-view</Blockquote>
      <H2 id="character-traits">Character traits</H2>
      <Blockquote>Build <InternalLink id="emotional-link" go={go}>Charisma</InternalLink></Blockquote>
      <H2 id="show-character-motivation">Show Character Motivation</H2>
      <Blockquote>Hide motivation in subtext</Blockquote>
    </div>
  );
}
