---
title: "Mouse Rat: Technical explanation"
date: 2015-03-28 18:37 UTC
tags: Physical Computing, Wearables, Arduino, Mouse Rat
summary: "Technical explanation for a wearable gesture based mouse glove. It used the Arduino Flora, the wearable LSM9DSO accelerometer, and MPR121 capacitive touch breakout, all from Adafruit."

---

Source code available on Github: [dropofwill/mouse_rat](http://github.com/dropofwill/mouse_rat)

> **Team**
>
> * [Joe Coppola](https://github.com/JosephCoppola): Production Manager
>
> * [Peter Gyory](https://github.com/Petroochio): Electrical Engineer
>
> * [Will Paul](https://github.com/dropofwill): Lead Programmer


## Supplies

* Adafruit Flora (Gemma should also work)

* Adafruit Wearable LSM9DSO

* Adafruit Breakout MPR121 (no wearable version available)

* Conductive/regular thread and needle

* Conductive fabric (just a little bit for the fingers)

* Flexible wire

* Soldering tools & supplies


## "Schematic"

Here is a rough schematic of how to wire up all the sensors. The key point to note here is that we actually are just using SDA/SCL and chaining the capacitive and touch sensor together. This works fine because that's how the Flora wearables were designed, with one caveat you have to make sure the two sensors have different ids internally.

![Rough Schematic](https://raw.githubusercontent.com/dropofwill/mouse_rat/master/mouse_rat-schematic.jpg)


## What it looks like

![Top Down](https://raw.githubusercontent.com/dropofwill/mouse_rat/master/mouse_rat-top-down.jpg)

![Bottom Down](https://raw.githubusercontent.com/dropofwill/mouse_rat/master/mouse_rat-bottom-down.jpg)

![Close Up](https://raw.githubusercontent.com/dropofwill/mouse_rat/master/mouse_rat-close-up.jpg)


## Code

My main role on the project was programming (and the occasional soldering venture when Peter got lightheaded from being bad at soldering), so I'll talk a little bit about the code. Interacting with the mouse on the screen was pretty simple because Arduino provides a library for moving, clicking, and scrolling the mouse.

The capacitive touch was simple to setup, except for the aforementioned I2C id issue. As the project came to a close we ended up tweaking some internal values in the library to make the touch a little less sensitive. We actually experienced a lot of crashes before we soldered the connections, even though are connections were tightly wound. Afterwards that problem completely went away (yay!).

Most of my time then was spent converting accelerometer data into mouse movements. The first problem to consider is that people hold their hand in different positions and elevations, which change the values we get. To handle this we added a calibration loop on startup to get a range of min/max values that should be treated as stationary. We then took the mean value of this range and subtracted it from any accelerometer inputs to make sure input wasn't weighted in a particular direction. We also clamped inputs to between 20 and -20 m/s^2 to keep violent motions from going too crazy. We polled the accelerometer about 120 times a second for these values and mapped them to between -30 and 30 pixels relative to the current position of the mouse.


## Wrap up

In the end the glove mouse wasn't as effective as we had hoped. Accelerometer input is even more fuzzy then optical and it became clear to us why you don't see that many acceleration based mice on the market. The glove we used had conductive finger tips, which contrary to what we thought, actually hinders the capacitive touch sensors (it raises the baseline current so that it takes a lot of pressure to register a touch), so we had to move the clicking mechanism to below the finger tips. The glove itself is sort of fragile (lots of components sewed on to stretch material) and an aspect of using a glove that we didn't consider was that it gets fairly warm inside after a bit of use.

If we did it again some changes we would make from the construction side of things would be to use a lighter weight glove (maybe even just mesh) as we only really need three fingers and a place to put the sensor components we could probably even cut the idea of using a glove down to just caps on the finger tips connected with flexible wire to deal with the heat and discomfort.

From a programming stand point this could definitely benefit from a more advanced calibration process, right now our sensor has 9 degrees of freedom and we are really only calibrating using 3. Movement is still kind of awkward (reminiscent of the Lenovo ThinkPads joystick in the middle of the keyboard), we could probably improve this through using a more advanced acceleration to pixels conversion system.

All that aside we ended up with a somewhat usable mouse that is actually a lot of fun to mess around with. So not ready for production at all, but a fun project and we all learned a lot.
