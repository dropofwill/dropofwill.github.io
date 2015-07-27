---
title: "rtasklib update march 16th"
date: 2015-03-16 04:02 UTC
tags: LinuxDev, Ruby, rtasklib
summary: "Over the last couple of weeks the overall architecture has been in a state of flux as I have been swapping pieces in out to see what will work best. Now as I approach my original milestone for having this in a working condition things are starting to fall into place. Models for tasks and configuration are pretty much stable, initialization of the configuration is done, and validation and serialization of tasks are coming along. The main bit of work left to do is writing the controllers to hook all of the components together and will effectively make up the public interface for the library."

---

# `rtasklib` update March 16th

## Recap

Over the last couple of weeks the overall architecture has been in a state of flux as I have been swapping pieces in out to see what will work best. Now as I approach my original milestone for having this in a working condition things are starting to fall into place. Models for tasks and configuration are pretty much stable, initialization of the configuration is done, and validation and serialization of tasks are coming along. The main bit of work left to do is writing the controllers to hook all of the components together and will effectively make up the public interface for the library.

## A little implementation detail

For the configuration file I decided to effectively store it as a shallow hash structure before converting it to a Virtus domain object. The config will be immutable because there should not be a need to both permanently and dynamically change the users configurations, the latter alone can be configured on a per call basis with the `rc:` flag. Because of this we only have to go in one direction, which makes the serialization layer less restrictive. As I mentioned last week `taskw` implemented a deep nested hash like this:

~~~
rc["color"]["label"]["sort"] = 'gray10'
# which makes this (a default config) impossible to store as well
rc["color"] = 'on'
~~~

I went with the simplest solution I could come up with, which was to treat each of the paths as unique keys in a shallow hash (while converting periods to underscores to follow a Ruby convention), something like this (using Ruby symbols, instead of strings for the keys):

~~~
rc[:color_label_sort] = 'gray10'
rc[:color] = 'on'
~~~

From there its just a matter of converting the hash to a Virtus object. Usually a Virtus attribute has a set type so that it knows what to coerce to, but in this case there are over 200 configurations in the default config and of course a config can contain arbitrary stuff from the user or another plugin, so there is no way to set this all up before hand. Luckily Virtus comes metaprogramming ready and it was easy enough to add attributes on the fly, I simply checked for booleans (including TW's idea of "yes"/"no" and "on"/"off"), floats, integers, and the finally just said everything else was a string and to just keep it like it is.

## Moving forward

I plan to have a basic controller implementation in place by the end of next week or sometime during Spring Break. Once that's in place I'll be able to start splitting time between `task_time` and `rtasklib` again.
