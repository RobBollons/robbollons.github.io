---
layout: post
title: Dependent on Dependencies
tags:
  - Rambling
  - Architecture
---

As a programmer it's pretty fair to say that you won't go through your career without using somebody else's code at some point. Effective code reuse is the panacea for good programming languages and we should always try to write our code with re-use in mind.
In using third party code however, we are introducing a dependency into our program which needs careful consideration because we are handing over part of the responsibility of our program to something we don't always have control over. Time after time I've seen poorly managed dependencies that result in sometimes significant business problems further down the line costing an awful lot of money to repair, how can we avoid these problems and save our future selves a whole lot of trouble?

# What Problems Can Dependencies Cause?

### Deprecated features.
If a feature that you rely on is deprecated because the library maintainer has a better way of doing things then that leaves you with the problem of updating your code to reflect this.

### Change of licence to a less agreeable one.
You may start out using a version of a library that is open source, maybe the maintainer will decide to release a newer version under a chargeable commercial licence. This happened with the API framework [Service Stack](https://servicestack.net/pricing).

### Prescribe a particular way of writing code.
Some frameworks offer a unique way of writing code, if the framework falls out of favour they you get left with a big lump of disappointment and regret. This is more common with templating libraries.

### Poorly documented workings.
Nobody likes poorly documented code. Blog articles alone cannot save you.

### Poorly maintained.
It goes without saying that if a dependency is poorly maintained then you could be left with an out-dated and buggy mess.

In most cases the net result of this is that you end up with an out-dated code base due to the inability to upgrade a dependency. The longer that time passes, the harder it becomes to remove or upgrade the dependency. This is usually compounded by tightly integrated code and poor modularization.

# Is the Dependency Proprietary or Open Source?
Proprietary dependencies in my view should be avoided at all costs, particularly for long-term projects. This is because you have no idea about the state of the code, the longevity of the module or in some cases the long-term renewal costs of the licence. If you absolutely must have a proprietary dependency then make sure it is supported by contractual evidence that it will be supported for the specific needs and time-spans of your program. Proprietary dependencies usually have expensive licence costs, but you can always bet that the cost of effort needed to factor out a problem-causing dependency is much much more.
Open Source dependencies are marginally less of a risk because you usually have the option of forking the source code and modifying it yourself. The thing to be careful of is that the maintainer of the project may decide to take it in a different direction to which isn't suited to your requirements or perhaps abandon the project altogether, in this case you would need to either contribute to the project to keep it in line with your requirements or fork it and maintain it yourself. Another thing to watch out for with open source software is licensing. If the licence is MIT then it's a fairly safe to assume that you can use it in your own commercial product, GPL licences however are more complex and could, by some people, be considered to potentially 'infect' your software with it's limitations. You can read about different software licences in more human terms using this website: [https://tldrlegal.com/](https://tldrlegal.com/)

# Do I Really Need this Code?
This may sound daft but in the majority of cases a dependency is introduced just because it's popular and was mentioned in a blog post or is a simple wrapper for an unfamiliar facet and simply isn't needed at all.
To understand weather you really need to use 3rd party code or not, you should first understand your timescales; how quickly do I need to write the code and how long is the application likely to live for. If you write customer facing websites for mostly small to medium businesses then you can probably benefit from using 3rd party libraries more because the lifespan of these is rather short and the code-base is small enough that it can be re-written in a relatively short time. For web applications and larger websites then it is likely that the application will be around for a while and need to be changed on a regular basis. In this case you should treat each dependency like a venomous snake that should be handled with great care so as to avoid being bitten. Although using this wizard code might help solve your problem now think about weather it will help you in the long term and if possible think ahead to when you may have to remove it.

# Mitigating the Problems
The key to managing dependencies is through architecture. Keep your code base small through modularization and keep dependency integrations to the outer edges. A well architected project will help ease many woes (not just for dependencies at that). If your application is made up of lots of smaller modules then your dependency only affects a smaller area and is much easier to refactor and upgrade without affecting the rest of the applications code. If the integrations are at the outer edges of a module (e.g. injected from the top level) then you only have a single point where you need to change it.

# TL;DR
- Avoid Dependencies
- Keep Code Small and Modular
- Consider Licensing
