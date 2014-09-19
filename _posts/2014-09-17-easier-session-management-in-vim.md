---
layout: post
title: Easier Session Management in VIM
---
`:mksession` is a great feature in VIM. It allows you to save the state of your VIM e.g. open windows, buffers, configuration, so it can be easily loaded back in so you can pick up where you left off.

I've put together a couple of simple vimscript functions that i find usefull for managing my VIM sessions.

{% gist 9b00bcb1e171892dc0b6 %}

###Usage

When running Vim, to save the session to ~/.vim/session/my-session.vim
`:SaveSession my-session`

Load the session
`:RestoreSession my-session`

To make things even easier, add the `vims` shell script to your path. This will allow you to do: `vims my-session` to launch VIM with a particular session file.
