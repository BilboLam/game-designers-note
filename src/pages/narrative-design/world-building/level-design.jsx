import React from 'react';
import { Breadcrumb, H1, LI, P, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Level Design</H1>
      <P>Level Design can tell stories through a variety of means</P>
      <UL>
        <LI>player's interactions with the game's mechanics</LI>
        <LI>exploration of the environment</LI>
        <LI>observation of the scripted story elements</LI>
      </UL>
    </div>
  );
}
