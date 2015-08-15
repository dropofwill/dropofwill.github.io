---
title: "Creating and Deploying a Middleman Blog, Part 1: What's Middleman?"
date: 2014-09-14 22:07 UTC
tags: Ruby, Middleman, Blog

---

This is the first in what will probably be a three part series on creating and deploying a [Middleman](https://github.com/middleman/middleman){:target="_blank"} site, specifically a blog deployed to a [Heroku](https://devcenter.heroku.com/start){:target="_blank"} instance.

### Where we're going in the next couple of posts:

1. **[What's Middleman?](/2014/09/14/creating-and-deploying-a-middleman-blog-part-1-what-s-middleman/)**
2. **[Blogging with Middleman](/2014/09/22/creating-and-deploying-a-middleman-blog-part-2-blogging-with-middleman/)**
3.-**[Deploying](/2014/09/29/creating-and-deploying-a-middleman-blog-part-3-deployment)
)**

### What's Middleman?

Middleman is a static site generator built in the programming language of [Ruby](https://www.ruby-lang.org/en/){:target="_blank"} and the [Rack](http://rack.github.io/){:target="_blank"} interface. As a generator it allows you to use features of "modern web development" that you would expect in a backend framework without the extra overhead of database. It also comes packaged with a "server" that runs on Rack, designed to be run in development so you can see your changes live instead of having to rebuild every time. But as we'll see in a later post you can also use this to run Middleman in production to host on a site like Heroku.

### Why and When to Use a Static Site Generator?

So why even bother with a static site generator, doesn't it just add needless complexity? Another point of failure? To some extent yes. You need to weigh your options, but here's the thing: if you're building a site with more than 4 or 5 pages without some sort of templating system, the time sink won't be problems with your generator, it's going to be changing the verbiage in the footer for the tenth time or something equally stupid.

The way I see it you have 4 basic options:

1. Play it close to the metal use a programming or web server for dynamic content directly (e.g. [PHP](http://php.net/){:target="_blank"} or [Apache](http://httpd.apache.org/){:target="_blank"}).
2. Get a little help from a framework and templating language to standardize your setup (e.g. [Django](https://www.djangoproject.com/),{:target="_blank"} [Wordpress](http://codex.wordpress.org/Developer_Documentation){:target="_blank"}, [Slim](http://slim-lang.com/){:target="_blank"}).
3. Use a task runner to manage the repetitive or laborious tasks for you (e.g. [Grunt](http://gruntjs.com/){:target="_blank"} or [Make](http://www.gnu.org/software/make/){:target="_blank"}/[Rake](https://github.com/jimweirich/rake){:target="_blank"}).
4. Use a static site generator (e.g. [Middleman](https://github.com/middleman/middleman){:target="_blank"}, [Jekyll](https://github.com/jekyll/jekyll){:target="_blank"}, or [Pelican](https://github.com/getpelican/pelican){:target="_blank"}).

Obviously, these are extremely loose distinctions and there certainly can be overlap between them (e.g. using Grunt with Slim or Mustache is something I've done on many occasions).

IMO, 1 is a dangerous game unless you're working alone *and* know what you're doing. Even so, tying your markup to one language or even worse one web server seems like a bad idea. What if later on you realize running [NGINX](http://nginx.com/){:target="_blank"} for your web server would lead to a noticeable speed boost. Suddenly all those Apache specific [Server Side Includes](http://httpd.apache.org/docs/current/howto/ssi.html){:target="_blank"} are broken and you're back to editing every single template again.

2 is a good choice if you know where a project is headed long term, though there is quite a bit of technical debt to take on when starting a project like this, depending on what choices you make. Though this subsides with experience in the framework, for instance while it seems like a poor idea I wouldn't mind prototyping the frontend of a project in Rails, because I've built so many sites with it over the past couple of years. But ask me to do that with say Wordpress or Django it would be a different story, it would just be too much of a waste of time if we weren't completely sure what the final backend would be and even then I probably would rather not.

That's kind of where 3 comes in, it's the middle ground, a good place to start prototyping a project when you don't know where it's actually going to end up. Most templating languages or implemented in all the modern web languages so pick one with good support and you're code base remains portable from web server to programming language.

So where does this leave Middleman and company? It's kind of a niche market to be honest, it's for situations where developers or at least technically savvy individuals are going to be editing content (it's all templates and markdown, no pretty CMS to hold your hand) and where your sure you won't be adding a backend at a later date. So generally what we're looking at are personal sites and project sites. One advantage here is the ease of use, while perfecting a Gruntfile can be an arduous task, with something like Middleman it can be as simple as <code>middleman init</code> and you're off and running.


### Why Middleman?

Why Middleman specifically and not Jekyll or [Hexo](http://hexo.io/){:target="_blank"} or one of [hundreds of other generators](http://staticsitegenerators.net/){:target="_blank"} popping up all over the web? Well, for me personally it's because Middleman models itself after Rails and that's just what I was familiar with so I gave it a shot. To be honest I've only messed around with [Hugo](http://hugo.spf13.com/){:target="_blank"} and [Hekyll](https://github.com/bmcmurray/hekyll){:target="_blank"} (as a way to mess around with Go and Haskell respectively), so I can't definitively say that Middleman is particularly better (and if you want to publish to Github pages Jekyll probably seems like the better integrated option...).

So what Rails features carry over? The main tenant of Rails development is "convention over configuration", basically most people are trying to do similar things with their web frameworks, so why not pre-configure everything to work out of the box and sprinkle in some best practices along the way? This mantra is alive and well in the Middleman community and for the most part you probably won't make that many changes in the <code>config.rb</code> file.

Like Rails, Middleman ships with Erb, Sass, and CoffeeScript support, as well as the prettier ([but awfully slow](http://sephinrothcn.wordpress.com/2014/04/14/slim-vs-haml-performance-perspective/){:target="_blank"}) Haml and the Markdown engine [Kramdown (the fastest ruby implementation, with some nice extra features)](http://kramdown.gettalong.org/){:target="_blank"}. However, if you prefer logicless templates like me it's trivial to add Slim support or a different markdown engine or whatever.

Also like Rails you get an Asset Pipeline complete with [Sprockets](https://github.com/sstephenson/sprockets){:target="_blank"} for file concatenation so you can keep your JavaScript under control in multiple files. One advantage of this setup is you can turn on cache busting which appends a unique number to the end of each asset url that changes whenever the asset changes so no more asking a client to clear their cache or anything like that. You can also lock into the pipeline with an image compressor that will automatically make sure none of your images make it into production any larger than they need to be.

Other features like local data (they call it Frontmatter), dynamic pages (we'll talk more about this with the blog plugin later), localization, routes, and more are all at your finger tips. If you would like to dive in check out the Getting Started page or try out a template like [my Bower/Slim setup](https://github.com/dropofwill/middleman-slim){:target="_blank"} or one from the [ever growing official list](http://directory.middlemanapp.com/#/templates/all){:target="_blank"} or make your own it's super easy.

Until next time happy hacking!
