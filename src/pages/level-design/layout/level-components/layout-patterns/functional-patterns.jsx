import React from 'react';
import { Annotation, Blockquote, Breadcrumb, H1, H3, LI, OL, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Functional Patterns</H1>
      <H3 id="guidance">Guidance</H3>
      <H3 id="preview">Preview</H3>
      <Blockquote>Show currently inaccessible areas to stimulate the desire to explore.</Blockquote>
      <H3 id="safe-zones">Safe zones</H3>
      <Blockquote>Allow analysis</Blockquote>
      <H3 id="layering">Layering</H3>
      <Blockquote>
        <OL>
          <LI>Introduce Rules/Mechanics in Isolation
            <UL>
              <LI>Remove Distractions</LI>
              <LI>Remove Challenges</LI>
            </UL>
          </LI>
          <LI>Layering this mechanics with other duress
            <UL>
              <LI>Physical Circumstance (Layout)</LI>
              <LI>Combine with Mechanics (Such as Enemies)</LI>
              <LI>Time Pressure (Use Sparingly)</LI>
            </UL>
          </LI>
        </OL>
      </Blockquote>
      <H3 id="pace-breaking">Pace-breaking</H3>
      <Blockquote>Changing the dramatic arc</Blockquote>
      <H3 id="create-your-layout-modules">Create Your Layout Modules</H3>
      <Blockquote>
        The Left 4 Dead 2 team analyzed playtests of the original game, identifying fun gameplay modules like
        {' '}
        <Annotation note="Side paths off the main flow. Useful for item placement.">Capillaries</Annotation>
        {' '}
        and
        <strong> </strong>
        <Annotation note="High intensity combat challenge.">Crescendo</Annotation>
        {' '}
        Event. You can also identify the layout modules of your game and reuse them.
      </Blockquote>
    </div>
  );
}
