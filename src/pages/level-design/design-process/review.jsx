import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Review</H1>
      <P>Ensure you meet your design objectives.</P>
      <H3 id="cognitive-map-readable-without-hud">Cognitive map readable without HUD?</H3>
      <Blockquote>HUD leads us to digest spaces egocentrically instead of allocentrically</Blockquote>
      <H3 id="id-9-self-check-questions">9 self-check questions</H3>
      <H3 id="too-large">Too large?</H3>
      <Blockquote>Is the player too small in scene? Is that intentional?</Blockquote>
      <H3 id="too-symmetric">Too symmetric?</H3>
      <Blockquote>Use elements to show difference in symmetric space</Blockquote>
      <H3 id="too-flat">Too flat?</H3>
      <Blockquote>Extend vertically</Blockquote>
      <H3 id="too-monotonous">Too monotonous?</H3>
      <Blockquote>Combine different gameplay</Blockquote>
      <H3 id="too-open">Too open?</H3>
      <Blockquote>Content visible all at once; add occlusion</Blockquote>
      <H3 id="too-empty">Too empty?</H3>
      <Blockquote>Shrink the level</Blockquote>
      <H3 id="too-linear">Too linear?</H3>
      <Blockquote>Offer different choices per player; n++ lecture: multiple solution routes</Blockquote>
      <H3 id="too-samey">Too samey?</H3>
      <Blockquote>Level as journey with beginning, climax, end</Blockquote>
      <H3 id="too-generic">Too generic?</H3>
      <Blockquote>Use unique mechanic identity</Blockquote>
    </div>
  );
}
