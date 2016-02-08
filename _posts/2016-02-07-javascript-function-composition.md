---
title: JavaScript Function Composition
layout: post
tags:
  - JavaScript
  - Functional Programming
---

# What is Function Composition?
Function composition is the true lego of programming, in fact function composition is more like pie: you add meat, potatos, gravy, seasoning, and pastry and you end up with an amazing delicious pie. Theoretically, whole programs can be built from function composition which exemplifies how powerful a technique it can be. It is often combined with a technique called [Partial Application](https://en.wikipedia.org/wiki/Partial_application) whereby you *fill out* part of the arguments of a function and then return the *partially applied* function as a new one. I will provide the examples in Native JavaScript (ES5), Native JavaScript (ES6), [Ramda](http://ramdajs.com/) and [Lodash](https://lodash.com/). Lodash and Ramda have pre-defined utilities to allow us to leverage partial application, to do the same in native JavaScript will require the use of a seperate function to give us this facility, I won't go into how to do that in this article but if you're interested in how to do this, John Resig provides a good example [in his article about partial application](http://ejohn.org/blog/partial-functions-in-javascript/).
Function composition is a staple of functional programming and often explained in terms of mathematical diagrams and algebra. In this article however I will use the medium in which I can relate to best - real world examples.

Incase you're still wondering, this is my simple definition of what function composition is:

***'Function Composition is the wonderful art of combining smaller functions to make bigger functions.'***

Without further a doo, let me show you some of these so-called real world examples:

## Examples
For these examples, the program we are writing is to consume a list of products and output the total price of the products like you would when showing a baskets total.

Example product (scotch whisky) data:
{% highlight javascript linenos %}
  var products = {
    'whisky': [
      {
        'name': 'Ardberg Uigeadail',
        'price': 54.35,
        'currency': 'GBP'
      },
      {
        'name': 'Laphroaig Quarter Cask',
        'price': 39.95,
        'currency': 'GBP'
      },
      {
        'name': 'Klichoman Machir Bay',
        'price': 42.25,
        'currency': 'GBP'
      },
      {
        'name': 'Talisker Storm',
        'price': 39.85,
        'currency': 'GBP'
      }
    ]
  };
{% endhighlight %}

### Native JavaScript (ES5)
{% highlight javascript linenos %}
var add = function(a, b) { return a + b; };
var sum = function (arr) { return arr.reduce(add, 0) };
var getProperty = function(obj, propName) { return obj[propName]; };

var getWhisky = function (obj) { return getProperty(obj, 'whisky' };
var getPrices = function (arr) {
  return arr.map(function (a) {
    return getProperty(a, 'price');
  });
};

var getTotalWhiskyPrice = function (obj) {
  return sum(getPrices(getWhisky(obj)));
};

getTotalWhiskyPrice(products); // => 176.4

{% endhighlight %}

### Native JavaScript (ES6)
{% highlight javascript linenos %}
let add = (a, b) => a + b;
let sum = (arr) => arr.reduce(add, 0);
let getProperty = (obj, propName) => obj[propName];

let getWhisky = (obj) => getProperty(obj, 'whisky');
let getPrices = (arr) => arr.map((a) => getProperty(a, 'price'));

let getTotalWhiskyPrice = (obj) => sum(getPrices(getWhisky(obj));

getTotalWhiskyPrice(products); // => 176.4

{% endhighlight %}

### Lodash < v3
{% highlight javascript linenos %}
var _ = require('lodash');

var getWhisky = _.partialRight(_.get, 'whisky');
var getPrices = _.partialRight(_.map, 'price');

var getTotalWhiskyPrice = _.flowRight(_.sum,
                                       getPrices,
                                       getWhisky);

getTotalWhiskyPrice(products); // => 176.4

{% endhighlight %}

### Ramda/Lodash-fp
{% highlight javascript linenos %}
var _ = require('ramda'); 
// var _ = require('lodash/fp');

var getWhisky = _.prop('whisky');
var getPrices = _.map(_.prop('price')); // Using Ramda
//var getPrices = _.map('price'); // Using lodash-fp

var getTotalwhiskyPrice = _.compose(_.sum,
                                     getPrices,
                                     getWhisky);

getTotalWhiskyPrice(products); // => 176.4

{% endhighlight %}


## Summary
Ramda and lodash-fp curry all their functions automatically and have a dedicated 'compose' function which means that combining functions is incridibly elegant and means that your code reads very well. Lodash < v4 gets us part the way there but we have to partially apply our functions manually, it does have built-in functions for us to partially apply methods though which is still good. You can see how ES6 is a massive improvement on ES5 for function composition due to the use of lamda expressions, lambdas make it much easier to see what's going on for simple functions. One thing that is true for all the examples above is that function composition is pretty damn good. For anyone coming along to change your code it is much easier to see what is going on and without side-effects or un-necesesary logic, our code is much easier to test as well.

I hope the lack of comments in the above examples is OK, I was hopoing that due to the simple nature of the individual functions that it would be easy enough to follow for different levels of programming knowledge, If this is not the case then please get in touch.

One thing I could recommend as a take-away from this article is to try writing some code without using for loops or if statements and glue these functions together to make bigger functions. I promise you will feel all the more better for it.
