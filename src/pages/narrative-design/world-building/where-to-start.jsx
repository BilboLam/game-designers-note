import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Where to Start</H1>
      <P>It is easier to start from something rather than from scratch.</P>
      <H3 id="existing-foundations">Existing foundations</H3>
      <Blockquote>Licensed IP and mythology</Blockquote>
      <H3 id="adapted-settings">Adapted settings</H3>
      <Blockquote>E.g. D&amp;D</Blockquote>
      <H3 id="reality-with-a-little-fantasy">Reality with a little fantasy</H3>
      <Blockquote>E.g. Life Is Strange</Blockquote>
    </div>
  );
}
