import React from 'react';
import { Blockquote, Breadcrumb, Callout, ExtLink, H1, H2, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Structure</H1>
      <P>A strong foundation lets later details take care of themselves.</P>
      <H2 id="stone-soup"><ExtLink href="https://www.gdcvault.com/play/1025655/Stone-Soup-Procedurally-Mixing-Student">Stone Soup</ExtLink></H2>
      <Blockquote>Build a <strong>flexible structure</strong> where individual components are designed in isolation. The interactions between components are not pre-coded, but can sometimes be surprisingly interesting.</Blockquote>
      <Callout type="info">
        <span>Encourage bugs, encouraging messiness.</span>
      </Callout>
      <H2 id="qframework"><ExtLink href="https://qf.readthedocs.io/en/latest/">Qframework</ExtLink></H2>
      <Blockquote>Qframework splits responsibilities into ViewController, System, Utility, etc., and each part handles its own logic. By separating code, the architecture stays more modular and easier to scale.</Blockquote>
    </div>
  );
}
