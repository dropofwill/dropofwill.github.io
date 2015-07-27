---
title: Run Processing Sketches from Vim
date: 2014-09-08 03:09 UTC
tags: Vim, Processing
summary: "So I started writing Processing for one of my classes (Interactive Media Development) and unfortunately the default workflow is tightly bound to the IDE that it ships with. In general I'm not a huge fan of IDEs anyways, but the Processing one is especially terrible. It's obviously been designed to abstract away programming concepts to make the barrier to entry really low, but in the end this makes for an extremely annoying experience for those of us that have been programming for a while."
---

## Run Processing Sketches from Vim

So I started writing Processing for one of my classes (Interactive Media Development) and unfortunately the default development workflow they want us to use is tightly bound to the IDE that it ships with. In general I'm not a huge fan of IDEs anyways, but the Processing one is especially terrible. It's obviously been designed to abstract away programming concepts to make the barrier to entry really low (I think it was originally made to help artist make procedural art), but in the end this makes for an annoying experience for those of us with a bit of experience.

On top of this over the last year or so I have become attached to Vim as my go to editor. So when I start writing in the Processing IDE my code ends up littered with <code>wwwweajjl</code> or <code>:w</code> and the like. So when I found out that there was a command line program to run a sketch I jumped at the opportunity to add it into my Vim workflow.

Supposedly if you are running the Windows or Linux versions of Processing the command line bit comes pre-installed, but I haven't had a chance to test that out for myself yet so you may need to experiment with that. [On OSX there is an option to enable it in the tools menu.](https://github.com/processing/processing/wiki/Command-Line){:target="_blank"}

Then add this Automatic Command Group to your .vimrc:

~~~
augroup processing
	autocmd!
	autocmd BufNewFile,BufRead *.pde setlocal filetype=java
	autocmd Filetype java :command! Pj :!processing-java --run --sketch=$(pwd) --output=$(pwd)/tmp --force
	autocmd Filetype java :command! Pjf :!processing-java --present --sketch=$(pwd) --output=$(pwd)/tmp --force
	autocmd Filetype java :command! Pjb :!processing-java --present --sketch=$(pwd) --output=$(pwd)/tmp --force
augroup END
~~~

As you can see I've defined a couple of different commands to use. To run the sketch windowed type <code>:Pj</code>, for full screen type <code>:Pjf</code>, and to build the application type <code>:Pjb</code>. Obviously feel free to change the relevant commands to whatever you like, just remember user defined commands have to start with a capital letter.

Stepping through the code here we're defining a group of Auto Commands to run together, I arbitrarily named it processing just for organizational purposes.

<code>autocmd!</code> resets the previous Auto commands so when you're jumping through multiple files vim won't yell at you about overwriting the previous commands.

Next we're telling vim that pde files are really java. Before finally setting our custom commands. <code>:!</code> is how you execute shell commands from vim, so we're basically telling vim to run <codeprocessing-java</code> in the current directory (<code>$(pwd)</code>) and write to a directory arbitrarily named tmp.

And that's all you need to start writing Processing sketches from a Vim session.
