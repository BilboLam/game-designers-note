import React from 'react';
import { Blockquote, Breadcrumb, ExtLink, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience' }]} go={go} />
      <H1><Icon name="bolt" className="page-icon" />Game Feel</H1>
      <Blockquote>the key to games, or "fun," is the relative size of the reaction for every action that you take. On a game console, you have a controller, which gives you very small inputs right on a physical level, but it's creating a huge reaction on-screen, for what you're seeing. This is very appealing for people to play.</Blockquote>
      <Blockquote>— <ExtLink href="https://www.gamedeveloper.com/business/the-philosophy-of-a-ninja-tomonobu-itagaki-speaks">Tomonobu Itagaki</ExtLink></Blockquote>
      <H3 id="readability"><InternalLink id="readability" go={go}>Readability</InternalLink></H3>
      <P>Let players understand the game without friction.</P>
      <H3 id="fluidity"><InternalLink id="fluidity" go={go}>Fluidity</InternalLink></H3>
      <P>Is gameplay smooth?</P>
      <H3 id="juice-elements"><InternalLink id="juice-elements" go={go}>Juice Elements</InternalLink></H3>
      <P>Feedback that amplifies satisfaction.</P>
    </div>
  );
}
