import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Game Experience', id: 'game-experience' }, { label: 'Game Feel' }]} go={go} />
      <H1><Icon name="bolt" className="page-icon" />Juice Elements</H1>
      <H3 id="animation-feedback">Animation Feedback</H3>
      <Blockquote>Momentum &amp; weight</Blockquote>
      <Blockquote>Hit stun</Blockquote>
      <Blockquote>Hit animation</Blockquote>
      <H3 id="visual-feedback">Visual Feedback</H3>
      <Blockquote>VFX</Blockquote>
      <Blockquote>Impact blur</Blockquote>
      <H3 id="audio-feedback">Audio Feedback</H3>
      <H3 id="screen-feedback">Screen Feedback</H3>
      <Blockquote>Screen shake</Blockquote>
      <Blockquote>Flash</Blockquote>
      <Blockquote>Time Freeze</Blockquote>
    </div>
  );
}
