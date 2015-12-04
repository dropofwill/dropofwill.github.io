---
title: A Comparison of Task Warrior Wrappers
date: 2015-02-22 20:54 UTC
tags: LinuxDev, task_time

---

So as it turns out there were 3 main libraries written to interact with the TaskWarrior database (I think there is also a Perl and maybe a PHP wrapper as well, but I couldn't find them again and let's face it: I'm not interested in using either of those languages anyways).

## Python: [taskw](https://github.com/ralphbean/taskw), GPL v3

A project developed by Rochester's own Ralph Bean with help from 12 other devs, it is by far the most actively developed wrapper available and had a new commit just 3 days ago. It is developed by a dev who talks at rocpy every month and is the #rit-foss channel all the time, so that's a big plus. The current build status has an error, but it looks like maybe some sort of [network connection problem?](https://travis-ci.org/ralphbean/taskw) Will have to look into that further.

Unfortunately, it is licensed under the v3 GPL license, which is going to make things annoying because the taskwarrior community primarily uses permissive licenses (the MIT in particular) and I prefer permissive licenses in general. However, using a copyleft non-LGPL licensed library with a compatible OSI license [is legally ambiguous](http://en.wikipedia.org/wiki/GNU_General_Public_License#Compatibility_and_multi-licensing), which puts me in an awkward situation. Probably going to talk to Remy about this in our next BizLeg class and report back here with some thoughts on the situation.

On my first run through it did not appear to have filter passing ability, which is problematic for my planned API.

File structure:

~~~
├── CHANGELOG.rst
├── LICENSE.txt
├── MANIFEST.in
├── README.rst
├── requirements.txt
├── setup.cfg
├── setup.py
├── taskw
│   ├── __init__.py
│   ├── exceptions.py
│   ├── fields
│   │   ├── __init__.py
│   │   ├── annotationarray.py
│   │   ├── array.py
│   │   ├── base.py
│   │   ├── choice.py
│   │   ├── commaseparateduuid.py
│   │   ├── date.py
│   │   ├── duration.py
│   │   ├── numeric.py
│   │   ├── string.py
│   │   └── uuid.py
│   ├── task.py
│   ├── taskrc.py
│   ├── test
│   │   ├── __init__.py
│   │   ├── data
│   │   │   ├── default.taskrc
│   │   │   └── included.taskrc
│   │   ├── test_datas.py
│   │   ├── test_fields.py
│   │   ├── test_task.py
│   │   ├── test_taskrc.py
│   │   └── test_utils.py
│   ├── utils.py
│   └── warrior.py
├── test_requirements.txt
└── tox.ini

4 directories, 34 files
~~~

## Python: [tasklib](https://github.com/robgolding63/tasklib), BSD 3 Clause

A project developed by two authors: `robgolding63` and `tbabej`, it's under fairly active development with the latest commit being two days ago. It tries to mirror the API of a Django ORM and seems to have complete read and write functionality, including a filtering class that `taskw` appears to be missing.

File Structure:

~~~
├── AUTHORS
├── LICENSE
├── MANIFEST.in
├── README.rst
├── docs
│   ├── Makefile
│   ├── conf.py
│   └── index.rst
├── setup.py
└── tasklib
    ├── __init__.py
    ├── task.py
    └── tests.py

2 directories, 11 files
~~~

## Ruby: [taskwarrior](https://github.com/dropofwill/taskwarrior), MIT

And last, but not least the only Ruby library available. Unfortunately, it currently only supports read operations, which means it would require heavy modifications on my end to be usable for the `task_time` project. It also hasn't seen active development since 2013. That said it is written Ruby and MIT licensed, so it is basically what I'm looking for.

On closer look though, this project works with the JSON export, so it doesn't actually interact with the TaskWarrior database at all, which is almost entirely the point of using a wrapper at all. It's looking more like if I want to do this in Ruby I'm going to be doing it on my own.

File Structure:

~~~
├── Gemfile
├── Guardfile
├── LICENSE
├── README.md
├── Rakefile
├── examples
│   └── finished-early
├── lib
│   ├── taskwarrior
│   │   ├── annotation.rb
│   │   ├── annotation_mapper.rb
│   │   ├── attributes.rb
│   │   ├── priority_mapper.rb
│   │   ├── project.rb
│   │   ├── repository.rb
│   │   ├── tag.rb
│   │   ├── task.rb
│   │   ├── task_mapper.rb
│   │   ├── validations.rb
│   │   └── version.rb
│   └── taskwarrior.rb
├── taskwarrior.gemspec
└── test
    ├── fixtures
    │   ├── no_deps.json
    │   ├── party.json
    │   ├── party2.json
    │   └── party_taxes.json
    ├── test_helper.rb
    └── unit
        ├── test_annotation.rb
        ├── test_priority_mapper.rb
        ├── test_project.rb
        ├── test_repository.rb
        ├── test_tag.rb
        ├── test_tag_habtm.rb
        └── test_task.rb

6 directories, 31 files
~~~


## Final Thoughts

As much as I hate to admit it, I might have to pivot to using Python for this project, because the library wrapper is basically unusable. My options are to remake `tasklib` or `taskw` in Ruby (or at least get them to working condition). Licensing problems and the lack of a filter feature are problematic for `taskw`, which means my current top option is `tasklib`. My current plan of attack is to finalize my public API and goals for the project in parallel and finish research on dependencies by the end of next week.
