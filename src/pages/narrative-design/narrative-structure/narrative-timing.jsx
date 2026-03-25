import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Narrative Timing</H1>
      <H2 id="woven-into-gameplay">Woven into gameplay</H2>
      <Blockquote>E.g. Dys4ia: Movement resistance = sense of powerlessness</Blockquote>
      <H2 id="cutscenes">Cutscenes</H2>
      <Blockquote>- Fixed camera: Environment and character</Blockquote>
      <Blockquote>- Movable camera: Specific areas / follow-quest</Blockquote>
      <H2 id="between-chapters">Between chapters</H2>
      <Blockquote>Help tuning game Beat.</Blockquote>
    </div>
  );
}
