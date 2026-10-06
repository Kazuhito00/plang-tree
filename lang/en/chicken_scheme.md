# Chicken Scheme

- Year: 2000
- Designer(s): Felix Winkelmann
- Paradigm(s): functional, procedural
- Family: lisp-scheme

## Problem It Aimed to Solve

Scheme suffered from large implementation differences between processing systems, giving it poor portability, and it was also difficult to integrate with existing C-language assets. Chicken Scheme tried to solve this problem through an approach of compiling Scheme programs into portable C source code. This was intended to provide a highly practical Scheme implementation that would run anywhere a C compiler was available, and that could easily link with existing C libraries.

## Features

- Adopts a Scheme-to-C approach, in which Scheme code is first converted into portable C code before compilation
- Manages procedure calls using CPS (continuation-passing style), enabling tail-call optimization and first-class continuations
- Highly interoperable with C, allowing existing C libraries to be called easily
- Has a package system called eggs, through which extension libraries can be added
- Conforms to Scheme standards such as R7RS while also providing its own extensions

## Languages It Was Influenced By

- [Scheme](scheme.md)
- [Lisp](lisp.md)
- [C](c.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It remains a currently used language, continuously used and developed by a community of developers who value its high portability and practicality. It is sometimes chosen for embedded scripting languages and tool development.

## Hello World

```scheme
(display "Hello, World!")
(newline)
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/CHICKEN_%28Scheme_implementation%29)
