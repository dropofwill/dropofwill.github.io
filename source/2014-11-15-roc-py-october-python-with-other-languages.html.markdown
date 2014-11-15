---
title: Roc.py October, Python with Other Languages
date: 2014-11-15 05:03 UTC
tags: Roc.py, HFOSS
summary: "This last month's Roc.py meeting was focused on interacting with other languages with Python. This included some quick demos of iOS app dev, Jython for the JVM, and IronPython for a .NET experience. However, the main focus of the talk/demo was using C and Fortran to get better performance out of your Python code."
---

## Roc.py October, Python with Other Languages

This last month's Roc.py meeting was focused on interacting with other languages with Python. This included some quick demos of iOS app dev, Jython for the JVM, and IronPython for a .NET experience. However, the main focus of the talk/demo was using C and Fortran to get better performance out of your Python code.

There are a number of ways to integrate python with C code, we went over Cython and Cffi, while briefly touching on PyPy, the native Python implementation that (like Rubinius) uses method inlining and Just In Time compiling to achieve better performance in some benchmarks (obviously highly dependent on the task at hand whether this plays out in a real world situation).

What was particularly enlightening for me was the bit of the talk on Fortran. Not necessarily the Python interaction with it (though I had noticed some Fortran files in the SciPy package), but rather the benchmark we ran comparing C and Fortran where Fortran was significantly faster.

One aside, you might remember that on my last Roc.py post I lamented that there wasn't a similar group for the more Ruby inclined Rochester Hackers. Apparently that has changed, as I found [this announcement](http://nextplex.com/rochester-ny/groups/roc-dot-rb-rochester-ruby/events/21544-roc-rb-revival-meetup){:target => "_blank"} about "reviving" the Roc.rb meetup. Unfortunately I was unable to attend this week, but I hope to in the future!
