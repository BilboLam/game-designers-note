import React from 'react';
import { Blockquote, Breadcrumb, Callout, CheckItem, CheckList, ExtLink, Figure, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Platformer</H1>
      <H3 id="celeste-game-feel-tricks">Celeste Game Feel Tricks</H3>
      <CheckList>
        <CheckItem>Coyote time</CheckItem>
      </CheckList>
      <Figure src="/images/coyote-jump.gif" />
      <CheckList>
        <CheckItem>Jump buffering</CheckItem>
      </CheckList>
      <Figure src="/images/jump-buffering.gif" />
      <CheckList>
        <CheckItem>Halved gravity at jump peak — allows adjusting for landing</CheckItem>
      </CheckList>
      <Figure src="/images/halved-gravity-jump-peak.gif" />
      <CheckList>
        <CheckItem>Corner correction</CheckItem>
      </CheckList>
      <Figure src="/images/jump-corner-correction.gif" />
      <Figure src="/images/dash-corner-correction.gif" />
      <Figure src="/images/semi-solid-popping.gif" />
      <CheckList>
        <CheckItem>Lift momentum storage — store momentum for a few frames after platform stops</CheckItem>
      </CheckList>
      <Figure src="/images/lift-momentum-storage.gif" />
      <CheckList>
        <CheckItem>Wide wall jump window — wall jump: 2px from wall; super wall jump: 5px (in 320×180 game)</CheckItem>
      </CheckList>
      <Figure src="/images/wide-wall-jump-window.gif" />
      <Callout type="info">
        <span>Give everything a little buffer</span>
      </Callout>
      <Blockquote><ExtLink href="https://maddymakesgames.com/articles/celeste_and_forgiveness/index.html">Celeste &amp; Forgiveness</ExtLink></Blockquote>
    </div>
  );
}
