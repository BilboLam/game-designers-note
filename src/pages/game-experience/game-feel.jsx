import React from 'react';
import { Blockquote, Breadcrumb, ExtLink, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Game Feel</H1>
      <Blockquote>the key to games, or "fun," is the relative size of the reaction for every action that you take. On a game console, you have a controller, which gives you very small inputs right on a physical level, but it's creating a huge reaction on-screen, for what you're seeing. This is very appealing for people to play.</Blockquote>
      <Blockquote>— <ExtLink href="https://www.gamedeveloper.com/business/the-philosophy-of-a-ninja-tomonobu-itagaki-speaks">Tomonobu Itagaki</ExtLink></Blockquote>
      <H2 id="readability"><InternalLink id="readability" go={go}>Readability</InternalLink></H2>
      <P>Let players understand the game without friction.</P>
      <H2 id="fluidity"><InternalLink id="fluidity" go={go}>Fluidity</InternalLink></H2>
      <P>Is gameplay smooth?</P>
      <H2 id="juice-elements"><InternalLink id="juice-elements" go={go}>Juice Elements</InternalLink></H2>
      <P>Feedback that amplifies satisfaction.</P>
    </div>
  );
}
