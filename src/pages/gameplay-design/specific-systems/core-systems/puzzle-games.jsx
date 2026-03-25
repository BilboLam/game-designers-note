import React from 'react';
import { Breadcrumb, H1, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Puzzle Games</H1>
      <P>Rule-driven, tests abstract thinking</P>
      <P><InternalLink id="puzzle-design" go={go}>Puzzle Design</InternalLink></P>
    </div>
  );
}
