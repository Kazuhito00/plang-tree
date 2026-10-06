# Hope

- Year: 1980
- Designer(s): Rod Burstall, David MacQueen, Don Sannella
- Paradigm(s): functional, pattern-matching
- Family: ml-functional

## Problem It Aimed to Solve

In 1980, there was a demand for a simple functional language that could eliminate side effects such as assignment statements and allow programs to be written and manipulated in a mathematically clear way. The Hope development team at the University of Edinburgh aimed to create an experimental language that introduced the new concepts of function definition through pattern matching and algebraic data types, equipped with a strong type system capable of handling polymorphism and overloading. Unlike existing dynamically typed functional languages such as Lisp, it was distinctive in trying to combine static typing with mathematical clarity. There was also an ambition to anticipate ideas that would later be seen in Miranda and Haskell.

## Features

- Allows functions to be defined as multiple equations (clauses) through pattern matching
- Introduces algebraic data types, enabling structured data to be represented in a type-safe way
- Has a strong static type system with polymorphism (parametric polymorphism)
- Has no side effects such as assignment statements, aiming for pure functional programming
- Adopts a declarative programming style that includes ideas related to lazy evaluation

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Hope is positioned as historical (a language whose historical role has ended). Hope itself is no longer used in practice, but the concepts of pattern matching and algebraic data types have become standard features of modern functional languages.

## Hello World

```
--- hello : unit -> unit;
hello() <= write("Hello, World!\n");
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Hope_%28programming_language%29)
