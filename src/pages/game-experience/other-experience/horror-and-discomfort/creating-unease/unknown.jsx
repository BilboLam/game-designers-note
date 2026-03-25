import React from 'react';
import { Blockquote, Breadcrumb, H1, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Unknown</H1>
      <UL>
        <LI>Not knowing when or where enemies come from</LI>
      </UL>
      <Blockquote>E.g. Silent Hill Remake</Blockquote>
      <UL>
        <LI>Out of control</LI>
      </UL>
      <Blockquote>There are always multiple uneasy spots and you can't pay attention to one without lose attention to the others — e.g. Silent Hill Remake</Blockquote>
      <UL>
        <LI>Make players question their decisions</LI>
      </UL>
      <Blockquote>E.g. Backrooms</Blockquote>
      <UL>
        <LI>No absolute safe place</LI>
        <LI>Leaves player with no time to think</LI>
      </UL>
    </div>
  );
}
