import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Guidance' }]} go={go} />
      <H1><Icon name="graduation-cap" className="page-icon" />Tutorial Levels</H1>
      <P>Layout can be an effective, natural tutorial</P>
      <H3 id="passive-tutorial">Passive tutorial</H3>
      <P>Let players trigger mechanics accidentally.</P>
      <Blockquote>E.g. Super Mario L1</Blockquote>
      <H3 id="mimicing">Mimicing</H3>
      <P>Players naturally imitate the behaviors they observe</P>
      <Blockquote>NPCs and enemies can be designed to model the actions we want players to learn.</Blockquote>
      <H3 id="pre-teaching">Pre-teaching</H3>
      <Blockquote>Use mobs to pre-teach boss mechanics.</Blockquote>
    </div>
  );
}
