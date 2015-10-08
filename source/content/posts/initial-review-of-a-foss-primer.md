---
title: "Initial Review of a FOSS Primer"
date: 2015-02-04 01:25 UTC
tags: Legal, Review, Legal, Licenses

---

This section of the book is focused on copyrights and licensing issues facing FOSS projects. It starts at a high level explaining why a license is necessary and then works its way down to the details of choosing the correct license, dealing with copyright in teams and organizations, and finally how to deal with copyright violations from a FOSS perspective.

> **Who:**
>
> * [Richard Fontana](http://en.wikipedia.org/wiki/Richard_Fontana) (lawyer, worked on GPLv3, LGPLv3, AGPL, director of OSI),
>
> * [Bradley M. Kuhn](http://en.wikipedia.org/wiki/Bradley_M._Kuhn) (free software activist, president of Software Freedom Conservancy, previously worked for the SFLC and FSF),
>
> * [Eben Moglen](http://en.wikipedia.org/wiki/Eben_Moglen) (law and legal history professor at Columbia University and director-counsel and chairman of the SFLC),
>
> * [Matthew Norwood](https://www.linkedin.com/pub/matt-norwood/5/770/a39) (IP lawyer, previously was counsel at the SFLC),
>
> * [Daniel B. Ravicher](http://www.ravicher.com/) (lawyer and law professor),
>
> * [Karen Sandler](http://en.wikipedia.org/wiki/Karen_Sandler) (executive director of the SFC, former director of the GNOME Foundation, former general counsel at the SFLC),
>
> * [James Vasile](https://twitter.com/jamesvasile) (director of Open Internet Tools Project),
>
> * [Aaron Williamson](https://torekeland.com/about/aaron-williamson) (IP lawyer for Tor Ekeland).
>
> **What:** Foreward - Chapter 2 of the book *A Legal Issues Primer for Open Source and Free Software Projects* put out by the [Software Freedom Law Center (SFLC).](https://www.softwarefreedom.org/)
>
> **Where:** [available for free on RIT's Business and Legal issues in FOSS course website](http://bizlegfoss-ritigm.rhcloud.com/static/books/foss-primer.pdf)
>
> **When:** Latest edition (1.5.2) published June 2008



## The Good

* This cleared up some of my confusions with the GPL, especially around the server/client relationship? Say my backend runs on GPL'd code, does that mean it has to serve a static copy of the code on the site somewhere? It turns out if you do not distribute the software, you do not have to distribute the source code.

* The description of copyright enforcement was interesting. Something I've always wondered is how one enforce GPL restrictions, especially when the violation occurs in proprietary code (how does one know for sure the binaries contain your code? See Berkeley v. FSF).

* Deciding how to transfer copyright of code in a project with multiple people seems almost important than the choice of license (what good is your license if it you didn't have the rights to it to begin with?). It's important to remember that your employer may own everything you create, even on your own time and on your own computer.



## The Bad

* The sections on the general GPL and BSD/permissive licenses were too short, I guess since this is just a primer they didn't want to go line by line or anything like that. However, as someone already aware of the basics of copyleft/permissive, I was hoping for a little more in the way of details and use cases, which seemed to me what was given when talking about the specific licenses of LGPL and AGPL.

* It seemed pretty dismissive of Permissive licenses. Yes, it does make sense to group them together, but are patent, trademark, attribution, changelog rules really equivalent to saying they "differ in only minor ways"? I realize copyleft people only think about preserving freedom, but there are a ton of other issues involved with license choice.

* It could use more motivating examples, most legal systems are fundamentally built on past rulings, so understanding past issues related to licensing differences could shape a developer's opinion on what is important for their particular project.



## Questions

* Copyright expires after X-years. Doesn't that mean that copyleft licenses also expire after that amount of years as well? Why then is it called a "*forever* free" license?

* A footnote in the section on the AGPL mentions that client side code (via JavaScript, CSS, and HTML) is distribution of software "in the strictest sense". As the creation of frontend code becomes more and more complex the result sent to the end user begins to look more and more like binaries, complete with a build or compilation step (via preprocessors, templating systems, dependency managers, minfiers, and the like). What this means is the code sent to the browser is much less usable than the source the developer used to make, while not as difficult as reverse engineering a binary, figuring out a complex program with 2 letter variables and function inlining is no easy task. So I guess my question is what counts as "source code" when it comes to frontend code under the GPL?

* The OSI and FSF disagree on what are valid open source licenses, I'm thinking specifically about the Creative Commons 0 here (which generated a lot of discussion on the OSI mailing list, here, here, and here, before it was eventually rejected). Why should I trust one source over the other in matters of such disagreement?

* What rights do you have in an employee/employer relationship? Can they really own everything you create? Are there ways to circumvent this, like say anonymous contributions?


## Final Thoughts

Informative and I look forward to reading the rest of the book, especially the patents and trademark sections. I think a few more motivating examples and a little more depth in the explanations could really improve this guide in terms of usefulness. That said it did answer a lot of unanswered questions I've had as is, so it certainly is worth taking a look at if these things are relevant to what you do or you find this stuff interesting.

4.75/5
