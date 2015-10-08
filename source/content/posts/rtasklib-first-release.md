---
title: rtasklib first release
date: 2015-05-19 14:31 UTC
tags: Ruby, LinuxDev, Legal

---

So the semester has come to a close and I've made the first 'official' release of `rtasklib`. Install the gem [from RubyGems.org](https://rubygems.org/gems/rtasklib) (`gem install rtasklib`) or [install the RPM on your Fedora system if you prefer](https://github.com/dropofwill/rtasklib/tree/master/rpms). I reached out to the TaskWarrior devs and they also are adding `rtasklib` to the list of [available libraries on the TaskWarrior main website in the next few days](http://taskwarrior.org/tools/#libraries), which is pretty cool.

Unfortunately, I was unable to finish `task_time` for the end of the semester. That said the pieces are in place and I hope to get something out over the summer.

All in all it was good learning experience. I don't often tread that far away from Web Dev, despite the fact that I spend a good part of my day on the command line. It's also the first time I've went through the process of actually releasing one of the gems I've made to RubyGems, so that was a good experience. Packaging for RPMs was a lot less easy and made appreciate the Ruby system a lot more than I did previously.

If anyone in the future needs to package up a Ruby Gem, I stumbled upon this random post on [Fedora's GitLab](https://gitlab.com/fedora-ruby/gitlab-rpm/wikis/rubygem-packaging), which was invaluable in just understanding the process from someone that obviously has done this quite a bit (and also not a first page Google result). Also, the [gem2rpm](https://github.com/fedora-ruby/gem2rpm) gem (from Fedora) is pretty good at extracting as much meta data as it can from the Ruby .gemspec, but you have to do quite a bit more to get a working RPM (especially if you have many Gem dependencies).
