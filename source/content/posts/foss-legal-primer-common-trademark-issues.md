---
title: "FOSS Legal Primer: Common Trademark Issues"
date: 2015-02-21 19:21 UTC
tags: BizLeg, Review, Trademark

---

Common Trademark Issues gives an overview of how trademark law in the US works and what that means to you as a FOSS developer. It explains the registration process, how you can lose your registration, and how to handle licensing agreements and enforcement.


> **Who:**,
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
> **What:** Chapter 5 of the book *A Legal Issues Primer for Open Source and Free Software Projects* put out by the [Software Freedom Law Center (SFLC).](https://www.softwarefreedom.org/)
>
> **Where:** [available for free on RIT's Business and Legal issues in FOSS course website](http://bizlegfoss-ritigm.rhcloud.com/static/books/foss-primer.pdf)
>
> **When:** Latest edition (1.5.2) published June 2008



## The Good

* Unlike patent law, trademark law is first come first serve. So even if you don't register a mark you are allowed to continue using it if you made it first. This means you should do your research first to understand what is already out there, since it can't be used against you in court.

* I didn't realize that the <super>TM</super> doesn't mean it's registered and anyone can use that to assert their common law right.

* Trademarks aren't indefinite, you can lose a trademark through genericide and abandonment. The term genericide refers to when consumers start using your trademark to represent general class of products (Kleenex and Xerox perhaps?). And abandonment means that you stop actively using a mark (usually for a period of three years).



## The Bad

* It is stupid to try and prevent language from modifying your trademark into a verb, in English if enough people use your product it is going to happen, no matter what you want. Seriously this process is a linguistic process called *conversion* and is the most common word-formation process in English. You have no hope in stopping it.

Perhaps you can design the original name in such a way that it is awkward to use as a verb, but even then people will be creative and come up with a way to use it anyways. Example: Twitter is an example of conversion of a verb to a noun so it is awkward to convert it back, so people just use tweet in its stead. Given enough usage this will happen, no matter what you want.

* I think the issue of trademarks in FOSS development is a great example of how to get non-programmers involved in open source. Often programmers are not the best designers and understanding the subtlety involved in logo design takes a lot of effort that most of us don't want to embark on (personally I've designed a bunch of logos out of necessity, and they work out fine because I have some design background, but it's not what *I want to spend my time working on*). I think making open source projects more inviting to designers (and writers, users, etc.) is an important step for any widely used project and one that is rarely ever considered seriously in my experience.

* Unregistered marks still stand up under common law, but only to their geographic scope of influence, which doesn't translate well to the global world of the internet, leaving unregistered marks distributed primarily on the web in unknown territory. Which means in FOSS cases we have really have to pay the federal fee of $275 for registration, which is yet another example of the legal system not applying to the new global ecosystem of the web.


## Questions

* Non-commercial and non-confusing public use is unenforcable under trademark law. How then can FOSS licenses enforce their clauses about trademark abuse? If I fork a project can I continue to use their trademarked logo on the project if it remains open and non-commercial? I know it talks about forks and that seems to contradict what is said above about non-commercial uses.

* As a corollary to the above question, how is non-commercial defined here? Does this mean I need to register my project as a non-profit? Or is this by default if my project is not making a profit?


## Final Thoughts

Trademarks seem to me the least evil of all IP rights, but also the least important to worry about as an open source project. These issues will really only effect you if your project reaches a certain size and to be honest on the internet we have better ways for consumers to find out what is legitimate: sha keys and links.

Interesting read, learned a lot about TM, don't really see the point of them for anything I'll be working on in the future, but good to know about. As always in this text I wish there were more motivating examples, but I understand why they might consider that out of scope.

6/10
