# Curry

- Year: 1995
- Designer(s): Michael Hanus, Sergio Antoy
- Paradigm(s): functional, logic, declarative
- Family: logic-declarative

## Problem It Aimed to Solve

Functional programming and logic programming had long developed as separate language lineages, and Curry arose from the academic motivation to unify the advantages of both into a single language. By creating a language that could simultaneously make use of the expressive power of functional features such as higher-order functions and lazy evaluation, together with the strengths of logic programming such as nondeterministic search, logic variables, and constraint solving, it aimed to practically explore a new paradigm called functional logic programming.

## Features

- A functional logic programming language that handles function definitions and logic-programming rules in a unified way
- Supports logic variables and nondeterministic computation, allowing Prolog-like backtracking search within a functional framework
- Has lazy evaluation inherited from Haskell and a type system resembling type classes
- Can search for solutions to equations through concurrent computation and an evaluation strategy called narrowing
- Widely referenced for academic research and for teaching programming language theory

## Languages It Was Influenced By

- [Haskell](haskell.md)
- [Prolog](prolog.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Positioned as a niche language used in a specific field. It continues to be used today in the research and teaching of programming language theory and functional logic programming.

## Hello World

```curry
main :: IO ()
main = putStrLn "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Curry_%28programming_language%29)
