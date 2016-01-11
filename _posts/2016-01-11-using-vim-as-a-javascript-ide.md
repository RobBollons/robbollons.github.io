---
layout: post
title: Using Vim as a JavaScript IDE
tags:
  - Vim
  - JavaScript
---

If you're new to Vim and want to get started then try reading my other guide first: [Getting started with Vim](/2016/01/01/getting-started-with-vim/)

Here's what we're going to cover in this article:

 - Installing Plugins
 - Code Completion
 - Linting
 - Syntax Highlighting & Colour Schemes

## Installing Plugins
One of the most useful things you can do for yourself if you're going to use Vim as a development IDE is start by installing a plugin manager, we're goint to use this one throughout this guide: [Vundle](https://github.com/VundleVim/Vundle.vim). It was the first one I came across when I started with vim and it has served me well over the years. There are other alternatives that all achieve the same goal but perhaps in a slightly different way such as [Pathogen](https://github.com/tpope/vim-pathogen). In a nutshell what Vundle will do for you is save you having to download and update plugins, as well as managing the runtime path of installed scripts.

To install Vundle, first make a directory for the plugins to be kept, this is `~/.vim/bundle/` by default so: `mkdir ~/.vim/bundle/`. Then clone down the Vundle repository from git into this folder: `git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim`.
From there all you have to do is call Vundle from your .vimrc and you're good to go:

{% highlight vim linenos %}
set nocompatible " Enable all the 'improved' features of Vim.
                 " This is required for Vundle

filetype off " Also required for Vundle.
             " Prevents potential side-effects
             " from system ftdetects scripts
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'

" Other plugins go here

call vundle#end()
filetype plugin indent on " Re-enable filetype scripts
                          " with plugin indentation
{% endhighlight %}

Vundle should be up and running and doing it's thing now. Fire up vim to make sure there aren't any errors.

## Automatic Semantic Code Completion
Things are a bit better in recent days but historically code completion for JavaScript has been pretty dire in most IDEs. Vim has had it in the bag for a good couple of years now though.

### Automatic Code Completion
For this I use a plugin called '[YouCompleteMe](https://github.com/Valloric/YouCompleteMe). I'm not going to lie, YCM is a big boy and *can be* an absolute pain in the arse to install. In my humble opinion it tries to do too much. I dare say there's a chance it could be replaced by something a lot more clean and concise however for my purposes in dealing with multiple different languages it works quite well.

There's a fair amount of installation instructions so I won't repeat them here but there are three things to be aware of when installing YCM with JavaScript: firstly make sure you have NodeJS installed, secondly add `Plugin 'Valloric/YouCompleteMe'` to your .vimrc underneath the `Plugin 'VundleVim/Vundle.vim'` line and run `vim +PluginInstall +qa` in your terminal to install it, thirdly when you get to the step where you run `./install.py` make sure you pass the `--tern-completer` option. Installation instructions for YCM can be found [here](https://github.com/Valloric/YouCompleteMe). You will need change to the folder where YCM is installed which is usually `~/.vim/bundle/YouCompleteMe` when installed with Vundle.

### Code Analysis
For JavaScript code analysis we're going to use a fantastic tool called [ternjs](http://ternjs.net/), written by none other than Marijn Haverbeke - author of [Eloquent JavaScript](http://eloquentjavascript.net/). Tern is stand-alone and could be used in any editor but for our purposes we're going to use the vim wrapper [Tern for Vim](https://github.com/ternjs/tern_for_vim).

To start, add the line `Plugin 'ternjs/tern_for_vim'` to your .vimrc underneath the `Plugin 'Valloric/YouCompleteMe'` line and run `vim +PluginInstall +qa` again to install tern_for_vim. Next you need to change to the tern directory to install the tern node components: `cd ~/.vim/bundle/tern_for_vim && npm install`.

Once you get writing your project, In order for ternjs to work you will need to add a '.tern-config' file to the root of your project. You can find more information about configuring a .tern-config here: [http://ternjs.net/doc/manual.html#configuration](http://ternjs.net/doc/manual.html#configuration).

There is one thing to be aware of with tern, you need to have a global version of nodejs installed, the NVM (node version manager) version won't work apparently.


## Linting
The tool we will use for this is [Syntastic](https://github.com/scrooloose/syntastic). Syntastic is the dogs danglies and will change your JavaScript life. Again add this to your '.vimrc' underneath the other plugins we added previously and do `vim +PluginInstall +qa` again. Syntastic will use whatever linting tool you fancy: ESLint, JSHint, JSCS and show when you've been a naughty boy/girl by adding errors into the status line and/or gutter.

Syntastic recommends using these options as defaults, so put them in your .vimrc towards the end after all the Vundle stuff.

{% highlight vim linenos %}
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
{% endhighlight %}

## Syntax Highlighting & Colour Schemes
For synax highlighting there are two plugins to add to your .vimrc: `Plugin '/pangloss/vim-javascript'` and `Plugin 'mxw/vim-jsx'` for reacts jsx syntax and then run `vim +PluginInstall +qa` again to install them. By default, vim-jsx expects the extension to be '.jsx'.

What colour scheme you like is purely subjective, when i first started using vim I went through every colour scheme under the moon. One that will play well with JavaScripts syntax though is good ol' monokai: Add `Plugin 'sickill/vim-monokai'` to the plugins section in your .vimrc and do the then run the trusty `vim +PluginInstall +qa` command. Then add `colo monokai` towards the end of your .vimrc after the plugin stuff to enable the new theme.


## Wrapping Up
If the vim gods favour you then when you fire it up, everything should be fine and dandy. There's a lot more to each of these tools but hopefully this is a good starting point. If this guide has helped you in some way then i'd love to hear from you so please drop me a comment in the comments section below.
