---
title: Hudl Visit
date: 2014-10-13 00:27 UTC
tags: HFOSS, FOSS, Meetup
summary: "Hudl is a video editing/analysis tool for sports teams, basically there purpose is to bring playbooks and tape sessions of old up into the 21st century. And while you might not have heard of them before they really are making a huge impact in their domain serving about 40,000 teams across the country and during peak hours serving 25 hours of video per minute. That's one quarter of what YouTube serves, which is insane."
---

## Hudl Visit

[Hudl](http://get.hudl.com/about/) is a video editing/analysis tool for sports teams, basically there purpose is to bring playbooks and tape sessions of old up into the 21st century. And while you might not have heard of them before they really are making a huge impact in their domain serving about 40,000 teams across the country and during peak hours serving 25 hours of video per minute. [That's one quarter of what YouTube serves](http://www.mongodb.com/blog/post/how-hudl-uses-mongodb-scale-its-video-analysis-platform), which is insane.

Anyways, one of their platform engineers (the guys that make sure mission critical stuff stays functional), [Rob Hruska](https://github.com/robhruska), came to speak to our class about Free? and Open Source software, explaining from a business and a developer perspective the value of open source.

He started out by making sure we were all on the same page, highlighting the free as in beer vs free as in freedom distinction. He then talked about some of the reasons why open source is successful, a lot of which sounded like a rephrasing of what [Weber's Guiding Principles](2014/09/07/review-what-is-open-source-and-how-does-it-work/) (law of large numbers, don't reinvent the wheel), as well as more business specific ideas like avoiding vendor lock in.

The most interesting part of his talk for me though was when he talked about the strange practice in industry where almost without exception every company *uses* open source, but very few make it a focus to contribute back. On my last coop I experienced this as well, it's hard to even think of a tool we used (beyond OSX and Adobe stuff) that wasn't open source, yet only one person on the team released/contributed anything while I was there ([Frak](https://github.com/fstrube/frak), a ruby rysnc deployment wrapper).

And it's not like the company would be opposed to it or anything either, it just was never a priority. So when your task queue was filled up with tasks from paying clients, it was hard to make the case that you should be working on something that wouldn't bring in any money at all. Rob mentioned something along these lines as well and his advice was to try to tie open source into those daily tasks, constantly ask yourself (and your managers) could this tool or feature I'm working on be abstracted in such a way that it could beneficial to others?

There are multiple tangible benefits to this approach besides just giving back to the community. One, it forces you to make modular design decisions, separating out the parts that are specific to your project or might be sensitive. The result is a code base that is easy your to test and port to other projects, even projects within your own company. Another benefit is that you might just end up getting help from the outside world for free! Rob brought up one case where they open sourced their [fault tolerance library](https://github.com/hudl/Mjolnir) and a developer from Netflix started sending pull requests to knock out bugs. If they had kept it in house Hudl they never would have gotten that help.

And third it helps attract new developers who want to work not just with, but on open source projects at their workplace. Dev shops like [reInteractive](https://reinteractive.net/) and [Thoughtbot](http://thoughtbot.com/) are already starting a work 4 days a week for us, 1 for open source initiative and I think that's awesome. The more we move towards an open business model for everything the better.
