---
title: "rtasklib update: Ruby and external tools"
date: 2015-04-06 02:22 UTC
tags: LinuxDev, BizLeg, Ruby, rtasklib

---

It turns out that one of the reasons Ruby was popular before the advent of Rails was because it was so easy to integrate with 3rd party tools through subprocesses. In fact Ruby has at least 7 ways of executing processes either in the core or the standard libraries and many more user implemented varieties. Since `rtasklib` is at its core concerned with interacting with a subprocess having a solid understanding of the available options is important. Below I summarize the results of my research for several of Ruby's subprocess methods.

## Kernel#exec, `exec('echo exec')`

Exec works by actually changing the current process into whatever its parameter is. So anything that comes after an `exec` call in a Ruby program will never execute. This is useful for tasks where that call is the last action the program takes as well as acting as the basic building block off of which all the other commands are implemented.

## Kernel#\`, `` `echo backticks` => exit code``

The one I often used before researching this was the 'backtick' methd, where every statement between backticks is passed to a subprocess (using `Kernel#fork` and `Kernel#exec` under the hood) and returns the exit code. This looks like a special statement in Ruby, but really its just a little syntactic sugar around a kernel method. Obviously, for `rtasklib` I'm interested in the actual output of the process, not just whether it was successful, so another technique is needed.

## Kernel#system, `system('echo system') => STDOUT`

A slightly different kernel method is `system`, which works the same under the hood as the backticks method, but instead of returning the exit code it returns STDOUT. This is more useful, but both are necessary for my purposes.

## Open3#popen3

Open3 is a module included in the standard libraries that offers a little bit more control over the process along with a Ruby-style block DSL. It has a number of methods available for various levels of control and piping processes together. The closest to what I want is `Open3#popen3`, which offers the most control. A simple used case would look like the following:

    ~~~
    Open3.popen3('echo popen3') do |stdin, stdout, stderr, wait_thread|
      pid = wait_thread.pid
      # Process::Status object returned.
      exit_status = wait_thread.value
    end
    ~~~

This is closer to what I want, but managing interactive sessions (which does happen occasionally with `task`) starts to get messy, is their a better way?

## PTY and ruby_expect

Enter the standard library PTY and the external gem `ruby_expect` both of these work similarly to Open3, but allow you to work with interactive sessions cleanly by implementing an interface similar to the UNIX tool Expect. The syntax of the two are slightly different, but the basic idea is that you create a subprocess and provide a way to respond to a given regex. An example of `ruby_expects` syntax is shown below.

    ~~~
    exp = RubyExpect::Expect.spawn(some_cmd)
    exp.procedure do
      any do
        expect /\(yes/no\)/ do
          if respond
            send "yes"
          else
            send "no"
          end
        end
      end
    end
    ~~~

## Conclusion

Right now I'm using the `ruby_expect` gem, but I've also implemented the PTY version as well and have been switching back and forth between the two. They both do what I want, but lack good documentation. The benefit of using the pure Ruby gem is that it is much easier to read than the C implementation, though I haven't checked out the Rubinius version (the Ruby interpreter written in Ruby), which might have a Ruby version of PTY.
