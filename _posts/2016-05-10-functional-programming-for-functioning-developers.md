---
title: Functional Programming for Functioning Developers
layout: post
tags:
  - Functional Programming
---

Just to make things clear, the opposite of a functional developer is not a dysfunctional developer, in fact development that a large degree of people do would likely be considered *imperative programming* which is entirely valid for very good reasons (i will talk about this later). The distinction is that functional programs are expressed through a series of expressions and mathematical functions that are combined in various ways to transform input and output whereas imperative programs transform input and output as a set of direct instructions and subroutines.
In reality though, i don't always think of functional programming (FP) as mathematical functions as this can be inferred from intuition but thinking about code as mathematical functions can really open your eyes to a new way of approaching programmatic problems. When you take a standard UNIX operating system for example, you have a series of simple programs that perform one task, you can then pipe the output from one program into another to augment the final output, these small programs coalesce together to form larger programs using standard input and standard output. In a loose sense, this is how functional programming works.

I would like to protect myself to a certain degree by adding the caveat that i have never studied computer science at university, nor do I have a vast degree of knowledge on in the area of FP. I'm writing this article in the acceptance that my programming is flawed by human error and I strive to improve on this. From my brief foray into FP I have found that the structure and rules it applies to my code allows me to free my mind to focus on the implementation of the program rather than worrying about how to architect my program in various ways to prevent bugs. Simplicity and succinctness are what help us to reduce bugs and technical debt in programs, FP is the embodiment of simplicity and succinctness but as always simplicity is a very difficult pursuit.

## Why Functional Programming?
Having been a classical imperative OOP developer for most of my career, I have never seen or achieved the panacea of clean code that can be easily maintained and extended. Looking back on classical OOP code you need to have knowledge of the domain, which isn't always practical especially for someone like me with terminal forgetfulness (my wife will attest to that). Also there have been numerous principles and design patterns that have developed around it that if we don't adhere to then we can end up with a foot gun. You may be thinking why I'm blathering on about the negatives of OOP and wondering if it's so bad why is it so popular. OOP mixes concepts of procedural programming with fixed data structures and inheritance. In my view object oriented programming has been developed to address the shortfalls of imperative procedural programming. One of the main reasons why people use imperative programming is that the majority of computer hardware has machine code that is imperative in style, this means that writing imperative code can result in better memory management and efficiencies. Nowadays programming interpreters and compilers are highly optimised in many ways that mean that FP can compete with imperative in hardware performance so efficiencies like this are much less of an issue.

Many of issues that occur in real world programming (outside of computer science) are caused by lack of maintainability and quality, this is the crux of good software development. FP avoids side-effects, mutating data and affecting state, these characteristics mean that it is very well suited to tackle these issues by making it much easier to test and re-use code. In addition to this, the mathematical nature of FP means that code is much easier to reason about which greatly helps when modifying or extending older parts of a program. Maybe a few months from now I'll be eating my words but right now I'm very excited by functional programming and want to share that with you lot.

## Basic Concepts

### First Class Functions
If a language has first class functions it means that it treats functions like variables that can be passed as arguments and returned from other functions.
Languages that treat functions as first class citizens typically allow the use of programming in the functional style. Languages like JavaScript, Python and Lua had first class functions at their inception, other languages like C#, PHP and C++ have more recently introduced the feature of first class functions.
This is essential for functional programming because without it we could not leverage *higher order functions* (functions that operate on other functions) to perform *partial application* (populating arguments for functions without executing the function and returning a new function with less arguments).

### Pure Functions / Referential Transparency
If a function is pure then it is said to have no side effects what so ever. This means that 









- Classical design patterns fighting imperative programming, lots of patterns spawned around managing imperative
- state and control flow good point in FP
- inheritance is pretty bad
- Having been a classical OO programming for several years, i found that creating easily maintainable and testable programs is near to impossible. Classical OOP patterns and concepts always push towards all the benefits that are attained by functional programming i.e. SOLID principles : Single responsibility
