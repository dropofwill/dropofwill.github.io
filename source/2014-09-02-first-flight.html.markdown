---
title: First Flight
date: 2014-09-02 19:24 UTC
tags: HFOSS, FOSS
summary: "For Humanitarian Free/Open Source Software our first assignment (First Flight) was a sort of starter guide to the tools of Open Source culture. Some of it I was already familiar with, but some was new. This blog post outlines my experience setting everything up."

---

##First Flight

For Humanitarian Free/Open Source Software our first assignment ([First Flight](http://hfoss-fossrit.rhcloud.com/hw/firstflight)) was a sort of starter guide to the tools of Open Source culture. Some of it I was already familiar with, but some was new. This blog post outlines my experience setting everything up.

###What's Ahead:
- IRC
- Blog
- Github


###IRC
I've used IRC before, but not consistently, usually just to pop in and ask a quick question.As such I've never reserved a handle or used a dedicated client.

Personally I switch back and forth between using OSX and Linux (currently Fedora), but during the school year I tend to stick to mainly OSX, because a lot of times I have to Illustrator or Photoshop for projects. The assignment recommended the app Colloquy, however this is a gui app that isn't cross platform.

So I tried to find a cross-platform alternative. It turns out the client Remy uses, [IRSSI]() was a available on homebrew, so installing it on my OSX partition was as easy as:

~~~
brew install irssi
~~~

There are a lot of features and configurations that I'm not taking advantage of right now, but basic usage looks something like this:

~~~
irssi -c irc.freenode.net -n dropofwill
~~~

###Blog
I have a couple of blogs, so this is nothing new, but I decided it would be a good idea to start fresh with a blog dedicated to just development topics. That way I can overtime merge this blog with my portfolio page.

With this in mind I decided to use a static site generator, that way when I start moving my portfolio over I won't have to mess with some esoteric CMS. Since I worked with Ruby on Rails a lot over the summer I decided to use [Middleman](http://middlemanapp.com/) since it's designed to mirror a Rails workflow (asset pipeline, partials/layouts/helpers, convention over configuration, etc.).

Setting up a Middleman blog is a little too involved to write out in any depth here, maybe that's for another blog post.

For hosting I'm using a free account on Heroku. Since Middleman is just a bit of [Rack](http://rack.github.io/) middleware under the hood getting it running on Heroku just meant I needed some sort of web server for it to interact with. For me it was a toss up between [Puma](https://github.com/puma/puma) and [Unicorn](http://unicorn.bogomips.org/), in the end I just went with Puma because I was more familiar with how to configure it to work with Rack.

###Github
I've had a [Github account for a while](https://github.com/dropofwill), so this part of the homework was easy.
