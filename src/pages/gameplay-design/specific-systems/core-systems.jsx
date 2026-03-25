import React from 'react';
import { Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems' }]} go={go} />
      <H1><Icon name="cubes" className="page-icon" />Core Systems</H1>
      <P>Core systems are the main gameplay of a game.</P>
      <H3 id="action-games"><InternalLink id="action-games" go={go}>Action Games</InternalLink></H3>
      <H3 id="tactic-games"><InternalLink id="tactic-system" go={go}>Tactic Games</InternalLink></H3>
      <H3 id="puzzle-games"><InternalLink id="puzzle-games" go={go}>Puzzle Games</InternalLink></H3>
      <H3 id="detective-games"><InternalLink id="detective-games" go={go}>Detective Games</InternalLink></H3>
      <H3 id="card-games"><InternalLink id="card-games" go={go}>Card Games</InternalLink></H3>
    </div>
  );
}
