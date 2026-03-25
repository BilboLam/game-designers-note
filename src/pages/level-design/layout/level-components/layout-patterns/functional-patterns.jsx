import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Layout', id: 'layout' }, { label: 'Level Components', id: 'level-components' }, { label: 'Layout Patterns' }]} go={go} />
      <H1>Functional Patterns</H1>
      <H3 id="guidance">Guidance</H3>
      <H3 id="preview">Preview</H3>
      <Blockquote>Show currently inaccessible areas to stimulate the desire to explore.</Blockquote>
      <H3 id="safe-zones">Safe zones</H3>
      <Blockquote>Allow analysis</Blockquote>
      <H3 id="layering">Layering</H3>
      <Blockquote>1. Introduce Rules/Mechanics in Isolation</Blockquote>
      <Blockquote>- Remove Distractions</Blockquote>
      <Blockquote>2. Remove Challenges</Blockquote>
      <Blockquote>3. Layering this mechanics with other duress</Blockquote>
      <Blockquote>- Physical Circumstance (Layout)</Blockquote>
      <Blockquote>4. Combine with Mechanics (Such as Enemies)</Blockquote>
      <Blockquote>5. Time Pressure (Use Sparingly)</Blockquote>
      <H3 id="pace-breaking">Pace-breaking</H3>
      <Blockquote>Changing the dramatic arc</Blockquote>
      <H3 id="create-your-layout-modules">Create Your Layout Modules</H3>
      <Blockquote>The Left 4 Dead 2 team analyzed playtests of the original game, identifying fun gameplay modules like Capillaries and<strong> </strong>Crescendo Event. You can also identify the layout modules of your game and reuse them.</Blockquote>
    </div>
  );
}
