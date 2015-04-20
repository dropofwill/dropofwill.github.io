---
title: rtasklib update
date: 2015-04-20 14:36 UTC
tags: LinuxDev, Ruby, rtasklib
summary: "In the Ruby world the most common way to generate documentation is with Yardocs. It basically generates documentation by scraping the code comments and provides a structured API for writing comments that it can interpret. For example to annotate that a parameter of a certain method is a duck type that responds to #to_s (to string), you would simply make a comment above the method definition that says: # @param parameter_name [#to_s] a parameter that responds to #to_s."

---

# `rtasklib` update: added Yardocs

In the Ruby world the most common way to generate documentation is with [Yardocs](http://yardoc.org). It basically generates documentation by scraping the code comments and provides a structured API for writing comments that it can interpret. For example to annotate that a parameter of a certain method is a duck type that responds to `#to_s` (to string), you would simply make a comment above the method definition that says: `# @param parameter_name [#to_s] a parameter that responds to #to_s`.

I've started the process of documenting everything (currently at 45.76% documented, according to Yard's statistics) and posting it to the Github page for the rtasklib repo, which you can access [here](http://will-paul.com/rtasklib/) or from the readme. Here's the documentation for the [Taskrc class for example](http://will-paul.com/rtasklib/Rtasklib/Taskrc.html). To speed up this process I found a Python utility that does the generation, called `ghp-import`, which switches to the gh-pages branch, generates the docs, makes a commit, and pushes it to the repo.
