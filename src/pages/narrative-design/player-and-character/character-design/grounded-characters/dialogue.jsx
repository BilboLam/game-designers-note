import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Dialogue</H1>
      <H2 id="character-through-dialogue"><InternalLink id="character-through-dialogue" go={go}>Character Through Dialogue</InternalLink></H2>
      <P>Show personality through word choice, rhythm, and subtext.</P>
      <H2 id="exposition-through-dialogue"><InternalLink id="exposition-through-dialogue" go={go}>Exposition Through Dialogue</InternalLink></H2>
      <P>Explaining world setting or tasks.</P>
    </div>
  );
}
