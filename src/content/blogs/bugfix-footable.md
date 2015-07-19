---
title: "Bugfix: FooTable"
date: 2014-09-24 05:43 UTC
tags: HFOSS, Bugfix, JavaScript
summary: "Everyone in the frontend community likes to hate on tables, it's like Comic Sans in the design community. And this is for mostly good reasons, tables for layouts are pretty much unnecessary in this day in age, but there are still actually legitimate uses of tables. You know like for tabular data."
---

## Bugfix: FooTable

Everyone in the frontend community likes to hate on tables, it's like Comic Sans in the design community. And this is for mostly good reasons, tables for layouts are pretty much unnecessary in this day in age (unless you're looking to center something vertically, [then *maybe* you can use it in your CSS, not the markup](http://css-tricks.com/centering-in-the-unknown/){:target="_blank"}), but there are still actually legitimate uses of tables. You know like for tabular data.

Unfortunately the default HTML tables aren't really that great from a UX perspective. From a functional standpoint there's no way to sort or filter data and from a design perspective it definitely still looks like something from the 90s. Now try loading that 90s era table of data with more than four columns of data on your phone, things start to get bad fast.

That's where [FooTables](https://github.com/bradvin/FooTable){:target="_blank"} comes in. It's a [JQuery](https://github.com/jquery/jquery){:target="_blank"} plugin that makes your data tables responsive with custom breakpoints, gives you some default styles that don't suck if you want them, and offers tons of new functionality, like filtering, sorting, pagination, and more. I've used on numerous occasions with great success, so when I got a job that needed to display a lot of tabular data to users (a lot of which who were mobile users), I decided to use FooTables.

### A Tale of Two Bugs

But when I went to include it on my page nothing happened, I just had the same old ugly table. Pop open the console and there were a bunch of `ReferenceErrors` coming from the FooTables source. After digging around in the source code a bit I noticed a number of instances where variables were being defined without the `var` keyword, like so:

~~~
function someScope() {
  newVar = foo;
}
~~~

In most cases this is no big deal, newVar will still be given the value foo. However, it will be added to the global scope instead of inside the scope it was defined in. So the above is the equivalent to:

~~~
// Assuming this isn't nested in another function
var newVar;
function someScope() {
  newVar = foo;
}
~~~

That's usually not what you intend and if it is, you should probably be doing it explicitly so that other readers can understand what your doing:

~~~
// Again assuming no nesting
// `this` in the top-level refers to the window/global object
var global = this;
function someScope() {
  global.newVar = foo;
}
~~~

But anyways, back to FooTables, it worked before, right? Why was it failing now? Well, this part was my fault. You see with [ECMAScript](http://kangax.github.io/compat-table/es5/){:target="_blank"} 5 came a [Perl like convention of "strict"](http://perldoc.perl.org/strict.html){:target="_blank"} mode, [this does a lot of things](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode){:target="_blank"}, but the gist of it is things that worked before or failed silently would no longer be allowed in the interest of a more stable software platform. One of the items that changed was that global variables could only be assigned like the third example, and when you use that first method, yep, you guessed it, JavaScript throws a `ReferenceError`.

At first this may seem like a terrible mistake, now perfectly good programs will fail. That might not sound like much of a stability boost to you. But the folks working on the spec thought of that as well. It turns out that setting strict mode works just like variables, *it only applies to the scope it's defined in.* So:

~~~
// Strict mode for all the things!
"use strict";
function someScope() {
  // This will be strict as well
}
-----
// Not strict
function someScope() {
  "use strict";
  // items in this scope and nested below will be treated with strict mode
}
// Not strict
~~~

So best JavaScript practice is to define strict mode only in scopes that you are responsible for, otherwise you might break third party libraries. And that's exactly the route I took on the aforementioned project (which you can see the relevant table bits for [here](http://www.demandingjustice.org/states/new-york/){:target="_blank"}).

### A Wild Bugfix Appears

But why not fix the other problem too? There's no reason FooTables shouldn't be strict mode compliant and it seemed like a pretty easy fix. So I forked the repo and dove in.

Looking around a bit I found that it was managed with [npm](https://www.npmjs.org/doc/){:target="_blank"}, distributed with [Bower](http://bower.io/){:target="_blank"}, and used [Grunt](http://gruntjs.com/){:target="_blank"} to run the build and testing step. The files I need to edit were going to be located in the `js/` directory, but first before I started messing around with the project internals I figured I better install the project's dependencies.

~~~
$ npm install

npm ERR! install Couldn't read dependencies
npm ERR! Darwin 13.3.0
npm ERR! argv "node" "/usr/local/bin/npm" "install"
npm ERR! node v0.10.32
npm ERR! npm  v2.0.0

npm ERR! Invalid version: "2.0.1.5"
npm ERR!
npm ERR! If you need help, you may report this error at:
npm ERR!     <http://github.com/npm/npm/issues>
~~~

Ah, the classic npm err. I've spent countless hours debugging npm dependency errors in the past and a lot of times the solution is just to reinstall npm. So without even bothering to read the error messages I blindly upgraded npm:

~~~
$ brew info npm
...
$ brew upgrade npm
==> Upgrading 1 outdated package, with result:
...
$ npm install
~~~

But to no avail. I decided to check the error log a little closer:

~~~
npm ERR! Invalid version: "2.0.1.5"
~~~

Ahah! npm requires [semantic versioning](http://semver.org/){:target="_blank"}, which means version numbers must follows the pattern: MAJOR.MINOR.PATCH-pre-release-label. After taking a look at the git history of the `package.json` file where npm defines the version, it seemed like an appropriate semantic version would be 2.0.2 instead of 2.0.1.5. I edited the `package.json` and `bower.json` to reflect this and submitted a [pull request](https://github.com/bradvin/FooTable/pull/276){:target="_blank"}.

Since [Travis.ci](https://travis-ci.org/){:target="_blank"} was setup on the project I went to watch my pull request be tested. Once it passed I went back to the pull requests page to review my submission. But it was no where to be found. Confused I hopped around from issues to pull requests wondering what happened. Finally I clicked on the "Closed" link on the pull requests page only to find he had already merged my pull request. A mere two minutes after I made it, at 1am on a Wednesday. Talk about a responsive upstream!

With that bug squashed I returned to my original mission. Finding all the violations of strict mode was as simple as running [JSHint](https://github.com/jshint/jshint/){:target="_blank"} in my editor ([Vim, Syntastic plugin](https://github.com/scrooloose/syntastic){:target="_blank"}) and exploring the context of each warning to make sure what I was doing wasn't actually breaking anything. That done, I looked at the Gruntfile to see what sort of build tasks were setup. Turns out the default task ran everything, so I just ran `grunt` and all the js tests passed and the builds completed. Strangely the LESS didn't compile to the same as the prior CSS (even though I hadn't changed anything) and the CSS linter threw a couple of errors. But that's a bug fix for another day. I committed just the JavaScript files to another feature branch and submitted my [second pull request of the evening.](https://github.com/bradvin/FooTable/pull/277){:target="_blank"}
