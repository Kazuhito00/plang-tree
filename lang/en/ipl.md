# IPL

- Year: 1956
- Designer(s): Allen Newell, Cliff Shaw, Herbert A. Simon
- Paradigm(s): procedural, symbolic
- Family: lisp-scheme

## Problem It Aimed to Solve

In 1956, there was an ambitious goal of having computers perform symbolic processing and list manipulation to achieve artificial-intelligence-like problem solving, such as theorem proving. The designers of IPL (Information Processing Language) sought to realize, at a level of description close to assembly language, capabilities that existing numerically-focused methods could not handle — dynamic memory allocation, list structures, recursion, and passing functions as arguments. "Logic Theorist," actually developed using IPL, is known as a pioneer of automated theorem proving by computer and became one of the starting points of artificial intelligence research. Its greatest significance lies in having pioneered, at a remarkably advanced level for its time, the concepts of symbolic processing and list structures.

## Features

- Placed list structures at the center of data representation, enabling dynamic memory allocation
- Adopted the higher-order-function-like idea of passing functions as arguments at an early stage
- Could handle recursive processing, but this had to be written using low-level notation close to assembly language
- Adopted a stack-based execution model, with control performed via push-down lists
- Designed with early applications of artificial intelligence research, such as symbolic processing and theorem proving, in mind

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as historical (a language whose historical role has ended). IPL itself is no longer used, but as the earliest language that served as the starting point of artificial intelligence research, it holds an important place in the history of computer science.

## Hello World

IPL is a language that describes list operations using low-level notation close to assembly language, and it has no string-output syntax in the modern sense. The following illustrates the idea of displaying a message using a primitive output instruction.

```
        1 PRINT     H0 E0 L0 L0 O0 SP0 W0 O0 R0 L0 D0
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Information_Processing_Language)
