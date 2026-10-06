# GNU Prolog

- Year: 1999
- Designer(s): Daniel Diaz
- Paradigm(s): logic, declarative
- Family: logic-declarative

## Problem It Aimed to Solve

There was a demand for a high-performance Prolog implementation that could generate native code directly, without relying on commercial implementations. Many free Prolog implementations of the time remained bytecode interpreters, making it difficult to achieve execution speeds comparable to commercial products. GNU Prolog aimed to provide a practical constraint logic programming environment, free and open, by maintaining high conformance to the ISO Prolog standard while integrating finite-domain (FD) constraint satisfaction features. A defining characteristic is that, through native compilation, it sought to achieve performance viable not just for education but also for practical, real-world use.

## Features

- Compiles Prolog source code directly into native machine code, achieving fast execution
- Highly conformant to the ISO Prolog standard, allowing portable code to be written
- Comes with a built-in finite-domain (FD) constraint solver as standard, supporting constraint logic programming out of the box
- Released as free software under the GNU/GPL, usable as an alternative to commercial implementations
- Can generate standalone executables, making it easy to distribute to environments without a Prolog implementation

## Languages It Was Influenced By

- [Prolog](prolog.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as a niche language used in a specific field, and continues to be used as a Prolog implementation for constraint satisfaction problems and educational purposes. As a free alternative to commercial Prolog implementations, it retains a loyal user base.

## Hello World

```prolog
:- initialization(main).

main :-
    write('Hello, World!'), nl.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/GNU_Prolog)
