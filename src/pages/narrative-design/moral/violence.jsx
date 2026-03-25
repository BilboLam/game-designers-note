import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Narrative Design', id: 'narrative-design' }, { label: 'Moral' }]} go={go} />
      <H1><Icon name="hand-fist" className="page-icon" />Violence</H1>
      <H3 id="create-room-for-reflection">Create room for reflection</H3>
      <Blockquote>Gameplay involving violence can serve as a form of escapism—but escapism is not inherently harmful. It becomes more meaningful when the game is aware of what it is escaping from. Players can still enjoy the experience, while the game leaves room for moments of quiet discomfort or reflection.</Blockquote>
    </div>
  );
}
