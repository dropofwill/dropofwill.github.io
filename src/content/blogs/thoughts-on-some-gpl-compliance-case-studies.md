---
title: "Thoughts on some GPL Compliance Case Studies: Bortez GCC Modifications"
date: 2015-02-19 02:24 UTC
tags: BizLeg, Licenses
summary: "One of my main problems with our first reading out of the Comprehensive GPL Guide was that the first section never motivated itself with some examples. Luckily in the last section (starting at page 92) they go over some real world examples of enforcing the terms of the GPL and how to go about it (from the FSF's perspective). For this post I want to look at Chapter 22, which talks about the FSF's approach with the software company Bortez."

---

# Thoughts on some GPL Compliance Case Studies: Bortez GCC Modifications


One of [my main problems](2015/02/06/initial-review-of-copyleft-and-the-gnu-general-public-license.html.markdown) with our first reading out of [the Comprehensive GPL Guide](http://bizlegfoss-ritigm.rhcloud.com/static/books/comprehensive-gpl-guide.pdf) was that the first section never motivated itself with some examples. Luckily in the last section (starting at page 92) they go over some real world examples of enforcing the terms of the GPL and how to go about it (from the FSF's perspective). For this post I want to look at Chapter 22, which talks about the FSF's approach with the software company Bortez.

## The setup

Bortez apparently was a software company (I can't find any trace of them on the internet besides the chapter in this book, so this must be quite an old example) who's main product was some sort of SDK, which basically wraps the GCC with added support for a bunch of consumer devices and made so that it could be run on windows.

The FSF upon hearing the first report of the violation did their best to verify, but as this was proprietary software they hit a wall and decided to wait it out for more evidence to role in from actual users.

Eventually a few users came forward with the results of a few tests that conclusively proved that the GCC was in fact running under the hood. When the FSF brought this to Bortez the lawyers got involved, after a long, drawn out discussion Bortez admitted to having based their product on the GCC and agreed to release most of the source to their customers. However, they disagreed with the FSF that their custom linking process that allowed the GCC to work on other consumer devices was a derivative of the GCC and refused to release it.

After further badgering from the FSF, Bortez agreed to perform an internal audit of the linking process software and discovered that included a few source files from the GCC. Defeated they released the whole product's source, but only after adding a clause restricting the patent grant as much as possible with GPL'd code.

## What did we learn?

The FSF trumpets this as a success story, even though the software and company in question no longer seem to exist. In the end we got the result (I imagine at least) we all would want users with source that they are allowed to modify. But at what cost? A lengthy legal battle and in the end a permanent 'Compliance Officer' inside the Bortez corporation. I realize I may be far to idealistic, but whenever a 'free' software project requires a Compliance Officer to maintain its status I think we have a problem. I am also troubled by the FSF's idea of what a derivative is (which mean something more like a dependency than a modification or fork), though that will come up more detail in a later case study.

That said, I was impressed by the preciseness the FSF used while exercising this compliance effort: they waited until they had all the facts, gave clear guidelines on how to proceed, and maintained a focus on the community at hand and not just the idea of free as in freedom.
