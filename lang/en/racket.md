# Racket

- Year: 1995
- Designer(s): PLT (Matthias Felleisen and others)
- Paradigm(s): functional, symbolic processing
- Family: Lisp/Scheme family

## Problem It Aimed to Solve

In the 1990s, programming language researchers and educators wanted a foundation that, while based on Scheme, would let them not merely use a single language but easily create new languages themselves (domain-specific languages, or DSLs) to fit a given purpose. The PLT group (Matthias Felleisen and others) developed a highly extensible Scheme-based system that served two goals at once: a family of graduated teaching languages for programming education, and a research foundation for "language-oriented programming," the practice of designing and implementing languages themselves. It was originally named PLT Scheme, but it was renamed Racket after it grew beyond a mere Scheme implementation into an ecosystem of its own.

Underlying this was the philosophy that, rather than clinging to a single fixed language specification, a foundation that lets syntax and semantics be freely designed to fit the purpose at hand is the most useful thing for both education and research.

## Features

- The `#lang` declaration lets a single implementation switch among multiple languages (dialects)
- A powerful macro system (syntactic transformation) that makes it easy to create new language features or dedicated DSLs
- Includes a family of graduated teaching languages (for the "How to Design Programs" curriculum)
- A contracts mechanism that provides a runtime guarantee close to type checking
- A rich standard library and the DrRacket integrated development environment
- Extensions toward static typing as well, such as the typed dialect Typed Racket
- A cohesive ecosystem that includes a package manager and documentation system

## Languages It Was Influenced By

- [Scheme](scheme.md)
- [Eiffel](eiffel.md)


## Languages It Influenced

- [Clojure](clojure.md)


## Current Status

Racket is a "niche" language, but it is highly regarded for its unique role in programming language education and as a "language for making languages," and it continues to be actively used in DSL design and language research. It is also widely adopted as the teaching language for the "How to Design Programs" educational curriculum.

## Hello World

```
#lang racket
(displayln "Hello, World!")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Racket_%28programming_language%29)
