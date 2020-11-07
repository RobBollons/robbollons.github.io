---
title: Making the Most of the JavaScript Language
layout: post
tags:
  - JavaScript
---

Despite having used JavaScript in production for 8 years, I only started learning how to write JavaScript *properly* in the past 2 years and from speaking to people I think there are many developers out there have had a similar experience. It seems that a large degree of us have picked up JavaScript as a supplement through writing websites in PHP, ASP etc.. Since the popularity of NodeJS and advancements in browsers however, JavaScript has been flung to the forefront of modern front-end web development.

In this article I want to share some of the things I feel every developer should do to get the most out of JavaScript nowadays. This is by no means an exhaustive list but I've tried to prioritise it in order of what I think are the most important.

JavaScript was born from chaos and due to this there are good and bad features that made it into the language. It's hard to really understand what these are until you've learnt hard lessons from building software in other languages as well as JavaScript and then having to go back and maintain/extend said application. Here's what I've learnt through the hard lessons I've experienced.

### 1. Leverage First Class Functions
First class functions turn a programming language into Lego™ for adults. In a nutshell, having first class functions means that JavaScript can pass functions as arguments, return a function as a result of another function and assign them to variables. This means you can do some very powerful things with much less code, in particular it enables functional programming. A simple real-world(ish) example:

{% gist   first-class.js %}

On line 7 we assign an anonymous function to the `getTotal` variable. On line 8 we pass our `add` function as an argument to the `reduce` function.
This allows us to create much higher level general purpose functions that save us having to repeat ourselves (adhering to the [DRY principle](https://en.wikipedia.org/wiki/Don't_repeat_yourself)). It also allows us to do function composition, in our example we composed our `getTotal` from a `reduce` of the `add` function.

### 2. Learn the Built-in Array Methods
I'm not just talking about the obvious ones like `Array.prototype.push` or `Array.prototype.splice`. Some of the more useful ones that come to mind are:

- [Array.prototype.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array.prototype.reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

Like in the first example you can use these in function composition to produce some much more general but powerful higher level functions. Most applications are dealing with the manipulation of sets of data and knowing what's available on your tool-belt for moulding this data is invaluable.

### 3. Use ES6 (ES2015)
Arrow functions, let & const, destructuring, tail call optimisation and template strings are some of the better features of ES6. I would personally steer away from the use of the `class` keyword because this encourages the use of classical inheritance as well as constructor functions which can be more vulnerable to misuse and side-effects.

ES6 features introduce a fairly new way of writing JavaScript and warrant looking into in a bit more detail, exploring these features is perhaps a subset of this post which I might do as a follow-up next week.

Using most ES6 features in a browser/NodeJS environment (at the time of writing) require the use of a transpiler, the tool for the job is [https://babeljs.io/](https://babeljs.io/_). As primarily a web developer, I like to use babel along side browserify using a simple command to transpile my ES6 code into ES5 code like so:

{% gist 2ad4cd6e81794e0c0b489ead8de32b34 first-class.js %}

If we were to re-write the first example in ES6 it might look like this:

{% gist 2ad4cd6e81794e0c0b489ead8de32b34 es6-example.js %}

This is way more terse and way way easier on the eye, this alone should be enough to pique your interest in ES6.
One thing to bare in mind though is that some of the engine specific ES6 features might not work with transpilation.

### 4. Understand the Stumbling Blocks: Scoping, Closures and Type Coercion

#### Scoping
The best way to illustrate this is through a code example and I'm going to base it on a similar example from Douglass Crockfords book [The Good Parts](http://www.amazon.com/exec/obidos/ASIN/0596517742/wrrrldwideweb) because it does the job well.

{% gist 2ad4cd6e81794e0c0b489ead8de32b34 scope-example.js %}

You can see that where you declare your variables matters based on how the inner function is defined and how the side effect from the inner function causes the 'a' variable to change it's value. Being clear with the declaration of variables can go a great way to building more reliable software. Keep functions as pure as possible with clearly defined inputs and predictable outputs.

#### Closures
Closures are a great way to maintain private variables in JavaScript but also seem to be a source of great misunderstanding. In basic terms a closure is gives you access to an outer functions scope from an inner function (AKA lexical scope), like 'a' in the previous scoping example. That's basically it. Where it gets interesting is when you return a function from an outer function where the inner function accesses the scope of the outer function, the inner function will retain the outer functions scope past the lifetime of the outer function. That sounds really complicated so let's explain it in an example:

{% gist 2ad4cd6e81794e0c0b489ead8de32b34 closure-example.js %}

#### Type Coercion
Many a joke has been made at the expense of JavaScript due to it's seemingly nonsensical type-coercion. The best thing to do to keep all the haters at bay is to use the trusty `===` which will do a strict comparison between objects which in most cases is what you want. The only time that won't work is when you want to compare separate object literals, even if they have exactly the same properties and structure, they will never be equal because they are two completely separate objects. In this case just compare each of the properties of the objects, some libraries like [underscorejs](http://underscorejs.org/) offer ways of doing a *deep comparison* which does the aforementioned.

### 5. Avoid Classical Inheritance
This might be controversial because the status quo for the software industry is to use classical inheritance. I daresay you've written a mighty fine application using classical inheritance but if you do then you're probably not making the most out of JavaScript. You can write very lean and maintainable applications in JavaScript by using a more functional approach (have you spotted the theme yet).
An application will inevitably change and if you've used a classical inheritance pattern then when you decide you want to use a particular object in another way to service another requirement then you have to inherit all the junk that comes with it. This is particularly bad when you want to unit test and you end up having to mock a whole bunch of requirements of the base class just to test something simple higher up the inheritance chain.
It's better to throw away the blueprints and start thinking of your program in terms of data flow and objects rather than classifications. Thinking in this way can greatly improve testability, maintainability and terseness of a program.

### 6. Keep on Learning and Don't Lose Faith
Many people complain that JavaScript moves to fast and has too much churn but this is just due to people not learning the language and focusing on frameworks. JavaScript definitely has some bad things but it also has some pretty awesome things too and if you learn to embrace the positives then you can really get some good use out of it. I was predominantly a C# developer but since I've started learning JavaScript *properly* it's become my language of choice due to it's highly pliable nature. If you have the stomach then JavaScript is a great entry language into the world of functional programming, particularly when used with ReactJS. I honestly can't recommend functional programming with JavaScript enough.

I hope this article helps spread the gospel of good JavaScript and equally I hope that from JavaScripts success that other languages will look to it for inspiration and not just stick to the status quo.
