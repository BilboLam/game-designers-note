import React from 'react';
import { Blockquote, Breadcrumb, Callout, CrossLink, ExtLink, H1, H2, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Collectibles</H1>
      <H2 id="design-level-around-secrets-not-secrets-into-levels">Design level around secrets, not secrets into levels</H2>
      <H2 id="dont-let-finding-rewards-be-a-task"><CrossLink pageId="rewarding-exploration" anchor="dont-let-finding-rewards-be-a-task" go={go}>Don't let finding rewards be a task</CrossLink></H2>
      <Blockquote>Korok mask, helps you know where has a collectible, which is great. But showing the total collectibles of 1000 Koroks doesn't motivate players at all.</Blockquote>
      <H2 id="consistency-of-cues">Consistency of cues</H2>
      <H2 id="unwritten-rules">Unwritten rules</H2>
      <Blockquote>DKC2: bananas are always helpful; if bananas are above a pit, jumping in won't kill you; DKC1 didn't follow this rule</Blockquote>
      <H2 id="anti-intuitive">Anti-intuitive</H2>
      <Blockquote>Anti-intuitive example: most DK coins hidden in the level but one is hidden in a bonus room where players are not expecting secrets</Blockquote>
      <P><ExtLink href="https://www.sirlin.net/articles/the-secrets-of-donkey-kong-country-2">The Secrets of Donkey Kong Country 2.pdf</ExtLink></P>
      <Callout type="info">Achievements and collectibles are not inherently fun, but the process of discovering them can be.</Callout>
    </div>
  );
}
