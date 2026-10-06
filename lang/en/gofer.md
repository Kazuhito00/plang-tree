# Gofer

- Year: 1991
- Designer(s): Mark P. Jones
- Paradigm(s): functional, declarative, pattern-matching
- Family: ml-functional

## Problem It Aimed to Solve

Gofer was developed as a lightweight implementation that could run on personal computers of the early 1990s, in order to make functional programming teachable and researchable. Full-fledged Haskell implementations of the time were too heavy to be practical on ordinary personal computers. Mark P. Jones therefore designed a subset based on language specifications roughly equivalent to Haskell 1.2, adding his own extensions such as type classes, and implemented it as a small interpreter. It is notable for aiming to provide an environment where the advanced feature of type classes could be tried out even with limited computing resources.

## Features

- Designed as a lightweight subset based on Haskell 1.2, implemented as an interpreter that could run on small machines
- Independently incorporated extensions to type classes (such as multi-parameter type classes), an advanced feature that also went on to influence the standardization of Haskell
- Includes pattern matching and lazy evaluation, following the basic programming style common to Haskell-family languages
- Provides an interactive execution environment, designed to suit learning functional programming in an educational setting
- Prioritized being small and lightweight, and was provided as an interpreter rather than a full-featured compiler implementation

## Languages It Was Influenced By

- [Haskell](haskell.md)
- [Miranda](miranda.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Gofer is classified as a historical language whose role has ended. Development was handed off to its successor implementation, Hugs, and development and use of Gofer itself have since ended.

## Hello World

Gofer follows the style common to Haskell-family languages, in which the result of evaluating the `main` function is what gets output.

```
main = putStr "Hello, World!\n"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Gofer_%28programming_language%29)
