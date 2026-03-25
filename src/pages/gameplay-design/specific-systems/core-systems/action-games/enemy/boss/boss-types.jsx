import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Boss Types</H1>
      <H2 id="large-monster">Large monster</H2>
      <Blockquote>More biological feel</Blockquote>
      <H2 id="human">Human</H2>
      <Blockquote>Create a sense of mind game</Blockquote>
      <H2 id="multi-phase-bosses">Multi-phase bosses</H2>
      <UL>
        <LI>Add more moves</LI>
        <LI>Extend pressure duration</LI>
        <LI>But not shorten reaction windows</LI>
      </UL>
      <Blockquote>Phase transition can avoid the damage sponge feelings, as it splits killing the monster into phases</Blockquote>
    </div>
  );
}
