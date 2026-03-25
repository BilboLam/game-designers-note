import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Core Systems', id: 'core-systems' }, { label: 'Action Games' }]} go={go} />
      <H1>Enemy</H1>
      <H3 id="enemy-readability">Enemy Readability</H3>
      <P>Players should be able to locate and read enemies quickly</P>
      <Blockquote>E.g. The Finals: clean, bright visual style keeps enemies readable at a glance</Blockquote>
      <H3 id="mob"><InternalLink id="mob" go={go}>Mob</InternalLink></H3>
      <P>Standard enemies that shape routine combat</P>
      <H3 id="boss"><InternalLink id="boss" go={go}>Boss</InternalLink></H3>
      <P>Stronger encounters</P>
    </div>
  );
}
