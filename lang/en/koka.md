# Koka

- Year: 2012
- Designer(s): Daan Leijen
- Paradigm(s): functional, declarative
- Family: ml-functional

## Problem It Aimed to Solve

Daan Leijen of Microsoft Research focused on the problem that pure functional languages lack expressiveness in handling side effects, while imperative languages leave side effects invisible in their types, making behavior hard to predict. Koka introduced a row-polymorphic effect type system that lets a function's type signature explicitly state what side effects it may cause. It further aimed, through algebraic effect handlers, to let exception handling, state, and asynchronous processing be described in a unified and composable way. Through a reference-counting optimization called Perceus, it also aims to run functional code efficiently without a garbage collector.

## Features

- Has a row-polymorphic effect type system that lets a function's type signature explicitly state the side effects (effects) it may cause
- Is equipped with algebraic effects and handlers, letting exceptions, state, and asynchronous processing be described in a unified and composable way
- Achieves efficient memory management without a garbage collector through an advanced reference-counting optimization called Perceus
- Has a pure functional foundation, yet safely supports practical features such as local mutable state through the type system
- Has a strongly research-oriented character, experimentally incorporating cutting-edge type theory around the typing of side effects

## Languages It Was Influenced By

- [Haskell](haskell.md)
- [Standard ML](standard_ml.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Koka is currently positioned as a niche research language. It continues to draw attention in programming language theory, particularly in research on effect systems and algebraic effects, but it has not achieved widespread adoption as a practical language.

## Hello World

```koka
fun main()
  println("Hello, world!")
```

## External Links

No Wikipedia article was found.
