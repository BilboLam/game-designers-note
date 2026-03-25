import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, LI, P, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Player Agency</H1>
      <P>How much players feel in control of their own experience.</P>
      <P>Designers shape player agency by encouraging or enforcing how players interact with the game.</P>
      <H2 id="encourage">Encourage</H2>
      <Blockquote>Create conditions where good play feels rewarding, not required. Players find the fun themselves. E.g. combo systems, style meters (Devil May Cry, three-point shot in basketball)</Blockquote>
      <H2 id="enforce">Enforce</H2>
      <Blockquote>Remove friction and guide players directly into the fun zone</Blockquote>
      <UL>
        <LI>Too much freedom → feel lost</LI>
        <LI>Too much restriction → feel controlled</LI>
      </UL>
    </div>
  );
}
