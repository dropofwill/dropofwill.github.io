---
title: "iTunes, Fedora, and Python: A Terms and Agreement Overview"
date: 2015-02-11 03:27 UTC
tags: BizLeg
summary: "iTunes, Fedora, Python three very different products, with very different goals. But how are they similar and how are they different? That's what his blog post intends to elucidate by looking at each one in detail."

---

# iTunes, Fedora, and Python: A Terms and Agreement Overview

iTunes, Fedora, Python three very different products, with very different goals. But how are they similar and how are they different? That's what his blog post intends to elucidate by looking at each one in detail.

## The iTunes Terms and Conditions

> **Who:** [Apple's Legal Team](https://www.apple.com/legal/)
>
> **What:** A lengthy document discussing all Apple digital content sales in general, followed by a look at iTunes in particular, and finally a closer look at their software and book stores.
>
> **Where:** [Available on Apple's website](https://www.apple.com/legal/internet-services/itunes/us/terms.html)
>
> **When:** Last Updated September 17, 2014

### Good

Fun fact: Apple has to pay Amazon to sell items with 1-Click.

Fun fact:

> You also agree that you will not use these products for any purposes prohibited by United States law, including, without limitation, the development, design, manufacture, or production of nuclear, missile, or chemical or biological weapons.

### Bad

> You may not copy (except as expressly permitted by this license and the Usage Rules), decompile, reverse-engineer, disassemble, attempt to derive the source code of, modify, or create derivative works of the Licensed Application, any updates, or any part thereof


## The Fedora Project Contributor Agreement

> **Who:** [Red Hat's Legal Team](http://www.redhat.com/en/about/all-policies-guidelines), primarily Richard Fontana, with feedback from Tom Callaway, Pamela Chestek, Paul Frields, and Robert Tiller
>
> **What:** An document about how contributors license their contributions to the Fedora project, its starts by giving an overview and FAQ in layman terms, before moving to the actual legally binding document.
>
> **Where:** [Available on the Fedora Projects wiki](https://fedoraproject.org/wiki/Legal:Fedora_Project_Contributor_Agreement)
>
> **When:** Last Updated February, 3rd 2015, but that was only a minor change (couple of words) from the previous document that dates back to 2011.

### Good

• In case you were wondering the [iTunes license is regarded as not free by Fedora, but the Do What The F'ck You Want To Public License is. :)](https://fedoraproject.org/wiki/Licensing:Main?rd=Licensing)

• Your contributions are either accepted or rejected based on whether or not they are licensed under an "Acceptable License for Fedora", if so they maintain that license within the project. If you did not first license your contributions, then they are licensed under a default license for that particular category of contribution.

### Bad

• Maybe just that I don't necessarily like the MIT as a default license (permissive is a good choice here, but the MIT is ambiguous in a lot of ways which makes it a bit dangerous I think). Other than that it seems like a solid document.

## The Python Software Foundation Contributor Agreement

> **Who:** [The Python Software Foundation](https://www.python.org/psf/)
>
> **What:** A short and sweet document explaining what licenses the PSF will accept and places for the contributor and PSF members to fill out their information to sign it.
>
> **Where:** [Available on Python.org](http://legacy.python.org/psf/contrib/contrib-form/contributor-agreement.pdf)

### Good

• You sign away your rights to the PSF forever for this software under one of their preferred licenses, however you maintain the right to license and distribute it yourself however you please. This seems like a fair way of handling a complicated matter that involves countless contributors.

### Bad

• That said this is a lot heavier handed than the Fedora contributors agreement forcing contributors to relicense more permissive or strict code under the PSF terms.


## Questions

• For the PSF Agreement, why only and particularly AFL and Apache 2.0 licenses? I'm not super familiar with either, but a cursory look at the OSI and Wikipedia entries on these licenses it seems like the differences between them are minimal and that the licenses are actually viewed as redundant by a lot of the community.

• In the Fedora agreement, if I understand it right, this applies to all contributions to the many Fedora projects, this seems to imply that a single project could have upwards of 260 licenses applied to it (a rough estimate of how many *code* licenses Fedora has approved as free, not counting document, content, and font licenses).

Is this true? And if so what does this mean for enforcement? How does one keep track of what code is licensed under what, git history? How do they handle GPL compatibility?

• Can someone explain the what moral rights are? Fedora seems to be requiring one waive them in their agreement, but I thought we couldn't do this in the United States for example...

## Final Comparison

Obviously the use case between the iTunes' terms and the Fedora and PSF contribution agreement are very different. As far as EULA's go, the iTunes one is nothing if not thorough with regard to keeping everything under lock and key as well as disclaiming liability. One similarity to note between their terms and open source licenses is that the they both disclaim responsibility in much the same way (all caps, similar language, etc.), the only difference being iTunes goes into more specifics, while open source licenses strive to be as generalizable as possible.

Comparing the PSF and the Fedora contributors agreements is a little more interesting. One similarity is that they both don't require the user to give up their copyright, but they go about the rest of it completely different ways. The PSF restricting the user to 2 licenses plus however they want to license it outside of the PSF, whereas Fedora let's the user keep whatever license they already had as long as it is free by their definition.

It would be silly to rate these as if they were literature, but in terms of how I feel about their practices:

Fedora > PSF > Apple
