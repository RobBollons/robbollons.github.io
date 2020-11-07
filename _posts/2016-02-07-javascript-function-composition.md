---
title: JavaScript Function Composition
layout: post
tags:
  - JavaScript
  - Functional Programming
---

# What is Function Composition?
Function composition is the true Lego of programming, in fact function composition is more like pie: you add meat, potatoes, gravy, seasoning, and pastry and you end up with an amazing delicious pie. Theoretically, whole programs can be built from function composition which exemplifies how powerful a technique it can be. It is often combined with a technique called [Partial Application](https://en.wikipedia.org/wiki/Partial_application) whereby you *fill out* part of the arguments of a function and then return the *partially applied* function as a new one. I will provide the examples in Native JavaScript (ES5), Native JavaScript (ES6), [Ramda](http://ramdajs.com/) and [Lodash](https://lodash.com/). Lodash and Ramda have pre-defined utilities to allow us to leverage partial application, to do the same in native JavaScript will require the use of a separate function to give us this facility, I won't go into how to do that in this article but if you're interested in how to do this, John Resig provides a good example [in his article about partial application](http://ejohn.org/blog/partial-functions-in-javascript/).
Function composition is a staple of functional programming and often explained in terms of mathematical diagrams and algebra. In this article however I will use the medium in which I can relate to best - real world examples.

In case you're still wondering, this is my simple definition of what function composition is:

***'Function Composition is the wonderful art of combining smaller functions to make bigger functions.'***

Without further a doo, let me show you some of these so-called real world examples:

## Examples
For these examples, the program we are writing is to consume a list of products and output the total price of the products like you would when showing a baskets total.

Example product (scotch whisky) data:

{% gist 22b14c87e75f7c1fccac3f83e9906fd5 example-data.js %}

### Native JavaScript (ES5)

{% gist 22b14c87e75f7c1fccac3f83e9906fd5 es5-example.js %}

### Native JavaScript (ES6)

{% gist 22b14c87e75f7c1fccac3f83e9906fd5 es6-example.js %}

### Lodash < v4

{% gist 22b14c87e75f7c1fccac3f83e9906fd5 lodas-pre-v4.js %}

### Ramda/Lodash-fp

{% gist 22b14c87e75f7c1fccac3f83e9906fd5 ramda-lodash-fp.js %}

## Summary
Ramda and lodash-fp curry all their functions automatically and have a dedicated 'compose' function which means that combining functions is incredibly elegant and means that your code reads very well. Lodash < v4 gets us part the way there but we have to partially apply our functions manually, it does have built-in functions for us to partially apply methods though which is still good. You can see how ES6 is a massive improvement on ES5 for function composition due to the use of lamda expressions, lambdas make it much easier to see what's going on for simple functions. One thing that is true for all the examples above is that function composition is pretty damn good. For anyone coming along to change your code it is much easier to see what is going on and without side-effects or unnecessary logic, our code is much easier to test as well.

I hope the lack of comments in the above examples is OK, I was hoping that due to the simple nature of the individual functions that it would be easy enough to follow for different levels of programming knowledge, If this is not the case then please get in touch.

One thing I could recommend as a take-away from this article is to try writing some code without using for loops or if statements and glue these functions together to make bigger functions. I promise you will feel all the more better for it.
