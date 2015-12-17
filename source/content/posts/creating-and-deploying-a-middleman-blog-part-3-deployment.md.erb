---
title: "Creating and Deploying a Middleman Blog, Part 3: Deployment"
date: 2014-09-29 02:04 UTC
tags: Ruby, Middleman, Deployment
summary: "The beautiful thing about static site generators is the portability, you can just throw it on any server that's public facing and can serve files and it just works. That said there are certain practices that can make your life easier, and deploy your sites safely with versioning and without ever having to touch an FTP client. I'm going to talk about one of many of these possible configurations, Heroku with Puma."

---

[Two posts ago](/2014/09/14/creating-and-deploying-a-middleman-blog-part-1-what-s-middleman/) I talked about static site generators in general and Middleman specifically. [After that](/2014/09/22/creating-and-deploying-a-middleman-blog-part-2-blogging-with-middleman/) I talked about how to use Middleman for blogging and again talked about different use cases. Today I am going to talk about deployment options and how you can get your site onto the web.

### The Options
The beautiful thing about static site generators is the portability, you can just throw it on any server that's public facing and can serve files and it just works. That said there are certain practices that can make your life easier, and deploy your sites safely with versioning and without ever having to touch an FTP client. I'm going to talk about one of many of these possible configurations, [Heroku](http://heroku.com/){:target="_blank"} with [Puma](http://puma.io/){:target="_blank"}.

### Heroku with Puma (What this site is currently running on)
Puma is a Ruby web server built specifically for Rack applications, with the intent on being fast and efficient. In some of the [latest benchmarks](http://puma.io/) it used 10% of memory that Unicorn did while still beating it by more than a third in terms of requests per seconds. This improvement comes at the cost of portability, as it only works on Ruby Rack applications, but when that's what you have (which we can easily turn Middleman into) it makes a great choice. Especially when your using a SAAS like Heroku, who makes their money by charging for ["Dynos"](https://devcenter.heroku.com/articles/dynos) (you can think of it as a CPU container).

So what are the steps?

1. Add rack-contrib and puma to the `Gemfile`
2. (Optional) configure a 404 page and pretty urls
3. Add the Rack config: `config.ru`
4. Add the Procfile so Heroku knows what's up
5. Install Heroku command line tools
6. Push to Heroku!

#### 1. Add rack-contrib and puma to the `Gemfile`
Heroku will install all the gems in our Gemfile on push (at least those not in any non-production groups), a lot of these are going to be unnecessary, but that won't hurt anything. That said we are going to need some way to serve our files and the easiest way to install stuff on Heroku will be in our Gemfile.

So simply add Rack and Puma to the `Gemfile` like so:

~~~
gem "rack-contrib"
gem "puma"
~~~

You could be safe by specifying a version, but I don't foresee that being that big of a problem with these particular gems.

#### 2. (Optional) configure a 404 page and pretty urls
This really doesn't have anything much to do with deployment, but will make some of the settings in the next step make more sense. Basically just create a page somewhere to be the 404 (I put mine in `source/404.html`) and turn on pretty urls in config.rb:

~~~
activate :directory_indexes
~~~

This basically just turns all the urls into the form: `path/to/page/` instead of: `path/to/page.html`.

#### 3. Add the Rack config: `config.ru`
This is the main guts of the post and may be a bit hard to read if you aren't familiar with Ruby or Rack applications. All try to comment what's going on clearly, but the main thing to look out for are:

1. Symbols: `:symbol` are basically just more efficient strings. Often used as configuration flags, keys in hashes, and internally they are used to reference instance methods.
2. Method calls don't have to have parentheses around the parameters and a lot of ruby programmers leave them out unless they are absolutely necessary (makes code read more like English).
3. Key Pairs are separated by the 'hash rocket': `key => value` or alternately if you're using symbols as the keys the compressed syntax: `key: value`
4. The double colon `::` is basically a namespace resolution operator, it's how you access items in nested modules.

Ok, so here's the code:

~~~
# load the necessary libraries
require "rubygems"
require "rack"
require "middleman/rack"
require "rack/contrib/try_static"

# Build the static site when the app boots
# The ticks ` ` tell ruby to execute the commands
`bundle exec middleman build`

# Use is a Rack method
# Rack::Head, ::TryStatic are modules that we are using
# Enable proper HEAD responses
use Rack::Head
# Attempt to serve static HTML files
use Rack::TryStatic,
    # We want to serve the compiled site, in build
    root: "build",
    # %w is a shortcut to create arrays of strings
    # Probably unnecessary, but thinking ahead in case we
    # want to add more later
    urls: %w[/],
    # Try these other extensions if the above fails
    try: ['.html', 'index.html', '/index.html']

# Serve a 404 page if all else fails
run lambda { |env|
  [ 404, {"Content-Type"  => "text/html",
          "Cache-Control" => "public, max-age=60" },
    # Change this to wherever you put your 404 page
    File.open("build/404.html", File::RDONLY) ] }
~~~

#### 4. Add the Procfile so Heroku knows what's up
Heroku still doesn't quite know what to do with all this, until we clearly define our app's processes. This is done in a Procfile like so:

~~~
web: bundle exec puma -p $PORT -e $RACK_ENV
~~~

Basically just defines a web process that runs Puma on a port and rack setup in the environment variables (bundle exec just means execute this command in the 'context' of the bundle, which may or may not be necessary if you run it locally, depends on how you manage your Ruby installs).


#### 5. Install Heroku command line tools
Now to push to Heroku you're going to need an account and the command line tools. You can find detailed instructions [here](https://toolbelt.heroku.com/){:target="_blank"}. I recommend installing it with Brew if you're on OSX and checking your package manager if you're running Linux.

#### 6. Push to Heroku!
Now assuming you are already setup with get, you shoud be able to make your project Heroku ready by running `heroku create [Your App Name]`. Then to make it live run `git push heroku master`.

Now test your site by going to `[Your App Name].herokuapp.com`

For more generalized Heroku deployment guidance [checkout their docs.](https://devcenter.heroku.com/articles/git){:target="_blank"}
