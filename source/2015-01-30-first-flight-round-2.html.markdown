---
title: "First flight: Round 2"
date: 2015-01-30 01:47 UTC
tags: BizLeg, Middleman, Ruby
summary: "It's that time of year: a new semester of FOSS activity kicking into gear at RIT. And for me this year that means another FOSS class with Remy Decausemaker, which means another run through the First Flight for our open courseware newly renamed `ofcourse`."

---

## First Flight: Round 2

It's that time of year: a new semester of FOSS activity kicking into gear at RIT. And for me this year that means another FOSS class with Remy Decausemaker, which means another run through the First Flight for our open courseware newly renamed `ofcourse`.

A little bit has changed [since last time](/2014/09/02/first-flight/), as the course had expanded from 2 to 3 offerings (and hopefully more) the decision was made to separate course content from the infrastructure. So now each course has a repo with just its content and all the python code to make it work. Other than that not a whole lot has changed since last time.

The only real updates that I needed to do this time around was figure out how to make a separate XML feed for posts just for/related to this class. Since I'm still using Middleman (which [I've talked about a bit in the past](/tags/middleman/)) this is luckily pretty straightforward to make a new feed you just need to create a new xml file with the builder extension so middleman's asset pipeline knows how to compile it on build (e.g. feed.xml.builder). Then inside it's business as usual, with basically the default middleman blog feed setup:

~~~
xml.instruct!
xml.feed "xmlns" => "http://www.w3.org/2005/Atom" do
  site_url = "http://dropofwill.herokuapp.com/"
  xml.title "Dropofwill's Blog"
  xml.subtitle "Business and Legal Posts"
  xml.id URI.join(site_url, blog.options.prefix.to_s)
  xml.link "href" => URI.join(site_url, blog.options.prefix.to_s)
  xml.link "href" => URI.join(site_url, current_page.path), "rel" => "self"
  xml.updated(blog.articles.first.date.to_time.iso8601) unless blog.articles.empty?
  xml.author { xml.name "Will Paul" }

  blog.articles.each do |article|
    xml.entry do
      xml.title article.title
      xml.link "rel" => "alternate", "href" => URI.join(site_url, article.url)
      xml.id URI.join(site_url, article.url)
      xml.published article.date.to_time.iso8601
      xml.updated File.mtime(article.source_file).iso8601
      xml.author { xml.name "Will Paul" }
      xml.content article.body, "type" => "html"
    end
  end
end
~~~

That generates the page, but there is still no way to access it, but that's simple to fix, simply add a page route in the config.rb

~~~
page "/feed.xml", layout: false
~~~

But this is basically what I already setup before, how am I supposed to filter out blog posts that aren't relevant to Remy's BizLeg (Business and Legal in FOSS) class? I decided simplest way to handle it would be to simply assign a tag to any relevant post and filter by that. In order to do that I just had to go back to feed.xml.builder file and inside the `each blog post` loop wrap each XML entry with the simple following condition:

~~~
if article.tags.include? "BizLeg"
...
end
~~~

Pretty straightforward and easy enough to maintain.
