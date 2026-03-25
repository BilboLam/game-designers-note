---
title: "Celeste &amp; Forgiveness | Game Designers&#x27; Note"
gitbook_url: https://coffwee.gitbook.io/game-designers-note/celeste-and-forgiveness
path: celeste-and-forgiveness
---

# Celeste & Forgiveness
This was originally a short Twitter thread about some Celeste game-feel tricks. I don’t think that we invented any of these techniques, but they are important parts of the moment-to-moment experience of Celeste.

1### [hashtag](#coyote-time)Coyote Time
You can still jump for a short time after leaving a ledge.

2### [hashtag](#jump-buffering)Jump Buffering
If you press and hold the jump button a short time before landing, you will jump on the exact frame that you land.

3### [hashtag](#halved-gravity-jump-peak)Halved-Gravity Jump Peak
This one is hard to see. If you hold the jump button, the top of your jump has half gravity applied. It’s subtle, but this gives you more time to adjust for landing, and also just looks/feels pleasant.

4### [hashtag](#jump-corner-correction)Jump Corner Correction
If you bonk your head on a corner, the game tries to wiggle you to the side around it.

5### [hashtag](#dash-corner-correction)Dash Corner Correction
Also tough to see, but if you dash sideways and clip a corner, it’ll pop you up onto the ledge.

6### [hashtag](#semi-solid-popping)Semi-Solid Popping
We also pop you up onto semi-solid platforms if you dash sideways through them.

7### [hashtag](#lift-momentum-storage)Lift Momentum Storage
Jumping off a fast-moving platform adds that platform’s momentum to your jump speed. Madeline “stores” this momentum and will still get a boosted jump for a few frames after the platform has stopped moving.

8### [hashtag](#wide-wall-jump-window)Wide Wall-Jump Window
You can actually wall jump 2 pixels from a wall. (That sounds tiny but this is a 320x180-resolution game so that’s a quarter of a tile)

9### [hashtag](#even-wider-super-wall-jump-window)Even Wider Super Wall-Jump Window
If you’re doing a “super wall jump” (ie: a wall jump while dashing upward), this is a more precise and demanding maneuver so we let you do it from even further away (I think it’s 5 pixels, which is more than half a tile!)

10### [hashtag](#stamina-refunds)Stamina Refunds
This final one is complicated but very important for Celeste. First, some setup: If you’re grabbing a wall and you jump straight upward, that consumes a **lot of stamina**. But if you jump away from the wall, that’s a normal wall jump that uses **no stamina** and pushes you away strongly. These are two very different actions with very similar inputs.

Here’s the trick: If you perform the straight upward jump but then press away from the wall shortly after, the game refunds the stamina spent by the upward jump and belatedly applies the horizontal wall jump force. Or to describe it plainly, there is a grace window where it will convert from one jump type to the other after the fact.

You might have noticed a pattern! All are centered around widening timing or positioning windows, so that everything is fudged a tiny bit in the player’s favor. I think that this is a big reason why Celeste can feel kind even though it’s very difficult — it wants you to succeed.

❤ Maddy

[PreviousToolschevron-left](/game-designers-note/appendix/tools)