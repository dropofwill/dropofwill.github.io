---
title: Community Architecture Team Project
date: 2014-09-30 05:24 UTC
tags: HFOSS, Commarch, Rails
summary: "This the final write up for our Community Architecture report on Ruby on Rails. There's quite a bit of content to wade through, so here's a quick overview."
---

## Community Architecture Team Project Report
This the final write up for our Community Architecture report on Ruby on Rails. There's quite a bit of content to wade through, so here's a quick overview.

1. Community Overview
2. Project Description
3. Project History
4. Core Committers
5. Turnover within the Core Team
6. Benevolent Dictator for Life
7. Front vs. Backend Developers
8. Major Development Issues
9. Project Trends
10. The Raptor Test
11. The Bus Test
12. The Coefficient of Fail
13. On-boarding Process
14. Documentation Status
15. Newbie Help
16. Decision Making Process
17. Would I want to work in this sort of structure?

### 1. Community Overview (See [community](http://rubyonrails.org/community/))
**Rails IRC on irc.freenode.net**

For Rails Users: \#rubyonrails

For Rails contributors: \#rails-contrib

**Mail list archive**

There are three main mailing lists:

[Ruby on Rails Talk](https://groups.google.com/forum/#!forum/rubyonrails-talk) is a general user mailing list.

[Ruby on Rails Core](https://groups.google.com/forum/#!forum/rubyonrails-core) is where people talk about contributing to Rails.

[Ruby on Rails Security](https://groups.google.com/forum/#!forum/rubyonrails-core) is where security breaches are announced.

**Documentation**

There are two main sources of documentation, [The Rails Guides](http://guides.rubyonrails.org/), which explain in detail with code examples how to use various features of the project and the [API Guide](http://api.rubyonrails.org/) which documents every framework, class, and method.

**Source Code repository**

The main project is located at [https://github.com/rails/rails](https://github.com/rails/rails), other (non-core) parts of the project are also stored under the [Rails username](https://github.com/rails).

**Other communication channels**

They also use Twitter: [https://twitter.com/search?q=rails](https://twitter.com/search?q=rails)

And Planet Ruby on Rails: [http://planetrubyonrails.com/](http://planetrubyonrails.com/)

**Project Website and Blog**

Main site: [http://rubyonrails.org/](http://rubyonrails.org/)

Blog: [http://weblog.rubyonrails.org/](http://weblog.rubyonrails.org/)

### 2. Project Description
Rails is an open source Model View Controller (MVC) framework written in Ruby. It follows the mantra ‘convention over configuration’, offering reasonable defaults and scaffolding to speed up the development process. The original goal of the project was to standardize the process of building a web app so that, 1) developers weren't rebuilding the wheel every time and 2) it would be easier to on-board new developers. It is one of the primary reasons that Ruby became popular and to some extent still drives the community development.

### 3. Project History
David Heinemeier Hansson (nick dhh) started Rails as a part of Basecamp, an internal project for 37signals (where he is now a partner). He open sourced it in 2004 with an MIT License and gave other contributors commit rights in 2005. In 2008 Rails was merged with one of it’s leading competitors, Merb, which itself was created to alleviate some of the major problems with Rails. It is now at version 4.1, with the 4.2 soon to be released (hopefully within the month).

First commit:

~~~
commit db045dbbf60b53dbe013ef25554fd013baf88134
Author: David Heinemeier Hansson <david@loudthinking.com>
Date:   Wed Nov 24 01:04:44 2004 +0000
Initial
~~~

Latest commit:

~~~
commit d63005447b143e3308c9e8e430216cd7bb144c6c
Author: Robin Dupret <robin.dupret@gmail.com>
Date:   Sat Sep 27 16:22:15 2014 +0200
Tiny follow-up to #16999 [ci skip]
    * Fix a typo
    * Remove references to Rails version
    * Remove an extra whitespace
~~~


### 4. Core Committers
Core team is listed here (13 members): [http://rubyonrails.org/core/](http://weblog.rubyonrails.org/) and past members here (14 members): [http://rubyonrails.org/core/alumni/](http://rubyonrails.org/core/alumni/)

There has been a bit of turnover within the core team, with 14 no longer actively involved with project, however nine of the top ten contributors are still active.

Total there have been 3,634 people who have made 47,173 commits.


### 6. Benevolent Dictator for Life
David Heinemeier Hansson is the project's founder and the top contributor according to Github, however many of those commits are from the frameworks early days and have tailed off in the last couple of years. To quote the Rails website, “He’s infamous for his ruthless delegation.” There are a lot of people that do a lot of work for Rails, so he doesn’t seem like a dictator so much as an overseer.


### 7. Front vs. Backend Developers
There isn’t really a front end to the Rails core, so the only real front end is the [documentation](https://github.com/rails/rails.github.com), which at this point most of the commits are for content not code. That said the top contributors to this repo are generally different than that of the core.


### 8. Major Development Issues
Most of the noise surrounding Rails have been around security issues and questions of scalability. Security is a top concern for the core team, so much so that they have a mailing list specifically for security reports and announcements.

As for scalability, there was a big discussion that started when Twitter moved their data backend and eventually their user facing backend off of Rails after they had several bouts of slowness during high demand. While obviously this seems like a necessary move for Twiter (one of the highest trafficked sites in the world), it's important to note that Rails did just fine under normal Twitter traffic loads. If your site is getting that sort of traffic then yeah, maybe optimizing Rails isn't worth it, but if your getting Github, Hulu, Grubhub, or Yellow pages (all sites that run on Rails) like traffic you'll probably be fine.


### 9. Project Trends
As shown on the code frequency graph on GitHub, it seems as if Rails has been getting steady contributions during the past year, without too many spikes in either additions or deletions. This is probably because with so many contributors, the amount of work done remains fairly consistent, even if everyone isn’t working all the time. The only spikes that do occur appear to line up with coming release dates so that makes sense.


### Most Unique Knowledge
There is a discrepancy here. On GitHub, dhh has the most commits by a significant margin (3414 to 3162). On [contributors.rubyonrails.org](contributors.rubyonrails.org), however, Aaron Patterson (tenderlove) blows others away (4453 to 4132). We think this difference may be caused by the fact that Rails has multiple repositories; the Rails website may counts all repositories, while GitHub figure is specific to the core.


### 10. The Raptor Test (i.e. would the project survive if the main contributor was eaten by a Velociraptor)

While DHH seems to have the most commits on the project and has definitely been extremely influential in terms of marketing the framework, at this point his role is more of figurehead/manager. That's an important job, no question, but it's also one that other members of the community could easily pick up. So at this point with the community and core team at the size that it is, Rails would be ok if DHH were to die tomorrow.


### 11. The Bus Test
Rails is big, like over a 150MB, so the Git by a Bus program couldn't handle the size of the history and crashed my computer. I tried installing the new supposedly faster Git by a Truck, but I couldn't get it to install on my computer. So we decided to some analysis by hand.

The bus test, if you don't know, is if 20% of the top contributors to a project were to die in a bus accident would the project be able to survive? The Git by a Bus uses some statistical models to do a little bit more intelligent analysis, but in lieu of that we decide to just look at the raw commit info.

Turns out if the top 20% of Rails contributors were to die in a bus accident that would leave just people that have 5 or less commits each. That leaves the project in a pretty dire state, even with the contributor and user base as large as it is.

However, that bus crash would be quite the event, seeing as 20% of Rails contributors is a total of **737** people. That's more than have been killed by shark attacks, in all of recorded history.

So we decided to apply the bus test to just the core team. Which would kill the top 3 contributors (dhh, tenderlove, and jeremy). These three developers account for about 20% of the commits overall. So while this would be a major blow to the project, we think it is big enough to be able to survive.


### 12. The Coefficient of Fail
The Coefficient of Fail is a "system" developed by Tom 'spot' Callaway to detect red flags in an open source project. A great deal of the items are tied to developing compiled applications/packages, so the questions aren't always applicable to the Rails project.

So these are the four points of failure we identified from his list that Rails didn't pass:
1. Source is over 100 MB, even compressed (+10)
2. Dependencies need to be installed first (+10)
3. 1-2 years proprietary before open source (+10)
4. No per-file licensing (Though each module has a license) (+10)

This gives Rails a total of 40 point of fail, which according to Callaway means that, "Babies cry when it's downloaded."

I think this is a little ridiculous seeing as only point 4 seems like it could possibly construed as a bad thing.


### 13. On-boarding Process
There is a thorough guide for newbies: [http://guides.rubyonrails.org/contributing_to_ruby_on_rails.html](http://guides.rubyonrails.org/contributing_to_ruby_on_rails.html) and even a Rails dev box, a VM setup for contributing to Rails: [https://github.com/rails/rails-dev-box](https://github.com/rails/rails-dev-box)


### 14. Documentation Status
Yes to all. Documentation can be found at [http://rubyonrails.org/documentation/](http://rubyonrails.org/documentation/)


### 15. Newbie Help
It seems that in the #rails-contrib IRC channel there isn’t a whole lot of activity, it mainly seems like a place where the core developers hang out. But the mailing list “Ruby on Rails Core” seems a lot more active and more friendly for new users/contributors.


### 16. Decision Making Process
Pre-pull request discussion happens in the Ruby on Rails Core mailing list, after the PR is submitted to Github most of the discussion occurs on the issue tracker. In general the decision structure is more consensus based, but not in the sense that every core member has to agree in order to merge, more like every core member that has an opinion on the PR has to agree. A lot of times there are just 2 or 3 core members with a lot .


### 17. Would I want to work in this sort of structure?
This is exactly the type of structure I would like to contribute to, domain knowledge is spread evenly among top contributors, there is not one guy making the final call on everything,the process is consensus based
