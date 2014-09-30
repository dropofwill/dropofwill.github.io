---
title: Community Architecture Team Project
date: 2014-09-30 05:24 UTC
tags: HFOSS, Commarch, Rails
summary: ""
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

### 1. Community Overview (See http://rubyonrails.org/community/)
**Rails IRC on irc.freenode.net**

For Rails Users: \#rubyonrails

For Rails contributors: \#rails-contrib

**Mail list archive**

There are three main mailing lists:

[Ruby on Rails Talk]() is a general user mailing list.

[Ruby on Rails Core]() is where people talk about contributing to Rails.

[Ruby on Rails Security]() is where security breaches are announced.

**Documentation**

There are two main sources of documentation, [The Rails Guides](), which explain in detail with code examples how to use various features of the project and the [API Guide]() which documents every framework, class, and method.

**Source Code repository**

The main project is located at [https://github.com/rails/rails](), other (non-core) parts of the project are also stored under the [Rails username]().

**Other communication channels**

They also use Twitter: [https://twitter.com/search?q=rails]()

And Planet Ruby on Rails: [http://planetrubyonrails.com/]()

**Project Website and Blog**

Main site: [http://rubyonrails.org/]()

Blog: [http://weblog.rubyonrails.org/]()

### 2. Project Description
Rails is an open source Model View Controller (MVC) framework written in Ruby. It follows the mantra ‘convention over configuration’, offering reasonable defaults and scaffolding to speed up the development process. The original goal of the project was to standardize the process of building a web app so that, 1) developers weren't rebuilding the wheel every time and 2) it would be easier to on-board new developers. It is one of the primary reasons that Ruby became popular and to some extent still drives the community development.

### 3. Project History
David Heinemeier Hansson (nick dhh) started Rails as a part of Basecamp, an internal project for 37signals (where he is now a partner). He open sourced it in 2004 and gave other contributors commit rights in 2005. In 2008 Rails was merged with one of it’s leading competitors, Merb, which itself was created to alleviate some of the major problems with Rails. It is now at version 4.1, with the 4.2 soon to be released (hopefully within the month).

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
Core team is listed here (13 members): http://rubyonrails.org/core/ and past members here (14 members): http://rubyonrails.org/core/alumni/

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
There is a discrepancy here. On GitHub, dhh has the most commits by a significant margin (3414 to 3162). On contributors.rubyonrails.org, however, Aaron Patterson (tenderlove) blows others away (4453 to 4132). We think this difference may be caused by the fact that Rails has multiple repositories; the Rails website may counts all repositories, while GitHub figure is specific to the core.

### 10. The Raptor Test (i.e. would the project survive if the main contributor was eaten by a Velociraptor)

While DHH seems to have the most commits on the project and has definitely been extremely influential in terms of marketing the framework, at this point his role is more of figurehead/manager. That's an important job, no question, but it's also one that other members of the community could easily pick up. So at this point with the community and core team at the size that it is, Rails would be ok if DHH were to die tomorrow.

### 11. The Bus Test


### 12. The Coefficient of Fail


### 13. On-boarding Process


### 14. Documentation Status


### 15. Newbie Help


### 16. Decision Making Process


### 17. Would I want to work in this sort of structure?



In your opinion, would the project survive if the core team, or most active 20% of contributors, were hit by a bus? Why or why not?
	[Opinion based; answer on your own]

Does the project have an official "on-boarding" process in place? (new contributor guides, quickstarts, communication leads who focus specifically on newbies, etc...)

Guide for newbies: http://guides.rubyonrails.org/contributing_to_ruby_on_rails.html
Rails dev box, a VM setup for contributing to Rails: https://github.com/rails/rails-dev-box

Does the project have Documentation available? Is it extensive? Does it include code examples?
Yes to all. Documentation can be found at http://rubyonrails.org/documentation/.
If you were going to contribute to this project, but ran into trouble or hit blockers, who would you contact, and how?
It seems that in the #rails-contrib IRC channel there isn’t a whole lot of activity, it mainly seems like a place where the core developers hang out. But the mailing list “Ruby on Rails Core” seems a lot more active and more friendly for new users/contributors.
Based on these answers, how would you describe the decision structure/process of this group?  Is it hierarchical, consensus building, ruled by a small group, barely contained chaos, or ruled by a single or pair of individuals?

Pre-pull request discussion happens in the Ruby on Rails Core mailing list, after the PR is submitted to Github most of the discussion occurs on the issue tracker. In general the decision structure is more consensus based, but not in the sense that every core member has to agree in order to merge, more like every core member that has an opinion on the PR has to agree. A lot of times there are just 2 or 3 core members with a lot .
Is this the kind of structure you would enjoy working in? Why, or why not?
	[Opinion based; answer on your own]
