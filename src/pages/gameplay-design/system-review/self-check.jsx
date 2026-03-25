import React from 'react';
import { Blockquote, Breadcrumb, CheckItem, CheckList, H1 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Self-check</H1>
      <CheckList>
        <CheckItem>Flowchart your design</CheckItem>
      </CheckList>
      <Blockquote>- If there is a whole side branch sprawling out to explain/control/balance one little part, rethinkComplex side branch to explain/control/balance one small part? Rethink.</Blockquote>
      <Blockquote>- If a mechanism is used only once, rethink (useful for board games, not that useful for video games)</Blockquote>
      <CheckList>
        <CheckItem>Are there systems that players easily ignore</CheckItem>
        <CheckItem>Is the system intuitive</CheckItem>
      </CheckList>
    </div>
  );
}
