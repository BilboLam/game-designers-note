import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Juice Elements</H1>
      <H2 id="animation-feedback">Animation Feedback</H2>
      <Blockquote>Momentum &amp; weight</Blockquote>
      <Blockquote>Hit stun</Blockquote>
      <Blockquote>Hit animation</Blockquote>
      <H2 id="visual-feedback">Visual Feedback</H2>
      <Blockquote>VFX</Blockquote>
      <Blockquote>Impact blur</Blockquote>
      <H2 id="audio-feedback">Audio Feedback</H2>
      <H2 id="screen-feedback">Screen Feedback</H2>
      <Blockquote>Screen shake</Blockquote>
      <Blockquote>Flash</Blockquote>
      <Blockquote>Time Freeze</Blockquote>
    </div>
  );
}
