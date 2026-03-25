import React from 'react';
import { Breadcrumb, ExtLink, Figure, H1, H2, P } from '@/components/ui.jsx';

const CHING_URL = "https://books.google.com/books?id=eR1HAAAAQBAJ&printsec=frontcover";

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Circulation Elements</H1>
      <H2 id="approach">Approach</H2>
      <Figure src="/images/approach.png" />
      <H2 id="entrance">Entrance</H2>
      <Figure src="/images/entrance.png" />
      <Figure src="/images/entrance-2.png" />
      <H2 id="configuration-of-the-path">Configuration of the Path</H2>
      <Figure src="/images/configuration-of-the-path.png" />
      <H2 id="path-space-relationships">Path-space Relationships</H2>
      <Figure src="/images/path-space-relationships.png" />
      <H2 id="form-of-the-circulation-space">Form of the Circulation Space</H2>
      <Figure src="/images/form-of-the-circulation-space.png" />
      <P><ExtLink href={CHING_URL}>Architecture: Form, Space, and Order — Francis D. K. Ching</ExtLink></P>
    </div>
  );
}
