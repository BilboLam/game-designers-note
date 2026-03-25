import React from 'react';
import { Callout, ExtLink, H1, P } from '@/components/ui.jsx';
import styles from './home.module.css';

const HOME_CARDS = [
  {
    id: 'gameplay-design',
    title: 'Gameplay Design',
    image: '/images/Gameplay%20Design.jpg',
  },
  {
    id: 'game-experience',
    title: 'Game Experience',
    image: '/images/Game%20Experience.jpg',
  },
  {
    id: 'game-development',
    title: 'Game Development',
    image: '/images/Game%20Dev.jpg',
  },
  {
    id: 'level-design',
    title: 'Level Design',
    image: '/images/Level%20Design.jpg',
  },
  {
    id: 'narrative-design',
    title: 'Narrative Design',
    image: '/images/Narrative%20Design.jpeg',
  },
  {
    id: 'appendix',
    title: 'Appendix',
    image: '/images/Appendix.jpg',
  },
];

export default function Page({ go }) {
  return (
    <div>
      <H1>Game Designers' Note</H1>
      <P>
        <strong>Game Designers&apos; Note</strong> is a personal knowledge base for game design, inspired by{' '}
        <ExtLink href="https://book.leveldesignbook.com/"><em>The Level Design Book</em></ExtLink>, and aims to compile my
        scribbled game design notes into a structured collection. These are simply my personal views, shared as a
        starting point for thinking, not as definitive answers.
      </P>
      <Callout type="info">
        <P style={{ marginBottom: 0, color: 'var(--muted)' }}>
          Many notes were taken from videos and other sources over time, and some references may have been lost along
          the way. If you recognize any uncredited content, feel free to reach out at{' '}
          <em>bilbo_bagginss_@outlook.com</em>.
        </P>
      </Callout>
      <div className={styles.grid}>
        {HOME_CARDS.map((card) => (
          <button key={card.id} type="button" className={styles.card} onClick={() => go(card.id)}>
            <img src={card.image} alt={card.title} className={styles.cardImage} loading="lazy" />
            <span className={styles.cardTitle}>{card.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
