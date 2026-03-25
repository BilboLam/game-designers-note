import React from 'react';
import { Breadcrumb, H1, H3, P } from '@/components/ui.jsx';

export default function Page({ go }) {
  return (
    <div>
      <Breadcrumb auto go={go} />
      <H1>Celeste &amp; Forgiveness</H1>
      <P>This was originally a short Twitter thread about some Celeste game-feel tricks. I don’t think that we invented any of these techniques, but they are important parts of the moment-to-moment experience of Celeste.</P>
      <P>1</P>
      <H3 id="coyote-time">Coyote Time</H3>
      <P>You can still jump for a short time after leaving a ledge.</P>
      <P>2</P>
      <H3 id="jump-buffering">Jump Buffering</H3>
      <P>If you press and hold the jump button a short time before landing, you will jump on the exact frame that you land.</P>
      <P>3</P>
      <H3 id="halved-gravity-jump-peak">Halved-Gravity Jump Peak</H3>
      <P>This one is hard to see. If you hold the jump button, the top of your jump has half gravity applied. It’s subtle, but this gives you more time to adjust for landing, and also just looks/feels pleasant.</P>
      <P>4</P>
      <H3 id="jump-corner-correction">Jump Corner Correction</H3>
      <P>If you bonk your head on a corner, the game tries to wiggle you to the side around it.</P>
      <P>5</P>
      <H3 id="dash-corner-correction">Dash Corner Correction</H3>
      <P>Also tough to see, but if you dash sideways and clip a corner, it’ll pop you up onto the ledge.</P>
      <P>6</P>
      <H3 id="semi-solid-popping">Semi-Solid Popping</H3>
      <P>We also pop you up onto semi-solid platforms if you dash sideways through them.</P>
      <P>7</P>
      <H3 id="lift-momentum-storage">Lift Momentum Storage</H3>
      <P>Jumping off a fast-moving platform adds that platform’s momentum to your jump speed. Madeline “stores” this momentum and will still get a boosted jump for a few frames after the platform has stopped moving.</P>
      <P>8</P>
      <H3 id="wide-wall-jump-window">Wide Wall-Jump Window</H3>
      <P>You can actually wall jump 2 pixels from a wall. (That sounds tiny but this is a 320x180-resolution game so that’s a quarter of a tile)</P>
      <P>9</P>
      <H3 id="even-wider-super-wall-jump-window">Even Wider Super Wall-Jump Window</H3>
      <P>If you’re doing a “super wall jump” (ie: a wall jump while dashing upward), this is a more precise and demanding maneuver so we let you do it from even further away (I think it’s 5 pixels, which is more than half a tile!)</P>
      <P>10</P>
      <H3 id="stamina-refunds">Stamina Refunds</H3>
      <P>This final one is complicated but very important for Celeste. First, some setup: If you’re grabbing a wall and you jump straight upward, that consumes a <strong>lot of stamina</strong>. But if you jump away from the wall, that’s a normal wall jump that uses <strong>no stamina</strong> and pushes you away strongly. These are two very different actions with very similar inputs.</P>
      <P>Here’s the trick: If you perform the straight upward jump but then press away from the wall shortly after, the game refunds the stamina spent by the upward jump and belatedly applies the horizontal wall jump force. Or to describe it plainly, there is a grace window where it will convert from one jump type to the other after the fact.</P>
      <P>You might have noticed a pattern! All are centered around widening timing or positioning windows, so that everything is fudged a tiny bit in the player’s favor. I think that this is a big reason why Celeste can feel kind even though it’s very difficult — it wants you to succeed.</P>
      <P>❤ Maddy</P>
    </div>
  );
}
