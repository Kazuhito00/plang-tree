# Chez Scheme

- Year: 1985
- Designer(s): R. Kent Dybvig
- Paradigm(s): functional, procedural, symbolic
- Family: lisp-scheme

## Problem It Aimed to Solve

There was a need for a fast Scheme implementation that generated high-quality native code and could withstand both research and practical use. Many Lisp/Scheme implementations of the time were interpreter-centered and had limits on execution speed and the quality of the code they generated. Chez Scheme aimed to be a Scheme implementation that met the needs of both research and practical use, by having a more efficient optimizing compiler than existing implementations while also providing an interactive, incremental development environment.

## Features

- Has a highly optimizing compiler that generates native code, giving it excellent execution speed
- Supports incremental compilation, making interactive development and trial-and-error at the REPL easy
- Realizes advanced features of the Scheme specification, such as first-class continuations and tail-call optimization, with high performance
- Strongly supports a macro system (syntax-rules and lower-level syntactic transformations)
- Also used as the underlying implementation of Racket (Racket CS), serving as the foundation for other Scheme implementations as well

## Languages It Was Influenced By

- [Scheme](scheme.md)
- [Lisp](lisp.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Chez Scheme is an actively used language, and thanks to its execution speed and the quality of its compiler, it continues to be used in both research and practical settings. Its adoption as the internal engine of other Scheme implementations also demonstrates the high technical regard it commands.

## Hello World

```scheme
(display "Hello, World!")
(newline)
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Chez_Scheme)
