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
      <H1>Game Design Brew Log</H1>
      <P>
        <strong>Game Design Brew Log</strong> is a personal knowledge base for game design. Inspired by{' '}
        <ExtLink href="https://book.leveldesignbook.com/"><em>The Level Design Book</em></ExtLink>, this is an ongoing attempt to 
        turn scattered notes and half-finished thoughts into something structured and useful. 
        These are personal views and starting points for thinking, not definitive answers.
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
