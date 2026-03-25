import React from 'react';
import { Blockquote, Breadcrumb, ExtLink, H1, H3, InternalLink, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Reward & Exploration' }]} go={go} />
      <H1><Icon name="coins" className="page-icon" />Collectibles</H1>
      <H3 id="design-level-around-secrets-not-secrets-into-levels">Design level around secrets, not secrets into levels</H3>
      <H3 id="dont-let-finding-rewards-be-a-task">Don't let finding rewards be a task</H3>
      <Blockquote>Korok mask, helps you know where has a collectible, which is great. But showing the total collectibles of 1000 Koroks doesn't motivate players at all.</Blockquote>
      <H3 id="consistency-of-cues">Consistency of cues</H3>
      <H3 id="unwritten-rules">Unwritten rules</H3>
      <Blockquote>DKC2: bananas are always helpful; if bananas are above a pit, jumping in won't kill you; DKC1 didn't follow this rule</Blockquote>
      <H3 id="anti-intuitive">Anti-intuitive</H3>
      <Blockquote>Anti-intuitive example: most DK coins hidden in the level but one is hidden in a bonus room where players are not expecting secrets</Blockquote>
      <P>file-pdf737KB<ExtLink href="https://2702655020-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FRBtL4bkZWbF1vqRmc4h2%2Fuploads%2FpzJh7G1iwh7IKJIaV3iL%2FThe%20Secrets%20of%20Donkey%20Kong%20Country%202.pdf?alt=media&token=5beb0b1d-4e7b-4cb0-a859-370947d3796d">The Secrets of Donkey Kong Country 2.pdf</ExtLink>PDFdownloadDownload<ExtLink href="https://2702655020-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FRBtL4bkZWbF1vqRmc4h2%2Fuploads%2FpzJh7G1iwh7IKJIaV3iL%2FThe%20Secrets%20of%20Donkey%20Kong%20Country%202.pdf?alt=media&token=5beb0b1d-4e7b-4cb0-a859-370947d3796d">arrow-up-right-from-squareOpen</ExtLink>circle-infoAchievements and collectibles are not inherently fun, but the process of discovering them can be</P>
    </div>
  );
}
