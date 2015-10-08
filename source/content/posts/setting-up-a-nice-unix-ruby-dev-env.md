---
title: Setting up a nice UNIX Ruby dev env
date: 2014-12-10 06:05 UTC
tags: Ruby, Unix

---

Setting up a Ruby environment is deceptively simple. Easy to do, hard to maintain. The two major players, RVM and rbenv, offer more than the typical user needs or can possibly understand. Here I walk you through my setup using tools that do one thing and do it well. Coincidently all these tools that I use were written by the same guy/girl who goes by the handle Postmodern.

So what are our goals coming out of this setup?

1. A way to easily install new versions of Ruby without conflicting with and system versions or each other.

2. A way to easily switch between versions on a per project basis, preferably automatically so we can set it and forget it.

3. (Optional) A way to manage where Gems (libraries) are being installed to eliminate any weird conflicts that may occur again on a per project basis.

Luckily, Postmodern has written a single app for each of these tasks.

1. `ruby-install`

2. `chruby` (a.k.a. change-ruby)

3. `gem_home` (formerly `chgems`)

The great thing about this division of concerns is that even if you don't like how one part of the system works you can always swap it out for another. For instance, if you like `chruby`, but want to still install a bleeding edge ruby versions (not supported by design w/ruby-install) and want to use something else like RVM (or MRVM, M for mini), that will just work no questions asked.

Let's get started!

### Install new versions of ruby with `ruby-install`

Ruby-install comes with great package manger support, and of course you could just install it with `wget` or `curl` as well. Their [github page](https://github.com/postmodern/ruby-install) covers installation pretty well, so I'll just leave that and say that I used the `brew` version without incident:

~~~
brew install ruby-install
~~~

To view available rubies to install automatically just run it without arguments

~~~
$ ruby-install
$ Known ruby versions:
  ruby:
    1:      1.9.3-p545
    1.9:    1.9.3-p545
    1.9.3:  1.9.3-p545
    2.0:    2.0.0-p451
    2.0.0:  2.0.0-p451
    2:      2.1.2
    2.1:    2.1.2
    stable: 2.1.2
  jruby:
    1.7:    1.7.12
    stable: 1.7.12
  rbx:
    2.1:    2.1.1
    2.2:    2.2.6
    stable: 2.2.6
  maglev:
    1.0:    1.0.0
    1.1:    1.1RC1
    stable: 1.0.0
  mruby:
    1.0:    1.0.0
    stable: 1.0.0
~~~

You can then install them with varying levels of specificity. For example to install the stable version just run `ruby-install rbx` replacing rbx with whatever flavor of ruby you're interested in. Or if you want the latest major version of 1, just run `ruby-install ruby-1`, or `ruby-install ruby-2.0` for the latest non 2.1 version. You get the idea, it's pretty intelligent at figuring out what you want to do.

Want to install a ruby not listed yet, or no longer supported by default? No problem just pass the MD5 of the latest release or a path to a ruby-lang.org download, `ruby-install --md5 MD5_OF_TAR_BZ2 ruby 2.3.4` or `$ ruby-install -M https://ftp.ruby-lang.org/pub/ruby ruby 2.0.0-p247` respectively.

You can also change where it installs and who it installs under (e.g. root or you).


### Manage active version of ruby with `chruby`

So we've installed a bunch of flavors of ruby to play with, but if you run `which ruby` in all likelihood something like `/usr/bin/ruby` will still show up. So how do we actually use these? We could manage the $PATH ourselves, but that is an annoying, error prone, and is the opposite of automatic.

That's where [chruby](https://github.com/postmodern/chruby) comes in, installation and usage mirrors ruby-install nicely. So we can run `chruby` to get a list of rubies to use and marking the current one with an \*, and select them in the same way that we did to install them (e.g. `chruby rbx`, `chruby ruby-1`, etc.). To go back to the system ruby just run `chruby stable`.

To automatically switch on a per-project basis all we need to do is make a file named .ruby-version with the contents of whatever we would pass `chruby`:

~~~
file: .ruby-version
rbx-2.2
~~~


### (Optional) Manage the gem path with `gem_home`

While `chruby` manages your $GEM_PATH on a per ruby basis, sometimes you want a more sandboxed environment, like when you need to incompatible versions of the same gem for different projects. That's the purpose `gem_home` serves.

It doesn't have quite as good of package manager support, but is still easy enough to install, just follow the instructions on [github](https://github.com/postmodern/gem_home#readme).

The typical use case for me would be to change into the project's directory and then run:

~~~
gem_home .
bundle install
~~~

This will install your Gems to $PWD/.gem/ unless they are already installed, in which case it will just use those.

That's it! You're all set to make your ruby apps without giving version management a second thought.
