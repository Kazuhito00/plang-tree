# Dylan

- Year: 1992
- Designer(s): Apple ALS Research Laboratory
- Paradigm(s): functional, object-oriented
- Family: Lisp/Scheme family

## Problem It Aimed to Solve

In the early 1990s, Apple was searching for a language for next-generation devices such as the Newton that would harness Lisp's powerful expressive power (dynamic typing, macros, garbage collection) while also being accessible to ordinary programmers unfamiliar with the heavily parenthesized S-expression syntax. Dylan was thus designed as a dynamic language that built on the semantics of Scheme and Common Lisp while adopting readable, ALGOL-like infix notation.

It originally began as a prototype using parenthesized S-expression syntax (Prefix Dylan), but in the end, considering market acceptance, infix notation (Infix Dylan) was adopted.

## Features

- Integrates Scheme-derived lexical scoping with the object system and multimethods derived from Common Lisp (CLOS)
- Adopts Algol-like infix notation rather than S-expressions, emphasizing readability
- A pioneering attempt at gradual typing that combines static and dynamic typing
- Emphasizes dividing and managing code through a module system
- High productivity thanks to garbage collection and dynamic typing
- Emphasizes an interactive development cycle through incremental compilation
- Flexible definition of behavior between objects via multimethods (multiple dispatch)

## Languages It Was Influenced By

- [Scheme](scheme.md)
- [Common Lisp](common_lisp.md)


## Languages It Influenced

- [Julia](julia.md)
- [NewtonScript](newtonscript.md)


## Current Status

Dylan is a "historical" language. Although developed for the Apple Newton, it never achieved commercial adoption, and today it is referenced mainly as an experimental attempt in the history of language design. Its approach of gradually incorporating elements of static typing into a dynamic language is sometimes re-evaluated as having anticipated later discussions of gradual typing.

## Hello World

```
Module: hello

format-out("Hello, World!\n");
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Dylan_%28programming_language%29)
