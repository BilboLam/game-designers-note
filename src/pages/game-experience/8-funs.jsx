import React from 'react';
import { Blockquote, Breadcrumb, ExtLink, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>8 Funs</H1>
      <P>
        The 8 Funs are the aesthetic categories from the MDA framework. Most games target multiple funs simultaneously.{' '}
        <ExtLink href="https://users.cs.northwestern.edu/~hunicke/MDA.pdf">MDA: A Formal Approach to Game Design and Game Research</ExtLink>
      </P>
      <H2 id="sensation"><InternalLink id="sensation" go={go}>Sensation</InternalLink></H2>
      <Blockquote>Game as sense-pleasure</Blockquote>
      <H2 id="fantasy">Fantasy</H2>
      <Blockquote>Game as make-believe</Blockquote>
      <H2 id="narrative">Narrative</H2>
      <Blockquote>Game as drama</Blockquote>
      <H2 id="challenge"><InternalLink id="challenge" go={go}>Challenge</InternalLink></H2>
      <Blockquote>Game as obstacle course</Blockquote>
      <H2 id="fellowship">Fellowship</H2>
      <Blockquote>Game as social framework</Blockquote>
      <H2 id="discovery"><InternalLink id="discovery" go={go}>Discovery</InternalLink></H2>
      <Blockquote>Game as uncharted territory</Blockquote>
      <H2 id="expression"><InternalLink id="expression" go={go}>Expression</InternalLink></H2>
      <Blockquote>Game as self-discovery</Blockquote>
      <H2 id="submission"><InternalLink id="submission" go={go}>Submission</InternalLink></H2>
      <Blockquote>Game as pastime</Blockquote>
    </div>
  );
}
