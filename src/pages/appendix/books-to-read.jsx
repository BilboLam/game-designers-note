import React from 'react';
import { Breadcrumb, ExtLink, H1, H2, LI, UL } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Books to Read</H1>
      <H2 id="level-design">Level Design</H2>
      <UL>
        <LI><ExtLink href="https://www.slideshare.net/slideshow/level-design-workshop-gdc-china-2012/15306714">Level Design Workshop 2012 GDC China</ExtLink></LI>
        <LI><ExtLink href="https://books.google.com/books?id=eR1HAAAAQBAJ&printsec=frontcover">Architecture: Form, Space, and Order — Francis D. K. Ching</ExtLink></LI>
        <LI><ExtLink href="https://www.gamedeveloper.com/design/level-design-patterns-in-2d-games">Level Design Patterns in 2D Games — Ahmed Khalifa et al.</ExtLink></LI>
        <LI><ExtLink href="https://www.sirlin.net/articles/the-secrets-of-donkey-kong-country-2">The Secrets of Donkey Kong Country 2 — Sirlin</ExtLink></LI>
      </UL>
    </div>
  );
}
