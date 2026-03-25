import React from 'react';
import { Blockquote, Breadcrumb, H1, H2, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Review</H1>
      <P>Ensure you meet your design objectives.</P>
      <H2 id="cognitive-map-readable-without-hud">Cognitive map readable without HUD?</H2>
      <Blockquote>HUD leads us to digest spaces egocentrically instead of allocentrically</Blockquote>
      <H2 id="id-9-self-check-questions">9 self-check questions</H2>
      <H2 id="too-large">Too large?</H2>
      <Blockquote>Is the player too small in scene? Is that intentional?</Blockquote>
      <H2 id="too-symmetric">Too symmetric?</H2>
      <Blockquote>Use elements to show difference in symmetric space</Blockquote>
      <H2 id="too-flat">Too flat?</H2>
      <Blockquote>Extend vertically</Blockquote>
      <H2 id="too-monotonous">Too monotonous?</H2>
      <Blockquote>Combine different gameplay</Blockquote>
      <H2 id="too-open">Too open?</H2>
      <Blockquote>Content visible all at once; add occlusion</Blockquote>
      <H2 id="too-empty">Too empty?</H2>
      <Blockquote>Shrink the level</Blockquote>
      <H2 id="too-linear">Too linear?</H2>
      <Blockquote>Offer different choices per player; n++ lecture: multiple solution routes</Blockquote>
      <H2 id="too-samey">Too samey?</H2>
      <Blockquote>Level as journey with beginning, climax, end</Blockquote>
      <H2 id="too-generic">Too generic?</H2>
      <Blockquote>Use unique mechanic identity</Blockquote>
    </div>
  );
}
