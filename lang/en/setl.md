# SETL

- Year: 1969
- Designer(s): Jacob T. Schwartz, Robert Dewar, E. Schonberg
- Paradigm(s): procedural, object-oriented, declarative
- Family: ml-functional

## Problem It Aimed to Solve

In the late 1960s, Jack Schwartz and colleagues at NYU believed that creating a very high-level language in which set-theoretic mathematical notation could be executed directly as a program would make algorithm prototyping and specification writing much easier. SETL provided sets, tuples, and their operations (union, set-builder notation, power sets, and so on) as first-class elements of the language, allowing algorithms to be written at a high level while hiding implementation details. It was used, among other things, in the implementation of a highly reliable Ada compiler (NYU Ada/ED), and its influence extended to later language design as well—for example, Lambert Meertens carried SETL's set-oriented ideas into ABC, which in turn influenced Python.

## Features

- Has sets and tuples as first-class data types, with built-in support for set operations such as union, intersection, and power set
- Allows collections to be defined concisely using notation equivalent to mathematical set-builder (set-former) notation
- Dynamically typed, determining the types of variables and elements at run time, which allows collections with mixed element types to be expressed naturally
- Hides the implementation details of concrete data structures (such as arrays and hash tables), allowing algorithms to be described at a high level of abstraction
- Has a track record of being used to prototype and implement highly reliable software, such as the NYU Ada/ED compiler

## Languages It Was Influenced By

- [ALGOL 60](algol_60.md)


## Languages It Influenced

- [ABC](abc.md)


## Current Status

SETL is positioned as a historical language whose role has largely ended, and it is essentially unused in new development today. However, its set-theoretic ideas were carried into the ABC language by Lambert Meertens, indirectly leaving their mark on the design of features such as Python's comprehensions, and it is remembered as an important milestone in the history of language design.

## Hello World

SETL has a relatively readable syntax and can output a string with the `print` procedure.

```
print("Hello, world!");
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/SETL)
