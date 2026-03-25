import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Narrative Timing</H1>
      <H3 id="woven-into-gameplay">Woven into gameplay</H3>
      <Blockquote>E.g. Dys4ia: Movement resistance = sense of powerlessness</Blockquote>
      <H3 id="cutscenes">Cutscenes</H3>
      <Blockquote>- Fixed camera: Environment and character</Blockquote>
      <Blockquote>- Movable camera: Specific areas / follow-quest</Blockquote>
      <H3 id="between-chapters">Between chapters</H3>
      <Blockquote>Help tuning game Beat.</Blockquote>
    </div>
  );
}
