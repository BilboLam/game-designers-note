import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Violence</H1>
      <H2 id="create-room-for-reflection">Create room for reflection</H2>
      <Blockquote>Gameplay involving violence can serve as a form of escapism—but escapism is not inherently harmful. It becomes more meaningful when the game is aware of what it is escaping from. Players can still enjoy the experience, while the game leaves room for moments of quiet discomfort or reflection.</Blockquote>
    </div>
  );
}
