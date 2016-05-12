---
title: Functional Programming For Functioning Developers
theme: night
---
<section data-markdown>
  # Functional Programming
  ## for Functioning Developers
  Rob Bollons | [@robbollons](https://twitter.com/robbollons) | [thenorthcode.net](http://thenorthcode.net)

Note:
  * About me:
     * Started out as a Classic ASP VB programmer (Dont even know what paradigm)
     * Learned JavaScript and worte AJAX applications using subroutines
     * Suffered agony learning ASP.NET
     * Moved to OOP C# with ASP.NET
     * Got fed up of Classical Inheritance and moved to Prototypical Inheritance in JavaScript
     * Got fed up of inheritance all together and discovered the joys of hybrid FP
  * Opposite of functional programmer, imperative programmer
  * Caveat - I am not an expert on functional programming
  * Hope to cover the basics of funcitonal programming and get people interested in giving it a go
  * Take away the stigma around the mathematical complexity
</section>

<section data-markdown>
  ## What is Functional Programming?

  Wikipedia: *"In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data."*

Note:
  * FP expressed in expressions and mathematical functions.
  * Typically based on lambda calculus but this is not required - intuition
  * Combine in various ways to transform input and output
  * Imperative express programs as subroutines and direct instructions
  * Imperative is popular because machine code is imparative and so it is optimised
</section>

<section>
  <section data-markdown>
    ## Key Concepts
  </section>
  <section data-markdown>
    ## Key Concepts:
    ### Pure Functions & Referential Transparency
Note:
  * Pure functions: functions that have 0 side effects
  * referential transparency: can replace the function call with the resulting value
  * means code is much easier to test, more predicatable and cleaner
  * functions that are referentially transparent can make use of memoization
  * memoization is an optimization mechanism for caching the result of referentially transparent functions
  </section>
  <section data-markdown data-background="../images/lego-bg.jpg">
    ## Key Concepts:
    ### Function Composition
Note:
  * function composition is the true lego of programming
  * glue functions together in different ways to preduce bigger functions
  * relies on partial application and currying in order to work well
  * ramda and lodash/fp have auto-curried functions in JavaScript
  </section>
  <section data-markdown>
    ## Key Concepts:
    ### First Class & Higher Order Functions
Note:
  * First class functions are a fundamental feature for FP
  * Functions can be passed around and utilised like variables
  * Higher order functions are functions that operate on other functions
  * Higher order functions allow things such as partial application and currying
  * partial application is the process of fixing particular values of a function and returning a new function with smaller arity
  * currying is applying each argument in a function one at a time.
  </section>
  <section data-markdown>
    ## Key Concepts:
    ### Recursion
    ![Recursion](../images/fp-fat.jpg)
Note:
  * Typical iteration in FP is done using recursive functions
  * A function calls it'self untill a base conditon is reached
  * Allows for greater composition and resuse
  * Languages that utilise a stack based approach like JavaScript
  </section>
</section>

<section data-markdown>
  ## Why Functional Programming?

 ![Aliens](../images/fp-aliens.jpg)

Note:
  * OOP
    * clean maintainable code in OOP is hard
    * OOP always requires knowledge of the domain in order to maintain the code, bad for me with terminal forgetfullness
    * 
</section>

<section>
  <h2>Example</h2>
  <a class="jsbin-embed" href="http://jsbin.com/dagazeneye/embed?js,console">JS Bin on jsbin.com</a>
  <script src="http://static.jsbin.com/js/embed.min.js?3.35.12"></script>
</section>

<section>
  <section data-markdown>
    ## Functional Programming in the Wild
    ![Conspiracy](../images/fp-conspiracy.jpg)
  </section>
  <section data-markdown>
    ## Functional Programming in the Wild:
    ### UNIX
Notes:
  * UNIX tools, although not strictly functional, operate in a functional way
  * Piping
  * single input and output
  </section>
  <section data-markdown>
    ## Functional Programming in the Wild:
    ### MapReduce - Hadoop
Notes:
  * Hadoop is a framework for large distributed processing and storage
  * The way it can handle large amounts of data is through the use of MapReduce - a functional programming concept for parallel processing
  </section>
  <section data-markdown>
    ## Functional Programming in the Wild:
    ### React JS & Redux
Notes:
  * Immutability
  * State management
  * Reduce side effects
  * React - abstracts side effects of dom
  </section>
</section>

<section data-markdown>
   ## Where To Use Functional Programming?

Note:
  * Any data that is in the business layer of the application
  * Operating over collections of data
  * Where it feels right
</section>

<section data-markdown>
  ## Resources
  * [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://drboolean.gitbooks.io/mostly-adequate-guide/content/) - [@drboolean](https://twitter.com/drboolean)
  * [Professor Frisby's Classroom Coding](https://www.youtube.com/playlist?list=PLK_hdtAJ4KqX0JOs_KMAmUNTNMRYhWEaC) - [@drboolean](https://twitter.com/drboolean)
  * [Functional JavaScript Workshop](https://github.com/timoxley/functional-javascript-workshop) - [@secoif](https://twitter.com/secoif)
  * [Ramda JS](https://github.com/ramda/ramda)
  * [Lodash/FP](https://github.com/lodash/lodash/wiki/FP-Guide)
</section>

<section data-markdown>
  ## We're Recruiting JS Devs @ Wren!
  ### Please get in touch!
  [robert.bollons@wrenkitchens.com](mailto:robert.bollons@wrenkitchens.com) | [@robbollons](https://twitter.com/robbollons)
</section>

<section data-markdown>
  ## Thanks!
</section>
