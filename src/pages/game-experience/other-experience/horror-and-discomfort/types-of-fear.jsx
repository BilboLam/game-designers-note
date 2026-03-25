import React from 'react';
import { Blockquote, Breadcrumb, H1, H2 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Types of Fear</H1>
      <H2 id="sublime-and-grotesque">Sublime &amp; Grotesque</H2>
      <Blockquote>Beauty of Fear</Blockquote>
      <H2 id="jump-scare">Jump scare</H2>
      <H2 id="eerie">Eerie</H2>
      <Blockquote>sustained discomfort — e.g. Kaidan, Liaozhai, Cthulhu</Blockquote>
    </div>
  );
}
