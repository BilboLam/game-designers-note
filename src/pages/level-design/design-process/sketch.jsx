import React from 'react';
import { Breadcrumb, ExtLink, H1, H2, InternalLink, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Sketch</H1>
      <P>Before you start building the level, try to draw a level diagram. This applies not only to complex 3D levels but also to 2D levels. When you feel you have a clear idea of the level, you can stop drawing the level diagram at any time and start making it.</P>
      <P>Sketching for levels follows the steps below, similar to drawing.</P>
      <P>Parti -&gt; Bubble diagrams -&gt; Floor plan</P>
      <H2 id="id-1.-parti-thumbnails">1. <ExtLink href="https://book.leveldesignbook.com/process/layout#id-2.-parti-thumbnails">Parti thumbnails</ExtLink></H2>
      <P>"<strong>Parti</strong>" in architecture means the core concept of a project. In level design, it refers to the overall structure of a level.</P>
      <P>parti diagrams from "101 Things I Learned in Architecture School" by Matthew Frederic<strong>Don't spend too long on each one.</strong></P>
      <H2 id="id-2.-bubble-diagrams">2. <ExtLink href="https://book.leveldesignbook.com/process/layout#id-3.-bubble-diagrams">Bubble Diagrams</ExtLink></H2>
      <P>The goal of the <strong>bubble diagram</strong> is to establish proportions and relationships in your level.</P>
      <P>example bubble diagram of F10 House in Chicago, from The Architecture Handbook: A Student Guide to Understanding Buildings by Masengarb et al.</P>
      <H2 id="id-3.-floor-plan">3. <ExtLink href="https://book.leveldesignbook.com/process/layout#id-4.-floor-plan">Floor Plan</ExtLink></H2>
      <P>various floor plan drawing techniques from "Architectural Graphics" (6th ed.) by Francis D. K. ChingA <strong>floor plan</strong> is an imaginary horizontal slice through your level. Normally, we use bold lines for the level structure and represent <InternalLink id="level-elements" go={go}>fillers</InternalLink> with thinner lines. <ExtLink href="https://floorplanner.com/">Floorplanner</ExtLink> is a great tool when levels go complicated.</P>
      <P>After drawing the floor plan, try using background colors to represent different areas.</P>
      <P>open world mission diagram with safe observation area in green and high security objective area in red, for Assassin's Creed, by Phillippe Bergeron for GDC 2016: "Level Design Workshop: 360 Approach for Open World Mission Design"</P>
      <H2 id="id-4.-fillers">4. <InternalLink id="level-elements" go={go}>Fillers</InternalLink></H2>
      <P>In this note, "<strong>fillers</strong>" refers to the game elements. Once the floor plan is finished, you can add fillers to create a clearer image of the entire level. However, don't over-design in this phase, as detailed designs often change during build and testing, and too much content will make the level diagram clutter.</P>
    </div>
  );
}
