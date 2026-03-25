import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'Specific Systems', id: 'specific-systems' }, { label: 'Supporting Systems' }]} go={go} />
      <H1>Map System</H1>
      <H3 id="control-map-elements">Control Map Elements</H3>
      <UL>
        <LI>Auto-annotate as players explore</LI>
      </UL>
      <Blockquote>Show rooms visited, doors locked, items found.</Blockquote>
      <UL>
        <LI>Remove outdated annotation</LI>
      </UL>
      <Blockquote>Clean up annotations when an area is clear so players know it's empty.</Blockquote>
      <UL>
        <LI>Show more POI as the game progresses</LI>
      </UL>
      <Blockquote>Don't show everything at once.</Blockquote>
    </div>
  );
}
