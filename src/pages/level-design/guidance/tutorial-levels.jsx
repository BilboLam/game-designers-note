import React from 'react';
import { Blockquote, Breadcrumb, ExtLink, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Tutorial Levels</H1>
      <P>Layout can be an effective, natural tutorial</P>
      <H3 id="passive-tutorial">Passive tutorial</H3>
      <P>Let players trigger mechanics accidentally.</P>
      <Blockquote>E.g. Super Mario L1</Blockquote>
      <H3 id="mimicing">Mimicing</H3>
      <P>Players naturally imitate the behaviors they observe</P>
      <Blockquote>NPCs and enemies can be designed to model the actions we want players to learn.</Blockquote>
      <H3 id="pre-teaching">Pre-teaching</H3>
      <Blockquote>Use mobs to pre-teach boss mechanics.</Blockquote>
      <P><ExtLink href="https://www.slideshare.net/slideshow/level-design-workshop-gdc-china-2012/15306714">Level Design Workshop 2012 GDC China</ExtLink></P>
    </div>
  );
}
