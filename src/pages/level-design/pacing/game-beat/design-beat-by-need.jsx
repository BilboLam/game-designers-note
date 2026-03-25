import React from 'react';
import { Breadcrumb, H1, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Design Beat by Need</H1>
      <P>In It Takes Two,  Basic gameplay like "cooperative puzzle solving, play together vs boss, tacit understanding, parkour, free exploration, competing" are evenly distributed in the first level to attract players, and do a basic tutorial. But mid-game scenes are more open (amusement park, European town), focus on free exploration, consistent with the reconciliation phase of the two characters.</P>
    </div>
  );
}
