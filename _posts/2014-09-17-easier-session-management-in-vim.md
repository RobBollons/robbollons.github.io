---
layout: post
title: Easier Session Management in VIM
tags:
  - Vim
  - Snippets
  - Tooling
---
`:mksession` is a great feature in VIM. It allows you to save the state of your VIM e.g. open windows, buffers, configuration, so it can be easily loaded back in so you can pick up where you left off.

I've put together a couple of simple vimscript functions that i find usefull for managing my VIM sessions.

{% highlight vim linenos %}
" Helper function to save the session to my vim dir
function! s:SaveSession(sessionName)
  execute "mksession! ~/.vim/session/" . a:sessionName . ".vim"
endfunction

function! s:RestoreSession(sessionName)
  execute "source ~/.vim/session/" . a:sessionName . ".vim"
endfunction

" Create editor commands for the functions
command! -nargs=1 SaveSession call s:SaveSession(<f-args>)
command! -nargs=1 RestoreSession call s:RestoreSession(<f-args>)
{% endhighlight %}
<br />
{% highlight bash linenos %}
#!/bin/sh

exec vim -S "~/.vim/session/$@.vim"
{% endhighlight %}


###Usage

When running Vim, to save the session to ~/.vim/session/my-session.vim
`:SaveSession my-session`

Load the session
`:RestoreSession my-session`

To make things even easier, add the `vims` shell script to your path. This will allow you to do: `vims my-session` to launch VIM with a particular session file.
