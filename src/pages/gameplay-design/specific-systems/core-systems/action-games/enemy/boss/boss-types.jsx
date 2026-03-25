import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Boss Types</H1>
      <H3 id="large-monster">Large monster</H3>
      <Blockquote>More biological feel</Blockquote>
      <H3 id="human">Human</H3>
      <Blockquote>Create a sense of mind game</Blockquote>
      <H3 id="multi-phase-bosses">Multi-phase bosses</H3>
      <UL>
        <LI>Add more moves</LI>
        <LI>Extend pressure duration</LI>
        <LI>But not shorten reaction windows</LI>
      </UL>
      <Blockquote>Phase transition can avoid the damage sponge feelings, as it splits killing the monster into phases</Blockquote>
    </div>
  );
}
