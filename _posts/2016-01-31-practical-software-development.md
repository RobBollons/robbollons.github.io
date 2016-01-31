---
title: Practical Software Development
layout: post
tags:
  - Architecture
  - Programming Psychology
---

From a programming architecture point of view I'm a little weary of all the patterns that are out there e.g. ([BDD](https://en.wikipedia.org/wiki/Behavior-driven_development), [AOP](https://en.wikipedia.org/wiki/Aspect-oriented_programming), [TDD](https://en.wikipedia.org/wiki/Test-driven_development), [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming), [DDD](https://en.wikipedia.org/wiki/Domain-driven_design)). Not that I don't think they have merit but when it comes to real-world software, I believe it's very rare that you'll find somewhere that has implemented a particular programming architecture consistently and effectively. I don't mean to sound pessimistic but I think this is just natural when a program has different influences and pressures over it's lifespan.

Typically a larger application will start out as small team hacking away with lots of ambition producing a product that can hopefully make some money, equally this could come from a new business requirement curve-ball. From that point after 1-2 years of constant development, developer turnover and changing requirements, If business growth takes a hold then things will change rapidly and the software will be stuck in a hard-to-change state with [Technical Debt](https://en.wikipedia.org/wiki/Technical_debt) and lots of pressure from the business to meet growing demands.

## The Problem
Software principles are massively complex and constantly debated because we're effectively putting rules down on paper as to how human beings will interact with information. In reality, our brains interact with information in a much less factual and logical way, specifically our bodies and brains deal with information in an organic way and as such we need to start treating software like an organic entity. Believe it or not, developers are organic and feel emotion and have opinions too, meaning we can't rely solely on logical patterns and ideas to shape how our software will work. If you look up all the [logical fallacies](https://en.wikipedia.org/wiki/List_of_fallacies) that our brains are susceptible too then you'll get an idea of the scope of the problem. It's well known in the field of social psychology that everyone can and will be influenced to stray from logic on a regular basis.

## What Can We Do?
So far I've been pretty negative about the state of the software development practice but there are things we can do to work towards making our lives and software easier. For a starters just understanding an accepting that we are human with a whole bunch of psychological fallacies to contend with and that logic is the realm of mathematics.

### Modularity
Modularity has absolutely massive benefits to practical software development.
If you write functions in a generic enough way and keep dependencies to the outer-edges then you're making a good start to modularity.
What makes modularity so powerful is the mitigation of future risk. As I eluded to previously, somewhere down the line some other poor dev is probably going to have to change what you've done. If the software is split out into smaller components then this task is so much easier and less risky. Even if your code is all in the same codebase, if it is written in a modular enough way then the code can later be split out into separate libraries.

### Automated Testing
This is so obvious and overstated but testing your software has many more benefits than just appeasing seniors. As well as making it easier for future developers to change software without breaking loads of stuff, it also encourages you to write software with less side-effects meaning it will make more sense in an isolated context without understanding a larger part of the applications domain. A common complaint is that there isn't enough time to write automated tests due to business pressures but in the long run, the tests will prove to help alleviate fire-fighting and allow more pro-activity to business pressures.

### Functional Programming
Understanding some of the functional programming basics is a good starting point to treating software in the right way. Data is pretty arbitrary and to write code that can be re-used across simple data-types and combined in different ways is a very powerful concept. Functional programming also helps sustain modularity by steam-rolling side effects and enabling code-reuse through function composition.

### Role Separation
The best starting point for dealing with a legacy application is to start by unpicking dependencies and separating thing out into their own role. This shouldn't be overly difficult or risky however that's not to say it won't.
A good example of this is to consolidate UI components and put them into a library. It's better to think of this as a multi-stage process and to set a simple goal to start with. The hardest thing about re-factoring is knowing when to stop.

### Self-Improvement
Help your fellow developer brethren by creating blog posts, mentoring, asking questions, striving to improve and just be open minded and not dogmatic. There's always someone who knows less than you do, likewise there's always someone who knows more than you so it's better to remain open-minded and temper new knowledge with experience.
