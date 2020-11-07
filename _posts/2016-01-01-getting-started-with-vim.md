---
layout: post
title: Getting Started With Vim
---

Vim is an editor that works differently to most editors, learning it's concepts is like learning a different language. If like me you're interested in it and not from a UNIX background then the chances are that you've seen someone else use it in a way that seems like they're some sort of programming wizard and it got you intrigued.
Out of the box it's simply a text editor but Vim can be made into a very sophisticated IDE for most languages with relatively minimal effort. Want intellisense to rival that of Visual Studio? No problem! But how about syntax highlighting with customizable themes? Yep, it can do that too.

## Installing
Don't be afraid. Go to the [Vim website](http://vim.org) that looks (and probably was) built in the early 90s and click that strange lime green download button on the left hand side. The install is relatively simple and probably doesn't warrant a whole section in this article. If you're Windows then you can use the EXE from the download, if you're OSX then it might be good to install MacVIM using homebrew `brew install macvim --override-system-vim`, if you're Ubuntu or Debian then just `sudo apt-get install vim`
Lots of stuff nowadays comes with Vim (or it's predecessor Vi), but install it yourself anyway because you get loads of extra good stuff.


## Running for the First Time
If you're Windows then you'll need to add the Vim install folder to your path ENV variable. If you installed Vim in a package manager on OSX or Linux then you should have access to it already.
Once you're up and running then simply open a command prompt/terminal and type 'vim', press enter and you're cooking on gas!
If this really is your first time using Vim then you're probably stuck in it now and wondering how the hell to exit it, type this to exit:

 - *:q*     - Quit

To open a file, type the following from your console:

 - vim  path/to/your/file

If the file doesn't exist then it will open a blank window which will allow you to create a new file based on what you typed. It won't create it unless you save it though.

 - *:w*    - Save

At this point, it is definitely worth while typing 'vimtutor' into your command prompt and following it through.

## VIM Basics

### Modes

##### Normal Mode (Navigation & Performing Actions)
Normal mode is the default mode. Where letters on the keyboard mean different actions and this is the heart of what makes Vim so powerful. These are case sensitive. If you are panicking and Vim is doing something that scares you then make sure caps-lock is off and mash the ESC key and you will probably be taken back to normal mode.

A good place to start with normal mode is the home row; place your index finger on the 'h' key and the rest of your fingers on the 'j', 'k' and 'l' keys respectively. These are your standard directional keys, the 'h' key moves one character left, the 'j' key moves down one line, the 'k' key moves up one line and the 'l' key moves right one character. When you start out using Vim, you can find yourself clinging to these keys and using them all the time for moving about a file, if you find yourself doing this then you aren't using Vim as productively as you could, you should consider trying to discipline yourself.

Here are some other basic normal mode key actions that come to my mind:

 - i            - **Insert** - Takes you to insert mode below the current cursor.
 - a            - Insert **After** - Takes you to insert mode after the character the cursor is on.
 - w            - Jumps the cursor ahead one **word**.
 - f<character> - Jumps the cursor **forward** to the specified character.
 - d            - **Delete** - when combined with a navigation action.
 - dd           - **Delete** a line - also copies the deleted line to a register (more on this later).

Notice the emboldened words, this is because the letter usually relates to a word that implies the action that the character represents, sort of like a mnemonic. There are lots more characters that mean different things, what helped me when I first started was using a cheat sheet. There's a whole load to choose from, just search for 'vim cheat sheet' and pick one you like.

##### Insert Mode (Typing Text)
Insert mode is probably the mode that makes the most sense to non-vim users. You can basically type text freely and it will write the equivalent of the letter you press onto the screen - like some sort of crazy computer voodoo...

##### Visual Mode (Making Selections)
Visual mode is the keyboard equivalent of dragging the mouse over a selection of text in a normal editor. When in visual mode you can still use navigation keys to move the cursor about to adjust the selection. To get into visual mode just press the 'v' key when in normal mode.

##### Last Line Mode (Issuing Commands)
This is basically like Vim's internal command line. You can get into last line mode by typing a colon ':'. From normal mode, if you press the colon key then at the bottom of the screen on the left hand side your text will start typing there. The text you enter after the colon will essentially call a function that is either built into Vim or defined in the Vimscripts you have configured. 

A couple of examples are:

 - `:colorscheme blue` - Change the colour scheme of Vim
 - `:set linebreak`    - Prevent words at the end of a line from being wrapped part way through

Pretty much anything you type in here can be put into your '.vimrc' file and kept as part of your standard Vim configuration.

## Setting Up Vim
Like many UNIX-based programs, Vim has a '.rc' file in the home directory used to store it's configuration settings, for Vim this is called '.vimrc'. As I mentioned in the previous section, you can put pretty much any 'last line command' in here.

As a starter for 10 I suggest the very first setting you put in there is `set nocompatible`, what this will do is take Vim out of Vi compatibility mode and enable some more vimmy goodness.
You could also do things like enable line numbers and set the tab spacing.

The .vimrc file is written in Vimscript, vims own internal scripting language. There's some very powerful things you can do with this and there's lots of people out there who have done some cool stuff with Vimscript. Luckily Vim has a very rich plugin ecosystem where you can tap into this fountain of power.

## Wrapping Up
There's a fair bit to go at and I'm not going to lie, learning to use Vim productively takes a lot of dedication but once you start to get the basics you can really see the power over standard text editors.

I'm going to leave it there for now, that should be enough to get cracking with.
