---
layout: post
title: Why Should I Use Somebody Else's Code?
tags:
  - Rambling
---

As a programmer it's pretty fair to say that you won't go through your career without using somebody else's code at some point. Effective code reuse is the panacea for good programing languages and we should always try to write our code with re-use in mind.
In using third party code however, we are introducing a dependency into our program which needs careful consideration because we are handing over part of the responsibility of our program to something we don't have control over. Time after time I've seen poorly managed dependencies that result in sometimes significant business problems further down the line costing an awful lot of money to repair.

Here are some things to consider when using third party code:

# Is the Dependency Proprietary or Open Source
Proprietary dependencies should be avoided at all costs, particularly for long-term projects. This is because you have no idea about the state of the code, the longevity of the module or the long-term costs of the licence. If you absolutely must have a proprietary dependency then make sure it is supported by contractual evidence that it will be supported for the specific needs and time-spans of your program.
Open Source dependencies are less of a risk because you usually have the option of forking the source code and modifying it yourself. The thing to be careful of is that the maintainer of the project may decide to take the project in a different direction to which isn't suited to your requirements, in this case you would need to either contribute to the project to keep it in line with your requirements or fork it and maintain it yourself. The other risk is that the project will get abandoned

# Do I Really Need this Code?
This may sound daft but in the majority of cases a dependency is introduced just because it's popular or does something that we don't immediately understand.
To answer this question you need to understand your timescales; how quickly do I need to write the code and how long is the application likely to live for. If you write customer facing websites for mostly small to medium businesses then you can probably benefit from using 3rd party libraries more because the lifespan of these is rather short and the code-base is small enough that it can be re-written in a relatively short time. For web applications and larger websites then it is likely that the application will be around for a while and need to be changed on a regular basis. In this case 

