import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Gameplay Design', id: 'gameplay-design' }, { label: 'System Review' }]} go={go} />
      <H1><Icon name="lightbulb" className="page-icon" />Intuitive Design</H1>
      <P>Players should understand the game before they can explain it.</P>
      <H3 id="visual-intuitiveness">Visual intuitiveness</H3>
      <Blockquote>- Color</Blockquote>
      <Blockquote>- Size</Blockquote>
      <Blockquote>- Form</Blockquote>
      <Blockquote>A gun should look like it can shoot.</Blockquote>
      <Blockquote>- Placement</Blockquote>
      <H3 id="rule-intuitiveness">Rule intuitiveness</H3>
      <Blockquote>- Use real words.</Blockquote>
      <Blockquote>- Use fewer words.</Blockquote>
      <Blockquote>- Keep flavor text separate from rules.</Blockquote>
      <Blockquote>- Revise, simplify, or cut anything players keep misunderstanding.</Blockquote>
    </div>
  );
}
