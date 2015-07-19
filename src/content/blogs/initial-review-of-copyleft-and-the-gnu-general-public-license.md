---
title: "Initial Review of Copyleft and the GNU General Public License"
date: 2015-02-06 19:57 UTC
tags: BizLeg, Licenses
summary: "The first chapter of a comprehensive guide to how the GPL works. This first chapter explains what free software is according to the FSF and why you should care, at a community and a global level. It uses legal jargon where necessary and definitely tries to make a point while attempting to give a non-biased view of the free software landscape."

---

# Initial Review of *Copyleft and the GNU General Public License*

The first chapter of a comprehensive guide to how the GPL works. This first chapter explains what free software is according to the FSF and why you should care, at a community and a global level. It uses legal jargon where necessary and definitely tries to make a point while attempting to give a non-biased view of the free software landscape.

> **Who:**
>
> * [Bradley M. Kuhn](http://en.wikipedia.org/wiki/Bradley_M._Kuhn) (free software activist, president of Software Freedom Conservancy, previously worked for the SFLC and FSF),
>
> * [Anthony K. Sebro, Jr.](http://www.martindale.com/Anthony-K-Sebro-Jr/2161338-lawyer.htm) (Ggeneral counsel at the Software Freedom Conservancy),
>
> * [Denver Gingerich](http://ossguy.com/?page_id=2) (FLOSS license compliance engineer at the Software Freedom Conservancy),
>
> * [Free Software Foundation](https://www.fsf.org)
>
> * [Software Freedom Law Center](https://softwarefreedom.org)
>
> **What:** A comprehensive (we're talking 140+ pages) guide to how the GPL works, in particular I've read the first chapter on entitled *What is Software Freedom?*
>
> **Where:** The whole guide is available on the [bizleg course web site](http://bizlegfoss-ritigm.rhcloud.com/static/books/comprehensive-gpl-guide.pdf)
>
> **When:** First version was released in 2003, but has had consistent updates from then until the latest change in 2014.


## The Good

* Lessig's quote about law in a free vs. closed society was a neat insight into a how lawyers think about open source. I've never thought about law as open source and how this effects the freedom in a society. I think this is an excellent way to introduce the concept of open source (through analogy) to someone who may be reluctant or confused about it.

* We were promised a bit more legal-ese for this reading and while yes, there were direct references to various laws and statutes (whose verbiage itself went over my head), the text as a whole wasn't that difficult to read.

* I liked that it dove into the difficulties with Public Domain, which answered a lot of questions I've had with it. I looked a little further into the problem on the OSI mailing list and a lot of the problems occur in the countries of Germany, the UK, and Japan, all of which are big players in the software industry.

## The Bad

* It puts forth the following argument against permissive licenses (particularly just releasing to the public domain, but it applies to all permissive licenses):

  > However, over time, some entities will choose to proprietarize their modified versions. The public domain body of software feeds the proprietary software. The public commons disappears, because fewer and fewer entities have an incentive to contribute back to the commons. They know that any of their competitors can proprietarize their enhancements. Over time, almost no interesting work is left in the public domain, because nearly all new work is done by proprietarization.

  This is of course a good reason to use a copyleft license, *if this is at all a likely situation* for your project. A point that don't even admit is a possibility. The FSF and the like often view the world of open source as a war zone, because of Stallman's previous experiences in the 70s and 80s, but that does not necessarily reflect all Open Source communities that exist today. For example in the world of interpreted languages are open by default (as in binaries don't exist, not necessarily free as in freedom) and even the biggest players in the industry open up their source code. So in cases like this the other restrictive problems that the GPL creates are more of an issue than they solve.


## The Questions

* Does GPL protect against future changes? I don't see how it could. For example, Some large corporation forks a GPL'd project, but decides that they don't want to license their particular changes as GPL, couldn't they simply release the previous source code with the project, but keep their changes secret? If modifications are somehow protected by the GPL, what constitutes a 'modification', if I for instance abstracted these modifications out into a separate repo, does that make my modifications no longer a derivative work?

* I still don't really understand license compatibility. The FSF has a large list of licenses it considers compatible with the GPL, but does this mean I can fork a GPL project, make changes and release it under the simple BSD, because they are compatible licenses?

* Why are some FSF GPL compatible licenses not recognized as free software by the OSI? Are their approval processes more strict? I was looking at the OSI mailing list on CC0 process and it seems like they got hung up on a patent clause? I really can't parse what the problem is though:

> a. No trademark or patent rights held by Affirmer are waived, abandoned, surrendered, licensed or otherwise affected by this document.
>
> b. Affirmer offers the Work as-is and makes no representations or warranties of any kind concerning the Work, express, implied, statutory or otherwise, including without limitation warranties of title, merchantability, fitness for a particular purpose, non infringement, or the absence of latent or other defects, accuracy, or the present or absence of errors, whether or not discoverable, all to the greatest extent permissible under applicable law.
>
> c. Affirmer disclaims responsibility for clearing rights of other persons that may apply to the Work or any use thereof, including without limitation any person's Copyright and Related Rights in the Work. Further, Affirmer disclaims responsibility for obtaining any necessary consents, permissions or other rights required for any use of the Work.
>
> d. Affirmer understands and acknowledges that Creative Commons is not a party to this document and has no duty or obligation with respect to this CC0 or use of the Work.


## Final Review

It was good, but I really would be more interested getting further into the book especially the third part where they talk about real case studies and the stuff about binary distribution and patents are things that I still don't really have a good grasp on. Overall I thought it was a better intro than the FOSS Primer simply because it went into more detail and seemed more aware of its bias, at least from this permissive license fan's perspective.
