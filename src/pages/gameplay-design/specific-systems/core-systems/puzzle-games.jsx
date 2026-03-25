import React from 'react';
import { Breadcrumb, H1, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Core Systems' }]} go={go} />
      <H1>Puzzle Games</H1>
      <P>Rule-driven, tests abstract thinking</P>
      <P><InternalLink id="puzzle-design" go={go}>Puzzle Design</InternalLink></P>
    </div>
  );
}
