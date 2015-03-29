---
title: "Mouse Rat: Technical explanation"
date: 2015-03-28 18:37 UTC
tags: Physical Computing, Wearables, Arduino, Mouse Rat
summary: "Technical explanation for a wearable gesture based mouse glove. It used the Arduino Flora, the wearable LSM9DSO accelerometer, and MPR121 capacitive touch breakout, all from Adafruit."

---

# Mouse Rat: Technical explanation

Source code available on Github: [dropofwill/mouse_rat](http://github.com/dropofwill/mouse_rat)

> **Team**
>
> * [Joe Coppola](https://github.com/JosephCoppola)
>
> * [Peter Gyory](https://github.com/Petroochio)
>
> * [Will Paul](https://github.com/dropofwill)


## Supplies

* Adafruit Flora (Gemma should also work)

* Adafruit Wearable LSM9DSO

* Adafruit Breakout MPR121 (no wearable version available)

* Conductive/regular thread and needle

* Conductive fabric (just a little bit for the fingers)

* Flexible wire

* Soldering tools & supplies

## "Schematic"

Here is a rough schematic of how to wire up all the sensors

![Rough Schematic](https://raw.githubusercontent.com/dropofwill/mouse_rat/master/mouse_rat-schematic.jpg)

## Wrap Up

In the end the glove mouse wasn't as effective as we had hoped. Accelerometer input is even more fuzzy then optical and it became clear to us why you don't see that many acceleration based mice on the market. The glove we used had conductive finger tips, which contrary to what we thought, actually hinders the capacitive touch sensors (it raises the baseline current so that it takes a lot of pressure to register a touch), so we had to move the clicking mechanism to the pinky and ring fingers (which did not have conductive tips). The glove itself is sort of fragile and an aspect of using a glove that we didn't consider was that it gets fairly warm inside.

If we did it again some changes we would make from the construction side of things would be to use a lighter weight glove (maybe even just mesh) as we only really need three fingers and a place to put the sensor components we could probably even cut the idea of using a glove down to just part of the hand to deal with the heat and discomfort.

From a programming stand point this could definitely benefit from a more advanced calibration process, right now our sensor has 9 degrees of freedom and we are really only calibrating using 3. Movement is still really awkward (reminiscent of the Lenovo ThinkPads joystick in the middle of the keyboard), we could probably improve this through using a more advanced acceleration to pixels conversion system.
