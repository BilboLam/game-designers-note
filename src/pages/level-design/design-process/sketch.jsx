import React from 'react';
import { Breadcrumb, ExtLink, Figure, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Sketch</H1>
      <P>Before you start building the level, try to draw a level diagram. This applies not only to complex 3D levels but also to 2D levels. When you feel you have a clear idea of the level, you can stop drawing the level diagram at any time and start making it.</P>
      <P>Sketching for levels follows the steps below, similar to drawing.</P>
      <img src="/images/parti-to-bubble-diagram-to-floor-plan.jpg"/>
      <H2 id="id-1.-parti-thumbnails">1. <ExtLink href="https://book.leveldesignbook.com/process/layout#id-2.-parti-thumbnails">Parti thumbnails</ExtLink></H2>
      <P>"<strong>Parti</strong>" in architecture means the core concept of a project. In level design, it refers to the overall structure of a level.</P>
      <Figure src="/images/parti-diagrams.png" caption='Parti diagrams from "101 Things I Learned in Architecture School" by Matthew Frederic' />
      <P><strong>Don't spend too long on each one.</strong></P>
      <H2 id="id-2.-bubble-diagrams">2. <ExtLink href="https://book.leveldesignbook.com/process/layout#id-3.-bubble-diagrams">Bubble Diagrams</ExtLink></H2>
      <P>The goal of the <strong>bubble diagram</strong> is to establish proportions and relationships in your level.</P>
      <Figure src="/images/bubble-diagram-f10-house.png" caption="Example bubble diagram of F10 House in Chicago, from The Architecture Handbook by Masengarb et al." />
      <H2 id="id-3.-floor-plan">3. <ExtLink href="https://book.leveldesignbook.com/process/layout#id-4.-floor-plan">Floor Plan</ExtLink></H2>
      <P>A <strong>floor plan</strong> is an imaginary horizontal slice through your level. Normally, we use bold lines for the level structure and represent <InternalLink id="level-elements" go={go}>fillers</InternalLink> with thinner lines. <ExtLink href="https://floorplanner.com/">Floorplanner</ExtLink> is a great tool when levels go complicated.</P>
      <Figure src="/images/floor-plan-techniques.png" caption='Various floor plan drawing techniques from "Architectural Graphics" (6th ed.) by Francis D. K. Ching' />
      <P>After drawing the floor plan, try using background colors to represent different areas.</P>
      <Figure src="/images/assassins-creed-open-world-mission-diagram.jpg" caption="Open world mission diagram for Assassin's Creed, by Phillippe Bergeron (GDC 2016)" />
      <H2 id="id-4.-fillers">4. <InternalLink id="level-elements" go={go}>Fillers</InternalLink></H2>
      <P>In this note, "<strong>fillers</strong>" refers to the game elements. Once the floor plan is finished, you can add fillers to create a clearer image of the entire level. However, don't over-design in this phase, as detailed designs often change during build and testing, and too much content will make the level diagram clutter.</P>
      <Figure src="/images/final-layout-diagram.png" caption="Example of a final layout diagram" />
      <P><ExtLink href="https://steamcommunity.com/sharedfiles/filedetails/?id=258249342">Example diagram<link rel="stylesheet" href="" /></ExtLink></P>
    </div>
  );
}
