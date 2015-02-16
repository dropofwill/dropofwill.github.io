---
title: "Taskwarrior timesheet plugin plan"
date: 2015-02-16 19:36 UTC
tags: Ruby, LinuxDev
summary: "This is a plan for a project that will act as a plugin for the application Taskwarrior that allows the users to use `task` to keep track of their time involved with tasks. I chose task_time as the name because the original program is run with the `task` command and in Ruby underscores are used to denote spaces (dashes imply some sort of class hierarchy)."

---

# Taskwarrior timesheet plugin plan

[Repo: dropofwill/task_time](http://github.com/dropofwill/task_time)

This is a plan for a project that will act as a plugin for the application Taskwarrior that allows the users to use `task` to keep track of their time involved with tasks. I chose task_time as the name because the original program is run with the `task` command and in Ruby underscores are used to denote spaces (dashes imply some sort of class hierarchy).



## Abstract

Taskwarrior is a lightweight command-line applications that makes managing/filtering/reporting/understanding of your todos easier. One aspect that it is missing is time-tracking the developers say that this feature is out of scope and should be remedied with a plugin, the currently available plugins don't mirror Taskwarrior's attention to detail or polish and seem to be fairly minimal (no offense to those maintainers).



## Detailed Description

The interface for this project will be that of a simple command line tool, at some point I want to write or extend a current ncurses layout to use this as well, but that is out of scope for this phase of the project. I'm thinking that the entry point will be `task_time <filter>` with an optional shell script for users that want a more seamless integration that will take `task <filter> time` just like you would use it if it was built into Taskwarrior itself. All the task filtering will be passed on to `task` behind the scenes, so I won't have to reimplement that.

The user will probably be something like `start` and `stop` for keeping track of the raw data, `est` for estimating how long a task is going to take, and then some other commands for generating the reports based on the previous time spent (filtering by project, task, tag, whatever). Another feature I would like to implement is a Kanban workflow. For all the reports I want to be able to export them to the command line to view and export to a number of formats (json, csv, xml, etc) like for all the other Taskwarrior reports, but also a PDF export from any Tilt-based template.



## Excitement (or why do you care about a todo app)

Taskwarrior is an tool I use everyday, but as is I have to use another app (Freshbooks, Teamwork, etc.) to track my time spent on tasks for work and I end up not tracking my time for anything else. An important part of being a productive developer is understanding the end-to-end process: how long should this take? How long did it take? And why? Having actual data and reporting about this should make this process easier to understand.

Plus all I write these days are web apps, yet most of what I use day-to-day is in the terminal, it will be nice to work on something where I'm the target audience for once. :)



## Scope

Nothing is ever finished, but I think the scope of this project is such that I can make an initial release by the end of the class (see Milestones). As this is something I plan on using a lot, I imagine I will continue working on it after class is over.



## License

My license of choice is the Creative Commons 0, because I prefer to be as permissive as possible (and I don't care about attribution). But since that is not OSI approved (and it needs to be for this class), my backup is the MIT, which is fairly permissive and the default license for Ruby projects and the license that Taskwarrior is released under, so it probably makes the most sense anyways.



## Milestones

1. Initial functionality: internals work and public API finalized. Rough due date: March 16th, may shift back if I need to spend more time on implementing functionality in the wrapper.

2. Reporting and external integration: all the charts and reporting features are working and any integration with external services are finalized. Rough due date: April 27th

3. Initial Release: full to near full test coverage and packaged and submitted to at a minimum: RubyGems, AUR, and Debian (possibly also RPM as time permits). Rough due date: May 14th



## Programming languages

This shouldn't be a resource heavy project, all the heavy lifting will be done by taskwarrior itself (written in C++), for that reason I want to use Ruby, which is my interpreted language goto. If speed becomes an issue pivoting to Rust or C is always an option, but I do not foresee that as a problem.

That said right now the Ruby library for interacting with Taskwarrior is a little out of date (missing a couple major Taskwarrior updates), so I'm going to have to either fork that project to add the functionality I need or pivot and write the project in Python, which has a more actively developed wrapper that seems to be up to date. I'll have to make that decision pretty soon, I'm reviewing my options now.

