import React from 'react';
import { Breadcrumb, ExtLink, H1, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb crumbs={[{ label: 'Level Design', id: 'level-design' }, { label: 'Layout', id: 'layout' }, { label: 'Level Components' }]} go={go} />
      <H1>Level Elements</H1>
      <P>Below are common elements that are present in levels across multiple games; consider using them when you get lost.</P>
      <P>NameDefinitionAvatar</P>
      <P>the game entity the players control inside the game. For instance, Mario and Luigi in Super Mario Bros (Nintendo, 1985).</P>
      <P>Boss</P>
      <P>an enemy that poses a bigger threat than most. An example is Iceman from Megaman (Capcom, 1987).</P>
      <P>Collectible</P>
      <P>a game object that can be collected by the players. An example is the coins in Super Mario Bros (Nintendo, 1985).</P>
      <P>Enemy</P>
      <P>a hazard that takes the persona of a character. Goombas from Super Mario Bros (Nintendo, 1985) are one example of enemies.</P>
      <P>Environment Tile</P>
      <P>entities used to decorate the game, usually not interactable. Clouds in Super Mario Bros (Nintendo, 1985).</P>
      <P>Hazard</P>
      <P>entities that hinder the player from completing their goal. An example is the spikes in 1001 Spikes (Nicalis and 8bits Fanatics, 2014).</P>
      <P>Inaccessible Area</P>
      <P>an area that players cannot reach, but that might become accessible at some point in the game. For instance, dungeon rooms in The Legend of Zelda (Nintendo, 1986) that require a key to enter.</P>
      <P>Level</P>
      <P>section of the game, where players act towards winning the game. An example is World 1-1 from Super Mario Bros (Nintendo, 1985).</P>
      <P>Mechanic</P>
      <P>an element in the game, visible or not, that enforces a rule. An example is the checkpoints in Sonic the Hedgehog (Sega, 1991).</P>
      <P>Object</P>
      <P>any entity that appears in a game scene and can change state. It includes hazards, enemies, power-ups and etc.</P>
      <P>Power-up</P>
      <P>a collectible that positively impacts the players. The mushroom in Super Mario Bros (Nintendo, 1985) is an example of power-up.</P>
      <P>Projectiles</P>
      <P>moving entities projected from a hazard or avatar. Hammers thrown in Super Mario Bros (Nintendo, 1985) are an example.</P>
      <P>Rule</P>
      <P>describes how the game is played and controlled. An example is a rule to collect all pellets to win in Pac-Man (Namco, 1980).</P>
      <P>Scene</P>
      <P>a slice of a level/world that revolves around a concept, usually a challenge.</P>
      <P>Screen</P>
      <P>the part of the game level/world that is currently visible to the players.</P>
      <P>Solid Tile</P>
      <P>a game object that prevents the players from passing through it. An example is the floor in Super Mario Bros (Nintendo, 1985).</P>
      <P>World</P>
      <P>a large game area that is built from multiple levels. For example, Brinstar in Super Metroid (Nintendo, 1994).</P>
      <P>file-pdf4MB<ExtLink href="https://2702655020-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FRBtL4bkZWbF1vqRmc4h2%2Fuploads%2FLdhC7lechJ7qk8kgPrRE%2FLevel%20Design%20Patterns%20in%202D%20Games.pdf?alt=media&token=62ebc3f1-b837-4524-99ba-775a3b52d383">Level Design Patterns in 2D Games.pdf</ExtLink>PDFdownloadDownload<ExtLink href="https://2702655020-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FRBtL4bkZWbF1vqRmc4h2%2Fuploads%2FLdhC7lechJ7qk8kgPrRE%2FLevel%20Design%20Patterns%20in%202D%20Games.pdf?alt=media&token=62ebc3f1-b837-4524-99ba-775a3b52d383">arrow-up-right-from-squareOpen</ExtLink>Level Design Patterns in 2D Games, by Ahmed Khalifa, Fernando de Mesentier Silva, and Julian Togelius</P>
    </div>
  );
}
