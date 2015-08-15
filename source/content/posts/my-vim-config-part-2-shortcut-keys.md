---
title: "My Vim Config Part 2: Shortcut Keys"
date: 2014-11-15 04:53 UTC
tags: Vim, Config

---

This is a continuation of my short series ([part 1](/2014/11/02/my-vim-config-part-1-the-basics/)) on how I setup Vim to be a little more fully featured looking at the custom shortcuts. By no means is my setup the best, but there are a few neat things I've stumbled upon and my thought is that by aggregating them here someone else might find something new to add. Or maybe someone knows a better way to do something and lets me know. So let's get started!

First you'll want to start by remapping the leader key to something you're comfortable with. In case you are not familiar, the leader key is the key that you press and release before ('leads') you send a custom key command to Vim. Personally I don't have any custom commands that make sense in insert mode, so I remap it to space. By default it is /, pick your poison and let's get started.

~~~
map <Space> <Leader>
~~~

In Vim one of the keys to moving around efficiently, besides just avoiding the arrow keys, is using regex search to your advantage. There are four different types of regex in Vim that you can set by leading your regex with an escaped flag. These represent different levels of 'magic', which sounds scary, but really just controls what symbols need to be escaped when you're writing them (check out :help magic for a detailed overview). In general I prefer the very magic mode (\v), which let's you write a regex in a mostly Perl compatible way, which is probably what you're familiar with. To use that by default I just remap `/` to `/\v`. That way if I actually want one of the other modes I can always just backspace two characters and we're back to magic mode.

~~~
" default regex to very magic
nnoremap / /\v
vnoremap / /\v
~~~

After searching Vim will highlight results, which are great while you're looking for them, but are distracting if your done searching. To clear this we can run `:noh`. Since I do this so often I remap it to double tap space.

~~~
nnoremap <leader><space> :noh<cr>
~~~

If you ever turn on word wrapping you might have noticed that the j/k movements don't work with visual lines, but code lines. That's not usually what I want (consistency of visual units is more important to me personally), so I remap them to their display line counterparts gj/gk:

~~~
" Move screen lines not actual ones
nnoremap j gj
nnoremap k gk
~~~

I use bracket jumping a lot (e.g. moving between matching (), {}, etc.), by default this uses the %, but that's an awkward two key press, so I remap it to the tab key.

~~~
" Jump around brackets with tab as well
nnoremap <tab> %
vnoremap <tab> %
~~~

Buffer movement by default is a little bit awkward at first, though it gets better with familiarity. Often you just want to jump around linearly between files, so I made shortcuts for previous and next buffer (bp and bn) that line up with < > keys so that makes a bit of visual sense.

~~~
" Leader , or . (think < >) for previous/next buffer
map <leader>, :bp<CR>
map <leader>. :bn<CR>
~~~

Getting out of insert mode early and often is a key to being productive in Vim, because of that there are a lot of ways to send the escape signal (<esc>, <ctrl-c>, and <ctrl-[>), but in case any of those aren't fast enough for you, you can always remap it to some obscure combo of home rule keys. I like the kj combo, but others use jj or jk as well.

~~~
inoremap kj <Esc>
~~~

If you use Vim windows (think window *splits*) frequently, then I think it makes sense to remap creation and movement between them to something less verbose. I use leader w for vertical splits and leader e for horizontal ones. I also in the same command move the cursor there because rarely do I create a split and then do nothing with it. Movement while intuitive, takes one to many key presses for my taste, so I get rid of the `w` and just move with <ctrl-h,j,kl>.

~~~
" Jump to new split with <space>w
nnoremap <leader>w <C-w>v<C-w>l
nnoremap <leader>e <C-w>s<C-w>j

" Move around splits with ctrl movement keys
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l
~~~

Closing a buffer without closing a split is a lot harder than you would expect. The following command does some previous/next buffer magic to make it work. One limitation of this approach is that you need a few buffers to make it work, but since that's usually when you would want it, that's not too big of a deal.

~~~
map <leader>v :bp<bar>sp<bar>bn<bar>bd<CR>
~~~

In the last four I remap my arrow keys, which you may or may not be ready to give up yet. The first two are my left and right arrow keys to bring up the previous regex search or command mode run. These only save one key stroke, but are something I do often enough that I think its worthwhile, YMMV.

~~~
" Open last Vim command
nnoremap <Right> :<Up>
" Open last search result
nnoremap <Left> /\v<Up>
~~~

The next one is pretty cool, it moves the current line or selection up or down a single line based on the arrow key you use.

~~~
" Bubble single lines
nnoremap <Up> ddkP
nnoremap <Down> ddp

" Bubble multiple lines
vnoremap <Up> xkP`[V`]
vnoremap <Down> xp`[V`]
~~~

And that's it for now.
