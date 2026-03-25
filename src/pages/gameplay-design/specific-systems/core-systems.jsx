import React from 'react';
import { Breadcrumb, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Core Systems</H1>
      <P>Core systems are the main gameplay of a game.</P>
      <H2 id="action-games"><InternalLink id="action-games" go={go}>Action Games</InternalLink></H2>
      <H2 id="tactic-games"><InternalLink id="tactic-system" go={go}>Tactic Games</InternalLink></H2>
      <H2 id="puzzle-games"><InternalLink id="puzzle-games" go={go}>Puzzle Games</InternalLink></H2>
      <H2 id="detective-games"><InternalLink id="detective-games" go={go}>Detective Games</InternalLink></H2>
      <H2 id="card-games"><InternalLink id="card-games" go={go}>Card Games</InternalLink></H2>
    </div>
  );
}
