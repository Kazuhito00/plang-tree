# Idris

- Year: 2009
- Designer(s): Edwin Brady
- Paradigm(s): functional
- Family: ml-functional

## Problem It Aimed to Solve

Dependent types (types that depend on values) had been studied in proof assistants such as Agda and Coq, but these were primarily aimed at writing mathematical proofs and did not place much emphasis on usability as practical, general-purpose programming languages. Edwin Brady wanted to bring the benefits of dependent types—such as the ability to more precisely verify things like array lengths or protocol states at compile time—to users of practical, general-purpose programming languages rather than only to proof assistants, and designed Idris with this goal.

## Features

- Dependent types allow a function's type to express constraints that depend on values, such as "a vector of length n"
- Haskell-like syntax and type classes make it approachable for Haskell programmers
- Totality checking verifies that a function is guaranteed to terminate and handles all cases
- Practical features such as an effects system that tracks side effects in the type system and the ability to switch backends
- Explicitly oriented toward providing dependent types as a general-purpose programming language rather than a proof assistant

## Languages It Was Influenced By

- [Haskell](haskell.md)
- [Agda](agda.md)
- [Coq](coq.md)
- [F#](f_sharp.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Idris continues to be used by a small number of practitioners as a research and experimental niche language exploring the practical application of dependent-type programming. As mainstream languages such as Rust and Swift partially adopt dependent-type-like features, Idris is sometimes referenced as an early precedent.

## Hello World

```
module Main

main : IO ()
main = putStrLn "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Idris_%28programming_language%29)
