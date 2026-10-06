# Grain

- Year: 2017
- Designer(s): Philip Blair, Oscar Spencer
- Paradigm(s): functional, pattern-matching
- Family: ml-functional

## Problem It Aimed to Solve

Philip Blair and Oscar Spencer took issue with the fact that features of academic functional languages such as Haskell and OCaml—powerful type systems, pattern matching, and the like—were, because of their perceived difficulty, not widely used by mainstream developers. Grain was designed to target WebAssembly as a new execution platform, while aiming to combine the elimination of runtime type errors through static typing with an approachable syntax. It aims to bring the benefits of functional languages to a wider range of developers while maintaining affinity with the JavaScript ecosystem.

## Features

- Targets WebAssembly as its compilation target, designed for fast execution both in browsers and on the server side
- Eliminates runtime type errors in advance through static typing and type inference
- Provides features derived from academic functional languages, such as pattern matching and algebraic data types, through an approachable syntax
- Adopts a syntax close to JavaScript, making it easy for existing Web developers to learn
- Enables practical program execution on WebAssembly through a lightweight runtime and garbage collection

## Languages It Was Influenced By

- [OCaml](ocaml.md)
- [JavaScript](javascript.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Grain is currently positioned as a niche-use language. Development continues as one of the experimental options among WebAssembly-targeted languages, but it has not achieved widespread adoption as a practical language.

## Hello World

```grain
print("Hello, world!")
```

## External Links

No Wikipedia article was found.
