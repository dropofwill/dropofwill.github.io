---
title: Playing power chords on an Arduino
date: 2015-04-14 01:13 UTC
tags: Physical Computing, Arduino
summary: "Play power chords with an Arduino, capacitive touch pads, and a couple of speakers."

---

Source code available on [Github](https://github.com/dropofwill/multi_tone_arduino). It includes the necessary libraries to make it run: the Adafruit MPR121 breakout board code and the external Tone library hosted on Google Code (which has reached end of service).

> **Team**
>
> * [Joe Coppola](https://github.com/JosephCoppola): Electrical Engineer
>
> * [Peter Gyory](https://github.com/Petroochio): Seamstress / Faux-musician
>
> * [Will Paul](https://github.com/dropofwill): R&amp;D

## Supplies

* Adafruit Uno (other Arduinos will work)

* Adafruit Breakout MPR121

* Conductive/regular thread and needle

* Conductive fabric (just a little bit for the fingers)

* Pipe cleaners

* Wire and Alligator Clips

* Soldering tools & supplies


## "Schematic"

Relatively simple wiring job, we used the same soldering job from our last use of the capacitive touch breakout board, but if you haven't soldering it is a must as intermittent connectivity causes the Arduino to crash. If your speakers are louder just throw on a couple of resistors inline with the speakers.

![Rough Schematic](https://raw.githubusercontent.com/dropofwill/multi_tone_arduino/master/pics/schematic.jpg)

## What it looks and sounds like

A look at the wiring job. The third middle speaker was not used in the final product (the Uno only had two timers that we could use for playing simultaneous sounds).

![The breadboard](https://raw.githubusercontent.com/dropofwill/multi_tone_arduino/master/pics/breadboard.jpg)

The MPR121 Breakout board all soldered up.

![The breakout board for capacitive touch](https://raw.githubusercontent.com/dropofwill/multi_tone_arduino/master/pics/breakout_board.jpg)

A look at Peter's new found sewing skills.

![A touch pad](https://raw.githubusercontent.com/dropofwill/multi_tone_arduino/master/pics/touchpad.jpg)

![In action](https://raw.githubusercontent.com/dropofwill/multi_tone_arduino/master/pics/touchpads.jpg)

[And his musical prowess](https://vimeo.com/124891338)


## Process

Our original idea for the project was to create a mini drum kit, with a speaker inside of each pipecleaner capacitive pad. In the end putting the pads on top of the speakers muffled them too much so we moved them out on their own. Also, making a sound wave that resembles a drum kit turns out to be way harder than we thought. I tried down sampling drum beats and extracting pitch contours, but even when using two speakers the best beats sounded just like radio noise.

Since that wasn't getting anywhere we decided to pivot to something else that used multiple sounds at once. Supposedly the Arduino Uno has 3 timers, but whenever we tried to use the third one it would crash, so we were limited to two tones at a time. This left us with the dyads, the most obvious of which were power chords. We tried a few different progressions, but the one you see in the video is A5-D5-E5. The way it works is if you press just one pad it plays the root note of the chord, but when you tap a second pad it plays the fifth as well (to form the power chord).

