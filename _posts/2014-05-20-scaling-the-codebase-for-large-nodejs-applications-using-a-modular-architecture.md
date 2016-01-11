---
layout: post
title: Scaling the Codebase for Large NodeJS Applications Using a Modular Architecture
tags:
  - NodeJS
  - JavaScript
  - Architecture
  - Rambling
---

**UPDATE:** This article is primarily about KrakenJS, Grunt, NConf and Express and will describe specifics about scaling those solutions in a sincle process. Since writing this article I've come across much better methods for building NodeJS applications, briefly here are two high-level options:

 - Microservices - Split an application up into sub-applications that communicate typically using HTTP/REST or message queuing. Framework-type logic could be shared across applications as a seperate submodule if need be. [https://en.wikipedia.org/wiki/Microservices](https://en.wikipedia.org/wiki/Microservices)
 - Module Driven Development - Build a larger application from lots of smaller submodules, [as advocated by Substack](http://substack.net/how_I_write_modules)

___

In my ever continuing quest to improve my NodeJS skills I recently ran into a issue surrounding scaling the code base; Typically NodeJS is excellent at scaling in terms of the volume of traffic and on cloud based architectures but I've struggled to find solutions for scaling the code base itself. It seemed to me that (not through fault) most of the components we all know and love haven't been written with large scale applications in mind and I didn't want to have to resort to writing my own components that do pretty much the same thing but in a modular way, so I embarked on a mission to air out some of these issues.

So as an example, given that I want to create a site with two distinct modules - a 'main' module and an 'admin' one, my aim is to go from a flat/single level folder structure like this:
{% highlight text %}
    .
    ¦-- /application
    ¦   ¦-- /controllers
    ¦   ¦   ¦-- /main
    ¦   ¦   '-- /admin
    ¦   ¦-- /views
    ¦   ¦   ¦-- /main
    ¦   ¦   '-- /admin
    ¦   ¦-- /models
    ¦   ¦   ¦-- /main
    ¦   ¦   '-- /admin
    ¦   '-- index.js
{% endhighlight %}

to a modular/three-dimensional folder structure like this:

{% highlight text %}
    .
    ¦-- /application
    ¦  ¦-- /admin
    ¦  ¦   ¦-- /controllers
    ¦  ¦   ¦-- /views
    ¦  ¦   '-- /models
    ¦  ¦-- /main
    ¦  ¦   ¦-- /controllers
    ¦  ¦   ¦-- /views
    ¦  ¦   '-- /models
    ¦  '-- /index.js
{% endhighlight %}


I found that the single level way of doing things started to get confusing. Both the applications share very few resources and behave in different ways which makes it difficult to keep tabs on where I am when I'm working on the code. Additionally, if I wanted to have distributed teams working on each separate application at the same time, the single level approach would limit the ability to keep dependency problems at bay, e.g. if the 'main' team wanted to use a particular development process, they would have to conform to the same structure as the 'admin' team and vice versa.
The three-dimensional approach seemed like the sensible solution (assuming this was possible).

### Hosting/Mounting Sub Application as Part of the Main Application (using Express)
Using Express, it's insanely easy to get a modular structure.
Take your index.js file (or the file you use as your NodeJS entry point) and create your express app as you would normally, the only difference being that at the end of the file you simply export the app e.g.

**/application/admin/index.js**
**/application/main/index.js**
{% highlight javascript linenos %}
  use strict;

  var kraken = require('kraken-js'),
      app = require('express')(),
      options = require('./lib/spec')(app);

  app.use(kraken(options));

  module.exports = app;
{% endhighlight %}

Next job is to simply use the `app.mount(...)` feature in express to mount the sub applications to their relevant URL:

**/application/index.js**
{% highlight javascript linenos %}
  use strict;

  var port = process.env.port || 8000;
      app = require('express')(),
      main = require('./main/index'),
      admin = require('./admin/index');


  app.use('/admin', admin);
  app.use('/', main);


  app.listen(port, function (err) {
      console.log('[%s] Listening on http://localhost:%d',
                   app.settings.env, port);
  });
{% endhighlight %}

In doing this, both the 'main' and 'admin' module can exist independently of each other and can theoretically be ran completely separate from the main application. Even so, there is no reason why each of the applications couldn't reference shared resources from a common location. So far I haven't experienced any shortcomings with this but if I run into any I'll be sure to update this post.

### Building Sub Applications From a Top Level Applications Using Grunt
After a bit of Googling I came across a library called [grunt-subgrunt](https://github.com/tusbar/grunt-subgrunt, "grunt-subgrunt on github"), this seemed like it held all the answers with regards to building sub applications. Using this I could simply fire off the grunt processes defined in my sub applications from the top level application with little issue. Or so it seemed.

{% highlight javascript linenos %}
  'use strict';

  module.exports = function (grunt) {

      // Load the project's grunt tasks from a directory
      require('grunt-config-dir')(grunt, {
          configDir: require('path').resolve('tasks')
      });

      // Register group tasks
      grunt.registerTask('build', [ 'subgrunt:build' ]);
      grunt.registerTask('test', [ 'subgrunt:test' ]);
  };
{% endhighlight %}

After using it a bit I noticed cracks started to appear. It seems that the grunt tasks in the sub application were mostly ran from the context of the top level folder - which caused all sorts of problems. It seems that in order for this solution to work, I would need to define absolute paths for all the grunt sub-tasks that have the issue, not an ideal solution but I just carried on rolling with it.

### How the F*** do You Create a Hierarchical Configuration Using Nconf!?
So if I have my 'admin', 'main' and 'shared' application modules. I want my 'shared' module to store things like the database, SSL and OpenAuth config, and my sub applications to have their own independent configuration. 
In simple terms you can just have 3 separate configuration files for each application and just do `nconf.file('./shared/config/config.json');` then `nconf.get('...')` wherever you want to use a setting. 

This is fine for now, but what if I wanted the 'shared' module config to be available in the sub applications? I'm coming from an ASP.NET background so i'm used to having hierarchical Web.Config files which propagate intuitively through the hierarchy, in my opinion it would be nice to get nconf to do this but I've not yet managed to find a solution - the comment form is at the bottom ;-).

### Conclusion
Most of the issues I've had are surrounding the location from which the node process is running and relative paths. Defining paths relative to the root all the time is not a good way to go for me and I'm crying out for someone to extend KrakenJS to allow for it to handle sub-modules, perhaps I'll have a go at writing yeoman package or some sort of module that will solve the problems of creating a modular architecture. KrakenJS is great and I would definitely recommend using it as a starting point for most applications but for large modular based applications, it doesn't quite cut the mustard for me.

Ultimately I hope that some NodeJS hero will come along and post the solution to all my problems as a comment, anyone?
