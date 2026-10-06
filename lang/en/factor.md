# Factor

- Year: 2003
- Designer(s): Slava Pestov
- Paradigm(s): stack-based, functional
- Family: scripting

## Problem It Aimed to Solve

Forth's stack-based computational model runs extremely fast and with a small memory footprint, but it lacks abstraction mechanisms, modern data structures, and object-oriented facilities, leaving it with insufficient expressive power for developing large, complex software. Slava Pestov sought to revive stack-based languages as modern practical languages by preserving the concatenative programming style inherited from Forth while combining it with higher-order functions, closures, and a dynamically typed object system.

## Features

- A concatenative programming style in which functions (words) pass values along the stack one after another
- Treats higher-order functions and quotations (anonymous executable code blocks) as first-class values
- Provides an interactive development environment (REPL) and listener, making trial-and-error development easy
- Dynamically typed, yet has its own object system and generic functions
- Also incorporates Lisp-like flexibility in macros and code generation

## Languages It Was Influenced By

- [Forth](forth.md)
- [Lisp](lisp.md)
- [Self](self.md)


## Languages It Influenced

- [Kitten](kitten_lang.md)


## Current Status

Factor remains a "niche" language used mainly by research and enthusiast communities, positioned as an experimental demonstration of the concatenative programming paradigm in a modern form.

## Hello World

```factor
"Hello, World!" print
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Factor_%28programming_language%29)
