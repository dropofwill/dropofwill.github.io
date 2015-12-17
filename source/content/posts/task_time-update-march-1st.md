---
title: "task_time update March 1st"
date: 2015-03-02 02:16 UTC
tags: LinuxDev, Ruby, task_time, rtasklib

---

[Last week](/2015/02/22/a-comparison-of-task-warrior-wrappers.html.markdown) I talked about picking an appropriate TaskWarrior wrapper for my `task_time` project. A rundown of the options are `taskw` (Python, GPL, low on documentation, durations not implemented yet), `tasklib` (Python, BSD, good documentation, durations not implemented, does not read in users `.taskrc`), and `taskwarrior` (Ruby, MIT, just does JSON marshalling/unmarshalling). In the end I decided none of these were actually going to cut it, since none implemented duration features, so my choices were to either Fork and implement durations and whatever other features were needed or to roll my own. In the end I really would rather use Ruby for this so I decided that it would be good to write the wrapper from scratch, while taking cues from each of the other implementations. I named the repo `rtasklib` in following with the ruby convention of naming wrappers with lib and either a leading `r` or trailing `_ruby` (dashes imply a subclass and are only used when your're gem extends an existing gem not an external program). You can find the repo at [`dropofwill/rtasklib`](http://github.com/dropofwill/rtasklib) and the `task_time` repo at [dropofwill/task_time](http://github.com/dropofwill/task_time).

So far I've been working on the data conversion process and setting up a sandboxed testing environment (I don't want to run these tests on my local database of tasks after all :) ). Luckily with TaskWarrior you can just point it to a separate `.taskrc` and it will create a database wherever its told, so I have it setting one up inside my spec's data directory. I've setup [Coveralls](https://coveralls.io/r/dropofwill/rtasklib?branch=master) (for test coverage monitoring) and [Travis-Ci](https://travis-ci.org/dropofwill/rtasklib) (for continuous integration) on both projects (though `task_time` isn't being tested in a meaningful way at the moment). One problem I ran into was installing TaskWarrior on Travis Ubuntu machine, it turns out the Ubuntu repos are 4 minor versions behind, which is a lot of missing TaskWarrior functionality (including stuff that `task_time` will require to work), so I had to figure out how to install it from source, which took a few tries to get working right (see the .travis.yml). I don't know how Ubuntu users can stand that sort of turn around on repo updates, but that's another gripe for another time.

As far as data conversions go, the TaskWarrior data is subtlely more complicated than it seems. There are supposedly only 4 data types: string, numeric, date, and duration. In Ruby numerics should be represented as Fixnum (ints), Floats, or Bigdecimal/Bignum if need be. It also turns out that the string data type in the TaskWarrior world can also mean array of strings and these are used interchangeably internally. Dates and Durations can be represented with varying levels of precision, precise versions are represented in the standard ISO8601 format, no matter how the user inputs it (though they add their own idea of negative durations to the spec for things that are past due...). But there are also [named dates](http://taskwarrior.org/docs/named_dates.html) like `mon` or `eoww` (end of work week), as well as the interesting `someday` and `later` that represent January 18th, 2038. Luckily the source code is available so I should be able to figure this out (as you can tell by the badge on the repo, I'm not there yet). From what I can tell the other repos just choke on the named dates, so there's not a lot of help to be had there. My current approach is to extend (internally, Ruby lets you modify everything at runtime) the [ISO8601 ruby gem](http://www.rubydoc.info/gems/iso8601/0.8.5/ISO8601) to support these weird formats as well.

## Features I like from other implementations

### `taskw`

* Reads in the users `.taskrc` to make sure it handles data manipulation correctly. `Tasklib` implements a config object, but does not create this from the user's config.

### `tasklib`

* Makes the API follow Django's `QuerySet`, I'm going to try to do the same with Ruby's `ActiveRecord`. Following an existing API makes the onboarding process for new developers easier and makes sense for this project since TW is really just a plain text DB.

* Kind of a minor thing, but messing around with it I think it validates user input way too late in the process, if a process is going to fail it should do so as early as possible, not just the moment before it saves to the db.

* All the code is thrown into a single file, which is kind of ridiculous.

### `taskwarrior`

* Uses `ActiveModel` to handle validating user input, which makes the implementation super clean. No need to reinvent the wheel here.

* Has an examples section along with his Gantt chart plugin, which I think is crucial. Obviously, I'm going to have `task_time` as one major example, but I think it's important to design the wrapper against a few different use cases so that they don't end up getting too tightly coupled.

## Moving Forward

My goal is to get `rtasklib` to a point where I can start working on `task_time` in 2 weeks, that doesn't mean stable or feature complete or anything like that, just that it has implemented basic import/export functionality (so Open3 cmdline implementation, data-type conversions, and basic filtering). Once I get to that point I should be able to continue to develop them in parallel. In the meantime I've started to hash out the public interfaces for `task_time`, for now I've put it on the README.md, but I'm probably going to move it to PLAN.md in the near future.
