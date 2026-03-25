import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, InternalLink } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Character Through Dialogue</H1>
      <H3 id="speech-patterns-and-accent">Speech patterns &amp; accent</H3>
      <Blockquote>Combine with character behavior or world-view</Blockquote>
      <H3 id="character-traits">Character traits</H3>
      <Blockquote>Build <InternalLink id="emotional-link" go={go}>Charisma</InternalLink></Blockquote>
      <H3 id="show-character-motivation">Show Character Motivation</H3>
      <Blockquote>Hide motivation in subtext</Blockquote>
    </div>
  );
}
