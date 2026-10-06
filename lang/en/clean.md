# Clean

- Year: 1987
- Designer(s): Rinus Plasmeijer, Marko van Eekelen
- Paradigm(s): functional
- Family: ml-functional

## Problem It Aimed to Solve

Clean was developed with the aim of preserving the mathematical beauty of pure functional programming while also achieving efficient code generation and practical handling of I/O and state. Handling side effects is a difficult problem in pure functional languages, and as an approach different from the monads adopted by Haskell, Clean introduced a uniqueness typing system. This mechanism guarantees at the type level that a value is referenced only once, aiming to allow safe destructive updates while improving execution efficiency. It began as a research language developed at Radboud University Nijmegen in the Netherlands.

## Features

- A uniqueness typing system guarantees through types that ownership of a value is restricted to a single reference, enabling safe destructive updates
- Despite being a pure functional language, it adopts a unique approach to handling I/O and mutable state without using monads
- Uses lazy evaluation by default, improving efficiency by performing only the computations that are actually needed
- Has an implementation based on graph rewriting systems, embodying the theoretical foundations of functional languages at the implementation level
- Provides a GUI toolkit (Object I/O) as standard, also supporting the development of interactive applications

## Languages It Was Influenced By

- [Miranda](miranda.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as niche (a language used in a specific field). It continues to be used mainly for research and educational purposes, and retains its role as a reference point in theoretical research on functional languages.

## Hello World

In Clean, the Start function serves as the entry point, and its value is output as the result.

```
module hello

Start :: String
Start = "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Clean_%28programming_language%29)
