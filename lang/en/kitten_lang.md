# Kitten

- Year: 2011
- Designer(s): Jon Purdy
- Paradigm(s): functional, procedural, systems
- Family: c-family

## Problem It Aimed to Solve

Kitten was developed to carry on the lineage of concatenative programming languages such as Forth, Factor, Joy, and Cat, while combining the safety of static type inference with high execution efficiency. Most existing concatenative languages were dynamically typed and relied on garbage collection, making them poorly suited to systems programming. Designer Jon Purdy aimed to achieve both concise, composable code and high performance at once, by combining a type system based on Hindley–Milner type inference, a permission system for controlling side effects, and deterministic resource management that does not depend on garbage collection.

## Features

- Adopts a stack-based concatenative paradigm in which functions are composed by consuming and producing values on a stack
- A static type system based on Hindley–Milner type inference guarantees type safety even without variable annotations
- Includes a permission system that explicitly manages side effects (such as I/O), allowing pure and effectful parts of the code to be separated
- Aims for deterministic memory and resource management that does not rely on garbage collection
- Treats function composition as a first-class operation, enabling concise and highly composable code
- Follows in the tradition of Forth, Factor, Joy, and Cat while adding the safety of static typing

## Languages It Was Influenced By

- [Forth](forth.md)
- [Factor](factor.md)
- [Haskell](haskell.md)
- [Cat](cat_lang.md)
- [Joy](joy_lang.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Kitten is positioned as a niche language and is not widely used in practice, but its unusual design as a statically typed concatenative language continues to draw attention from developers and researchers interested in programming language theory and the concatenative paradigm.

## Hello World

```
"Hello, world!" say
```

## External Links

No Wikipedia article was found.
