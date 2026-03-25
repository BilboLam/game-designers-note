import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>How our Brain Works</H1>
      <H2 id="brain-cognitive-levels">Brain cognitive levels</H2>
      <H3 id="integrative-associative-intuitive">Integrative → associative → intuitive</H3>
      <Blockquote>The arc of mastering controls. At first, every input requires conscious effort. With practice, actions become fluid. Eventually they're automatic.</Blockquote>
      <H3 id="conscious-thought">Conscious thought</H3>
      <Blockquote>This is a different kind of engagement — deliberate, not reactive. E.g. in the pre-level planning phase, players think ahead: what's the layout, what's the threat, what's the approach.</Blockquote>
      <H3 id="reaction-time">Reaction time</H3>
      <P>0.3s in average, 0.1s for genius</P>
      <Blockquote>However, in games, players need more time to respond than a pure reaction test since</Blockquote>
      <Blockquote>- Visual cues are gradual rather than sudden</Blockquote>
      <Blockquote>- Complex environments demand three things simultaneously: Attention allocation</Blockquote>
      <Blockquote>- Pattern recognition</Blockquote>
      <Blockquote>- Behaviour logic comprehension</Blockquote>
    </div>
  );
}
