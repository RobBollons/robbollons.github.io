---
title: Making the Most of ES6
layout: post
tags:
  - JavaScript
---

This is a kind of follow up to my post last week [Making the Most of the JavaScript Language]({% post_url 2016-01-15-making-the-most-of-the-javascript-language %}). I feel that it's probably worth going into some of the more useful features in a bit more detail.

I really like most of the features in ES6, there are some you'll use every day and there are also some you'll probably never use. I aim to cover the one's that you'll use more often in this article in order of their usefulness.

### 1. Let & Const
I think these two happy chappies are perhaps the most useful features of ES6 and are an excellent addition to the language. They will likely help to avoid many a human error. Let me explain:

`let` allows us to declare variables that adhere to traditional 'block scope'. This means that when a variable is declared inside curly braces, switch cases or expressions, it will only retain it's value inside that scope. This requires much less cognitive load than using `var` because we typically only have to think about the variables effect within the immediate area of use.
Here's an example of let in action (example taken from [Mozillas MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)):
{% highlight javascript linenos %}
function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // same variable!
    console.log(x);  // 71
  }
  console.log(x);  // 71
}

function letTest() {
  let x = 31;
  if (true) {
    let x = 71;  // different variable
    console.log(x);  // 71
  }
  console.log(x);  // 31
}
{% endhighlight %}

`const` allows us to declare read-only values scoped in a similar way to `let`. Let's be clear about what you can and can't do with const values:

You cant:

 - Re-assign
 - Re-declare
 - Re-use the same name for a var or let

You can:

 - Store objects
 - Store functions
 - Re-assign object properties

This is worth bearing in mind because there has been quite a lot of mis-understanding about the mutable nature of `const`. It is not immutable because you can re-assign the properties of an object.

### 2. Arrow Functions (Fat Arrows)
Arrow functions are nothing to do with declaring hash values like in PHP (typically known as a 'Fat Comma'). Arrow functions in JavaScript let us declare anonymous function expressions with much less typing on our keyboards. Weather you use functional programming or not, this results in much cleaner, terse and language-agnostic code. Here's an example that I used in my [blog post last week]({% post_url 2016-01-15-making-the-most-of-the-javascript-language %}).

{% highlight javascript linenos %}
const myArray  = [1, 2, 3, 4, 5, 6],
      add      = (a, b) => a + b,
      getTotal = (arr) => arr.reduce(add, 0);

getTotal(myArray); // => 21
{% endhighlight %}

The way you'd write the same thing in ES5 is :

{% highlight javascript linenos %}
var myArray  = [1, 2, 3, 4, 5, 6],
    add      = function (a, b) {
      return a + b;
    },
    getTotal = function (arr) {
      return arr.reduce(add, 0);
    };

getTotal(myArray); // => 21
{% endhighlight %}

Now that the `function` and `return` keywords are gone as well as the opening and closing curly braces, the code is much easier to read and understand at a glance, this is especially nice when you use anonymous functions as arguments to other methods.
The important thing to note about arrow functions is that they do not pass a different value for `this` and `arguments`. They will just use the same one as the parent scope that they were defined in.


### 3. Template Strings
If you're used to writing bash scripts then template strings in ES6 will be easy from the get-go. There are a few complicated things you can do with template string but in their simplest form you can do things like this:

{% highlight javascript linenos %}
  var sausage = 'cumberland';
  console.log(`my favourite sausage is ${sausage}`);
    // => 'my favourite sausage is cumberland'

  var a = 1, b = 2;
  console.log(`a + b = ${a + b}`);
    // => 'a + b = 3'
{% endhighlight %}

A slightly more advanced thing you can do with template string is using *tagged* template strings. This means you can apply a function to the string template to allow for more advanced manipulation. You can read more about this [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Tagged_template_strings).

### 4. Tail Call Optimisation
OK I'll admit, this is probably less useful to you if you don't use functional programming, however even so this lets us use recursion techniques without having to worry about the consequences (to a certain degree). Tail call optimization lets each call to a recursive function replace it's predecessor in the stack, meaning we don't fill up the stack and get a stack overflow, the same way that happens with a regular loop. Before ES6 each function call wouldn't be computed until each function in the chain had been registered, which results in lots of functions filling up the stack.

### Wrap Up
I may have been unkind in not including some other features in this list like [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) but personally I'm not a huge fan because I think it takes away from the readability of a program. I outright dislike the use of the `class` keyword because you can use JavaScript exceedingly well without ambiguity of classical inheritance and constructor functions - just use object composition and factory functions for better maintainability and testability.
[Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) is worthy of a notable mention for making it easier to extract data from arrays into variables.


I think it's fair to say that you can quite easily live without the features of ES6, but then again you can quite easily live without a microwave until you're used to having one. We all need our creature comforts to make life that little bit easier and programming languages are no different. As someone who cherishes simplicity though, ES6 does slightly leave an uncomfortable feeling in me that we might be over-engineering the JavaScript language to a certain degree and I think that feeling will only grow when ES7 is finalized. We can get the features we want by writing them or by using libraries written by others (e.g. modules, promises, trampolining etc..) which may not always be perfect but I like that JavaScript has such a non-conformist nature that allows us to choose how we want to use it.
