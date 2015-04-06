---
title: "task_time update: Command line application structure"
date: 2015-03-28 04:23 UTC
tags: LinuxDev, Ruby, task_time
summary: "While I've been getting rtasklib into a usable state, I've been hashing out the actual feature set for the task_time app. The next step is to layout the code that let's the user interact with the application. Luckily this is one of the main uses of Ruby and has been approached from every possible angle. I have a set of specific requirements and the best match I found was Thor, which is actually the 4th most popular Ruby gem, closely following Rake (Ruby make), Rack (Web server middleware), and ActiveSupport ('fixes' some aspects of Ruby)."

---

# `task_time` update: Command line application structure

While I've been getting `rtasklib` into a usable state, I've been hashing out the actual feature set for the `task_time` app. The next step is to layout the code that let's the user interact with the application. Luckily this is one of the main uses of Ruby and has been approached from every possible angle. I have a set of specific requirements and the best match I found was `Thor`, which is actually the 4th most popular Ruby gem, closely following Rake (Ruby make), Rack (Web server middleware), and ActiveSupport ('fixes' some aspects of Ruby).


## Requirements

* Easy command line declaration, with help

* Typed options with optional and required arguments

* Nested arguments


## Easy command line declaration, with help

Simply make a class that inherits from Thor and all the public methods become commands and parameters become arguments to those commands. Descriptions and long descriptions are available through an intuitive Ruby DSL.

  ~~~
  class CLI < Thor
    desc "hello NAME", "say hello to NAME"
    long_desc <<-LONGDESC
      `cli hello name from` prints message "from from"
                                           "Hello name"
    LONGDESC
    def hello(name, from=nil)
      puts "from: #{from}" if from
      puts "Hello #{name}"
    end
  end
  ~~~

One limitation of this approach is we can't have parameters before the commands, which is how the `task` command works putting filters before the actions (e.g. `task 20-25 done`). However, I don't think this makes that much sense anyways and while I want to make this feel like a native extension of functionality as much as possible, this is one case where I don't think it makes sense to follow `task` exactly.

## Typed options

The above also shows how to just ordered arguments in, but named (and typed) options are available as well. Other handy commands available include aliasing, banners, and default options.

  ~~~
  class CLI < Thor
    option :from
    option :name, type: :string, required: true
    desc "hello NAME", "say hello to NAME"
    long_desc <<-LONGDESC
      `cli hello name from` prints message "from from"
                                           "Hello name"
    LONGDESC
    def hello()
      puts "from: #{options[:from]}" if from
      puts "Hello #{options[:name]}"
    end
  end
  ~~~

## Nested arguments

One thing that is required for my application is subcommands, so when you call one command it exposes another set of commands (like how rails generate exposes a number of methods that relate to generating rails code. Thor makes this simple, all we need to do is create a separate class for the subcommands, and then expose it in the original class using the `subcommand` method.

So to add our previous class a subcommand is as simple as the following:

    ~~~
    class TopCLI < Thor
      desc "topcli SUBCOMMAND ...ARGS"
      subcommand "cli", CLI
    end
    ~~~
