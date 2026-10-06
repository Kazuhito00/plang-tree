# Standard ML

- Year: 1983
- Designer(s): Robin Milner and others
- Paradigm(s): functional
- Family: ml-functional

## Problem It Aimed to Solve

In the 1970s, Robin Milner and others at the University of Edinburgh developed ML as a meta-language for describing proof strategies for the theorem prover LCF (Logic for Computable Functions). ML was initially nothing more than a tool subordinate to LCF, but its type inference algorithm (Hindley-Milner type inference), algebraic data types, and pattern matching turned out to be extremely powerful as a general-purpose programming language in their own right. So, in the early 1980s, a movement arose to separate ML from LCF and standardize it as an independent general-purpose functional language that achieved safe static typing without requiring type annotations, and this effort was formalized as Standard ML.

## Features

- Hindley-Milner type inference guarantees static type safety while requiring almost no type annotations to be written
- Algebraic data types and pattern matching allow tree structures and compiler intermediate representations, among other things, to be expressed concisely
- A module system (structures, signatures, and functors) allows large programs to be structured
- An "impure" functional language that also has side effects such as reference cells and exceptions, setting it apart from purely functional languages
- A formal operational semantics is included in the specification itself, making the language specification mathematically rigorous

## Languages It Was Influenced By

- [Pascal](pascal.md)


## Languages It Influenced

- [OCaml](ocaml.md)
- [Haskell](haskell.md)
- [Miranda](miranda.md)
- [Elm](elm.md)
- [Coq](coq.md)
- [Scala](scala.md)
- [EuLisp](eulisp.md)
- [Nix](nix_lang.md)
- [Unison](unison.md)
- [Lean](lean.md)
- [Koka](koka.md)
- [Futhark](futhark.md)
- [Bosque](bosque.md)
- [Michelson](michelson.md)
- [ATS](ats_lang.md)


## Current Status

Standard ML itself is niche today, but its type inference, module system, and algebraic data types have been carried forward into later ML-family languages and the type systems of many modern languages. It remains a foundational language still referenced in the teaching and research of programming language theory.

## Hello World

```
print "Hello, World!\n";
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Standard_ML)
