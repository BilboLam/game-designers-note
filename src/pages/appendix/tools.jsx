import React from 'react';
import { Breadcrumb, ExtLink, H1, H2, H3, P } from '@/components/ui.jsx';
import { Icon } from '@/components/Icon.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Appendix' }]} go={go} />
      <H1><Icon name="screwdriver-wrench" className="page-icon" />Tools</H1>
      <H2 id="level-design-tools">Level Design Tools</H2>
      <H3 id="planning-tools">Planning Tools</H3>
      <P><ExtLink href="https://floorplanner.com/">Floorplanner</ExtLink>: An online tool for drawing floor plans.</P>
      <H2 id="teamwork-tools">Teamwork Tools</H2>
      <H3 id="moodboard-tools">Moodboard Tools</H3>
      <P><ExtLink href="https://www.pinterest.com/">Pinterest</ExtLink>: A vast collection of art pics.</P>
      <P><ExtLink href="https://milanote.com/">Milamote</ExtLink>: Good for brainstorming and organizing ideas.</P>
      <P><ExtLink href="https://figma.com">Figma</ExtLink>: An easy approach to creating a mood "board"<strong>.</strong></P>
      <H2 id="narrative-tools">Narrative Tools</H2>
      <P><ExtLink href="https://www.articy.com/en/">Articy Draft</ExtLink>: A tool for managing branching narratives.</P>
    </div>
  );
}
