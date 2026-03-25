import React from 'react';
import { Callout, ExtLink, H1, P } from '@/components/ui.jsx';
import styles from './home.module.css';

const HOME_CARDS = [
  {
    id: 'gameplay-design',
    title: 'Gameplay Design',
    image: 'https://2702655020-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FRBtL4bkZWbF1vqRmc4h2%2Fuploads%2FsRpvNX9MUAdU7SBeOYSB%2Fimages.jpg?alt=media&token=6435ab03-941b-445e-a5ed-9f0ef74a4333',
  },
  {
    id: 'game-experience',
    title: 'Game Experience',
    image: 'https://2702655020-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FRBtL4bkZWbF1vqRmc4h2%2Fuploads%2FgRkE4EWHMxJqxr3MWpWn%2FwqJK24mvKudxnx4pauC3uD.jpg?alt=media&token=80514656-4655-4527-837a-4c534ece8a68',
  },
  {
    id: 'game-development',
    title: 'Game Development',
    image: 'https://2702655020-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FRBtL4bkZWbF1vqRmc4h2%2Fuploads%2FnfcFQ3a7ln228akGSDUm%2F%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202025-02-03%20104140.png?alt=media&token=fbfdd86a-9a2a-459e-8857-72c83be43bca',
  },
  {
    id: 'level-design',
    title: 'Level Design',
    image: 'https://2702655020-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FRBtL4bkZWbF1vqRmc4h2%2Fuploads%2FSYo0kFdciv9X0LrLhJd3%2Fmaxresdefault.jpg?alt=media&token=cb13043d-9ac4-42ab-af4a-c19c0a7ae5b1',
  },
  {
    id: 'narrative-design',
    title: 'Narrative Design',
    image: 'https://2702655020-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FRBtL4bkZWbF1vqRmc4h2%2Fuploads%2FcxzpZVZFMOx2P7B5juhI%2Fviolent-video-games-post.jpg?alt=media&token=c1eb9878-f640-4373-84a3-2b92a05e411c',
  },
  {
    id: 'appendix',
    title: 'Appendix',
    image: 'https://2702655020-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FRBtL4bkZWbF1vqRmc4h2%2Fuploads%2FkfuRBBMxy9slAkL12q83%2FPacmanxAdvanced_flash_screenshot.png?alt=media&token=8ea3e84a-c62c-4e49-922e-47a84883335d',
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
