import React from 'react';
import { Breadcrumb, ExtLink, H1, H2, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Circulation Elements</H1>
      <H2 id="approach">Approach</H2>
      <P><ExtLink href="https://books.google.com/books?id=eR1HAAAAQBAJ&printsec=frontcover">Architecture: Form, Space, and Order - Francis D. K. Ching</ExtLink></P>
      <H2 id="entrance">Entrance</H2>
      <P><ExtLink href="https://books.google.com/books?id=eR1HAAAAQBAJ&printsec=frontcover">Architecture: Form, Space, and Order - Francis D. K. Ching</ExtLink><ExtLink href="https://books.google.com/books?id=eR1HAAAAQBAJ&printsec=frontcover">Architecture: Form, Space, and Order - Francis D. K. Ching</ExtLink></P>
      <H2 id="configuration-of-the-path">Configuration of the Path</H2>
      <P><ExtLink href="https://books.google.com/books?id=eR1HAAAAQBAJ&printsec=frontcover">Architecture: Form, Space, and Order - Francis D. K. Ching</ExtLink></P>
      <H2 id="path-space-relationships">Path-space Relationships</H2>
      <P><ExtLink href="https://books.google.com/books?id=eR1HAAAAQBAJ&printsec=frontcover">Architecture: Form, Space, and Order - Francis D. K. Ching</ExtLink></P>
      <H2 id="form-of-the-circulation-space">Form of the Circulation Space</H2>
      <P><ExtLink href="https://books.google.com/books?id=eR1HAAAAQBAJ&printsec=frontcover">Architecture: Form, Space, and Order - Francis D. K. Ching</ExtLink></P>
    </div>
  );
}
