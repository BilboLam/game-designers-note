import React from 'react';
import { Blockquote, Breadcrumb, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Intuitive Design</H1>
      <P>Players should understand the game before they can explain it.</P>
      <H3 id="visual-intuitiveness">Visual intuitiveness</H3>
      <Blockquote>{`- Color\n- Size\n- Form`}</Blockquote>
      <Blockquote><Blockquote>A gun should look like it can shoot.</Blockquote></Blockquote>
      <Blockquote>- Placement</Blockquote>
      <H3 id="rule-intuitiveness">Rule intuitiveness</H3>
      <Blockquote>{`- Use real words.\n- Use fewer words.\n- Keep flavor text separate from rules.\n- Revise, simplify, or cut anything players keep misunderstanding.`}</Blockquote>
    </div>
  );
}
