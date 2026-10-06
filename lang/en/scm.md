# SCM

- Year: 1990
- Designer(s): Aubrey Jaffer
- Paradigm(s): functional, procedural
- Family: lisp-scheme

## Problem It Aimed to Solve

In 1990, there was a demand for a practical Scheme implementation that conformed to Scheme standards such as R4RS and R5RS while also being portable to a wide range of environments by being implemented in C. SCM adopted a design that emphasized practical usability, including a Scheme-to-C compiler and linkable modules, aiming for a robust implementation that would run on diverse platforms. What was distinctive was its attempt to simultaneously satisfy two often-conflicting requirements: standard conformance and portability. Its designer, Aubrey Jaffer, was also deeply involved in Scheme standardization efforts, and SCM was long referenced as a faithful implementation of the standard.

## Features

- Faithfully conforms to Scheme standards such as R4RS and R5RS
- Implemented in C, giving it high portability across a wide range of platforms
- Equipped with a Scheme-to-C compiler, making it easy to link the generated code with other C programs
- Accurately implements core Scheme semantics such as continuations (call/cc) and tail-call optimization
- A lightweight, simple implementation that nonetheless comes with extensions robust enough for practical use

## Languages It Was Influenced By

- [Scheme](scheme.md)
- [Lisp](lisp.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

SCM is positioned as an active language, in wide and current use. While SCM itself is not particularly well known as a major implementation, it continues to be used in some environments as a standard-conformant Scheme implementation.

## Hello World

```
(display "Hello, World!")
(newline)
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/SCM_%28Scheme_implementation%29)
