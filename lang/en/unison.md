# Unison

- Year: 2015
- Designer(s): Paul Chiusano, Rúnar Bjarnason
- Paradigm(s): functional, concurrent
- Family: ml-functional

## Problem It Aimed to Solve

Unison is a statically typed functional language that started from the idea of computing a hash value from the content of code itself and using that hash to uniquely identify the code. In conventional languages, the problem of "code that should work but doesn't" frequently arose from dependency conflicts, rebuilds, and subtle differences between development environments. Paul Chiusano and Rúnar Bjarnason reasoned that if functions and their definitions could be uniquely identified by a hash, then name collisions and version inconsistencies would become impossible in principle. There was also a further aim: using this content-addressed representation of code would make it possible to move and execute code, and computation itself, seamlessly across a distributed system without regard to location.

## Features

- Function definitions are identified and stored not by the text of their source code but by a hash derived from their content
- Identical implementations have the same hash regardless of name, so renaming and duplication cannot occur in principle
- Treats distributed computation as a first-class concept, allowing operations such as sending hash-identified code to a remote node for execution
- Has a static type system, with a feel close to Haskell-style type inference and pattern matching
- Has a distinctive development experience in which code is manipulated not by editing source files in an ordinary text editor but through a dedicated codebase management tool (the Unison Codebase Manager)

## Languages It Was Influenced By

- [Haskell](haskell.md)
- [Standard ML](standard_ml.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as a niche language used in a specific field. It is adopted in experimental projects, mainly among a developer community interested in the advanced ideas of content-addressed code and distributed computation.

## Hello World

In Unison, `printLine` is used to write a string to standard output.

```unison
main : '{IO, Exception} ()
main _ = printLine "Hello, World!"
```

## External Links

No Wikipedia article was found.
