---
title: "Creating and Deploying a Middleman Blog, Part 2: Blogging with Middleman"
date: 2014-09-22 02:06 UTC
tags: Ruby, Middleman, Blog

---

[Last time](/2014/09/14/creating-and-deploying-a-middleman-blog-part-1-what-s-middleman/) I talked about static site generators in general (why you would use them) and a little bit about Middleman specifically (why you would use it in particular). Today I am going to talk about Middleman's blogging capabilities.

### Prepping your Middleman for Blogging

Middleman doesn't ship with blogging capabilities, but this wasn't an oversight, it was by design. Trying to follow the Unix principle of [do one thing, and do it well](http://en.wikipedia.org/wiki/Unix_philosophy#Doug_McIlroy_on_Unix_programming){:target="_blank"}, the Middleman core contains only what is required to run any Middleman site. The blogging features our definitely out of that scope so they're placed in their own gem, maintained by the same people that work on the core.

So you might be thinking that sounds great and all, but how much work is it to get setup? Thankfully it's super easy. Just add this to you Gemfile:

~~~
gem "middleman-blog", "~> 3.5"
~~~

And `bundle install` and you are all set to go.

To activate it add this block to your config.rb:

~~~
activate :blog do |blog|
  # set options on blog
end
~~~

While this method lets you take a more hands on look at the relevant setup, if this is your first rodeo with a static generated blog I recommend using the built in blog template (or one of the [community submitted templates](http://directory.middlemanapp.com/#/templates/blog){:target="_blank"}) Just to get a better feel for what options are available.

~~~
middleman init project-name --template=blog
~~~

### Markdown and Frontmatter

In Middleman blog articles are generally written in whatever flavor of Markdown you like (or [LaTeX if that's more your style](http://rriemann.github.io/middleman-blog-template-duocolor/demo/){:target="_blank"}).

Frontmatter is YAML or JSON that you can include at the top of your markdown pages (or any page) to set local variables to access with your templates and layouts. A common use of this is to set the title of a page or in a blog context set tags and date information. For instance, on this blog I use YAML and the Frontmatter for this post looks as folows:

~~~
---
title: "Creating and Deploying a Middleman Blog, Part 2: Blogging with Middleman"
date: 2014-09-22 02:06 UTC
tags: Ruby, Middleman, Blog
summary: "Last time I talked about static site generators in general (why you would use them) and a little bit about Middleman specifically (why you would use it in particular). Today I am going to talk about Middleman's blogging capabilities."
---
~~~

Now you might be thinking cool, but that looks like a bit of a pain to have to type out, esp. the date. How do you remember to format that? The answer is I don't, instead I use a middleman scaffolding feature to give me the barebones of an article to start with:

~~~
middleman article "Title" [optional args]
~~~

Of course all this can be configured in your config.rb, but chances are the defaults will get you mostly where you want to go (convention over configuration ftw!).

### What About Feature X?

No doubt you have qualms about ditching the backend completely for something even as simple as a blog. What if in the future I want to implement a tag cloud, or calendar, or whatever? First let me direct you to the [middleman-blog documentation page](http://middlemanapp.com/basics/blogging/), which shows you how to do just about everything that WordPress does out of the box (feeds, pagination, calendar, etc).

But what I think is really important to highlight is that you are not really abandoning the backend, the code you write for Middleman can look practically the same as you Rails code, what really is happening is we're moving the backend into a preprocessing step saving not just developer time, but CPU time as well. It's a bit of a paradigm shift for sure and certainly isn't for every or even most situations (just see my last post), but I think personal blogging is an domain where it really shines. Especially for developers who want to have control over the stack, but don't want to mess around learning the idiosyncrasies of Drupal or WordPress.
