import React from 'react';
import { Blockquote, Breadcrumb, Callout, CheckItem, CheckList, ExtLink, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Core Systems', id: 'core-systems' }, { label: 'Action Games', id: 'action-games' }, { label: 'Player' }]} go={go} />
      <H1>Platformer</H1>
      <H3 id="celeste-game-feel-tricks">Celeste Game Feel Tricks</H3>
      <CheckList>
        <CheckItem>Coyote time</CheckItem>
        <CheckItem>Jump buffering</CheckItem>
        <CheckItem>Halved gravity at jump peak — allows adjusting for landing</CheckItem>
        <CheckItem>Jump corner correction / dash corner correction</CheckItem>
        <CheckItem>Lift momentum storage — store momentum for a few frames after platform stops</CheckItem>
        <CheckItem>Wall jump: 2px from wall; super wall jump: 5px (in 320×180 game)</CheckItem>
      </CheckList>
      <Callout type="info">
        <span>give everything a little buffer</span>
      </Callout>
      <Blockquote><ExtLink href="https://maddymakesgames.com/articles/celeste_and_forgiveness/index.html">Celeste &amp; Forgiveness</ExtLink></Blockquote>
    </div>
  );
}
