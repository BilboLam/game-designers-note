import React from 'react';
import { Breadcrumb, ExtLink, H1, P } from '@/components/ui.jsx';

const ELEMENTS = [
  { name: 'Avatar',           def: 'the game entity the players control inside the game. For instance, Mario and Luigi in Super Mario Bros (Nintendo, 1985).' },
  { name: 'Boss',             def: 'an enemy that poses a bigger threat than most. An example is Iceman from Megaman (Capcom, 1987).' },
  { name: 'Collectible',      def: 'a game object that can be collected by the players. An example is the coins in Super Mario Bros (Nintendo, 1985).' },
  { name: 'Enemy',            def: 'a hazard that takes the persona of a character. Goombas from Super Mario Bros (Nintendo, 1985) are one example of enemies.' },
  { name: 'Environment Tile', def: 'entities used to decorate the game, usually not interactable. Clouds in Super Mario Bros (Nintendo, 1985).' },
  { name: 'Hazard',           def: 'entities that hinder the player from completing their goal. An example is the spikes in 1001 Spikes (Nicalis and 8bits Fanatics, 2014).' },
  { name: 'Inaccessible Area',def: 'an area that players cannot reach, but that might become accessible at some point in the game. For instance, dungeon rooms in The Legend of Zelda (Nintendo, 1986) that require a key to enter.' },
  { name: 'Level',            def: 'section of the game, where players act towards winning the game. An example is World 1-1 from Super Mario Bros (Nintendo, 1985).' },
  { name: 'Mechanic',         def: 'an element in the game, visible or not, that enforces a rule. An example is the checkpoints in Sonic the Hedgehog (Sega, 1991).' },
  { name: 'Object',           def: 'any entity that appears in a game scene and can change state. It includes hazards, enemies, power-ups and etc.' },
  { name: 'Power-up',         def: 'a collectible that positively impacts the players. The mushroom in Super Mario Bros (Nintendo, 1985) is an example of power-up.' },
  { name: 'Projectiles',      def: 'moving entities projected from a hazard or avatar. Hammers thrown in Super Mario Bros (Nintendo, 1985) are an example.' },
  { name: 'Rule',             def: 'describes how the game is played and controlled. An example is a rule to collect all pellets to win in Pac-Man (Namco, 1980).' },
  { name: 'Scene',            def: 'a slice of a level/world that revolves around a concept, usually a challenge.' },
  { name: 'Screen',           def: 'the part of the game level/world that is currently visible to the players.' },
  { name: 'Solid Tile',       def: 'a game object that prevents the players from passing through it. An example is the floor in Super Mario Bros (Nintendo, 1985).' },
  { name: 'World',            def: 'a large game area that is built from multiple levels. For example, Brinstar in Super Metroid (Nintendo, 1994).' },
];

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Level Elements</H1>
      <P>Below are common elements that are present in levels across multiple games; consider using them when you get lost.</P>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, color: 'var(--text)' }}>
        <thead>
          <tr style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
            <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 600, width: 140, color: 'var(--muted)' }}>Name</th>
            <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--muted)' }}>Definition</th>
          </tr>
        </thead>
        <tbody>
          {ELEMENTS.map(({ name, def }) => (
            <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '10px 16px', verticalAlign: 'top', color: 'var(--text)', whiteSpace: 'nowrap' }}>{name}</td>
              <td style={{ padding: '10px 16px', verticalAlign: 'top', color: 'var(--muted)', lineHeight: 1.65 }}>{def}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <P style={{ marginTop: 20 }}><ExtLink href="https://www.gamedeveloper.com/design/level-design-patterns-in-2d-games">Level Design Patterns in 2D Games.pdf</ExtLink> — Ahmed Khalifa, Fernando de Mesentier Silva, and Julian Togelius</P>
    </div>
  );
}
