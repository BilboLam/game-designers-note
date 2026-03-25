import React from 'react';
import { Blockquote, Breadcrumb, H1, H3 } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Types of Fear</H1>
      <H3 id="sublime-and-grotesque">Sublime &amp; Grotesque</H3>
      <Blockquote>Beauty of Fear</Blockquote>
      <H3 id="jump-scare">Jump scare</H3>
      <H3 id="eerie">Eerie</H3>
      <Blockquote>sustained discomfort — e.g. Kaidan, Liaozhai, Cthulhu</Blockquote>
    </div>
  );
}
