---
layout: post
title: Running ASP.NET vNext on OSX
---

## Pre-reqs
- OSX
- Bash
- Homebrew - [http://brew.sh/](http://brew.sh/)

## 1. Installing Mono >= 3.4.1
Sadly at the time of writing, the homebrew package is still on 3.4.0 so this means that you need to compile Mono from source:

### 1.1. Installation Dependencies
Firstly on Mavericks and Mountain Lion you will need to install some dependencies but this is just a simple case of installing the following homebrew packages:

{% highlight bash %}
brew install autoconf
brew install automake
brew install libtool
{% endhighlight %}

### 1.2. Make a Folder
Create a folder in the root of your user folder called `.mono`, i put it here because when a newer version of Mono is released as a homebrew recipe, i will hopefully remember to delete the manual install and just install it via brew instead.

{% highlight bash %}
mkdir ~/.mono
{% endhighlight %}

### 1.3. Installing Mono From Github
In the folder just created, create a file called `installmono.sh` and add the following into it:

{% highlight bash %}
PREFIX=$PWD"/mono"
PATH=$PREFIX/bin:$PATH
git clone https://github.com/mono/mono.git
cd mono
./autogen.sh --prefix=$PREFIX --disable-nls
make
make install
{% endhighlight %}

This is boilerplate script taken from [http://www.mono-project.com/Compiling_Mono_on_OSX](http://www.mono-project.com/Compiling_Mono_on_OSX) which will download the Mono source from git, build it and add it to your PATH

Execute the script: `./installmono.sh`

### 1.4. Verify
Once this is done, run `mono --version` to verify that it has installed and that the version is correct (greater than or equal to version 3.4.1)

## 2. Installing the 'KRuntime'
The k runtime is basically an SDK of all the stuff needed to build and run an ASP.NET vNext app.

### 2.1. Installing Via Homebrew
Luckily there is a brew tap avaible for the K Runtime, just tap it and install it:

{% highlight bash %}
brew tap aspnet/k
brew install kvm
{% endhighlight %}

### 2.2. Verify
To verify that all is well and that the k runtime is in your PATH just run `k --version` and check that the version number is printed out to the console.



**Congratulations, you have successfully installed ASP.NET vNext on OSX!**


## 3. Creating an Application
As far as i know, the best way to get started quickly with an applicaton is [Yeoman](http://yeoman.io/) and luckily for us some forward thinking individual has already created a generator for ASP.NET vNext.

### 3.1. Installing the Generator
Yeoman runs on node and the template generators are installed via npm.

{% highlight bash %}
brew install node
npm install -g yeoman
npm install -g generator-aspnet
{% endhighlight %}

### 3.2. Generatoring the Application
This is nothing more than running `yo aspnet` in the folder you want to generate the app. Then follow the options: choose weather you want a Console, Web or MVC application, enter the name of the app. I chose to generate an MVC application.

At this point if you `ls` you will see that the application has been generated in a subfolder and there is a NuGet.config file which will point the package manager at the ASP.NET vNext package repository.

### 3.3. Running the Application
To run the app, `cd` to the subfolder that is next to the NuGet.config and run `k kestrel` in your terminal, this should start the app and serve it on [http://localhost:5000](http://localhost:5000) by default.


Assuming all went well, you should have built yourself an ASP.NET vNext website on OSX, HUZZAAH!
