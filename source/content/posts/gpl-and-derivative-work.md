---
title: GPL and Derivative Work
date: 2015-02-22 22:16 UTC
tags: BizLeg, GPL, Licenses

---


For the answers I turned first to the internet, which lead me to a lot of conflicting opinions on the subject (see [1](http://en.wikipedia.org/wiki/GNU_General_Public_License#Compatibility_and_multi-licensing) and [2](http://www.rosenlaw.com/lj19.htm) for example). I then turned to my non-lawyer, but Business and Legal Professor Remy DeCausemaker, he thought that since no changes would be made and it was dynamically linked it wouldn't be problematic, but that to get a real answer I should turn to what the lawyers of FSF have to say on the subject in the [Comprehensive GPL Guide](http://bizlegfoss-ritigm.rhcloud.com/static/books/comprehensive-gpl-guide.pdf) to be sure. Luckily there is a whole chapter in the Guide solely on the topic of derivative work (chapter 4, page 19. So let's dive in.

## Derivative Works: Statute and Case Law

What does the GPL actually say on the matter? Well, it leaves it almost entirely up to case law stating:

> a ‘work based on the Program’ means either the Program or **any derivative work under copyright law.**”

Emphasis mine. As it turns out the answer to this question depends on the court you ask it in, from the broadest definition in the Second Circuit (also adopted by the Fifth, Tenth, and Eleventh Circuits), to the narrower versions in the First and Ninth, to the undefined behavior in a number of other courts. How can something so fundamental, be so ambiguous to the court system? Well, as it turns out the Copyright Act does not provide all that much in the way of guidance leaving a lot up for interpretation:

> A “computer program” is a set of statements or instructions to be used directly or indirectly in a computer in order to bring about a certain result.
>
> A “derivative work” is a work based upon one or more preexisting works, such as a translation, musical arrangement, dramatization, fictionalization, motion picture version, sound recording, art reproduction, abridgment, condensation, or any other form in which a work may be recast, transformed, or adapted. A work consisting of editorial revisions, annotations, elaborations, or other modifications which, as a whole, represent an original work of authorship, is a “derivative work.”
>
> In no case does copyright protection for an original work of authorship extend to any idea, procedure, process, system, method of operation, concept, principle, or discovery, regardless of the form in which it is described, explained, illustrated, or embodied in such work.

## The Most Broad Definition of Derivative: The AFC Test

The AFC Test (Abstract, Filter, and Comparison) was created by the Second Circuit court, at a high level the AFC test is the process of Abstracting a program out into its constituent parts, then Filtering out material that are unprotectable (e.g. public domain or unrelated to copyright, see the third clause of the Copyright Act quoted above), and then finally Comparing the two programs at this level to see if they are in fact derivative. Ultimately not much is thrown out in the filtering step in the case of software and they simply look at the comparison and decide whether the similarities are "substantial" enough to make the work derivative or not.

## A Narrower Approach: The Analytic Dissection Test

The Analytic Dissection Test was created by the Ninth Circuit to determine whether one piece of *software* is derivative of the other. This approach first requires the identification of the areas of similarities in the programs, then filters out the unprotectable parts (as in the AFC). After this the court decides whether each feature of contention is given "thin" or "broad" protection. Thin is given to items that are only copyrightable because of their "alignment or presentation" whereas broad protection is given to items which are copyrightable as expression. In other words thin items are only protected if they were basically copy-pasted while the expression of ("substantially similar") broad items is also protected.

## Further in, an even Narrower Approach

The First Circuit takes the position that the other courts application of the AFC is too loose when applied to software and claim that "method of operation" applies to any means by which users interact with a computer and thus were not protectable under copyright. This means that for example that the Java API was not copyrightable because it was considered a "method of operation".

Several courts haven't declared what definition they will use in such a case, but many lawyers believe they would default to the AFC test based on its wide use.

## Left hanging

The guide ends the chapter with a few examples and then kind of says that derivative work is not that big of an issue, and while this is an exciting legal grey area, that it's not really a big issue since the GPL offers the explicit right to derivatives to everyone, as long as they also license it under the GPL. Which is kind of a disappointing response to be honest. If this isn't such a big issue should I feel safe just using GPL projects wherever I please? I'll keep looking into this further, but until then I haven't really found a clear answer.
