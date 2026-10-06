# OCaml

- Year: 1996
- Designer(s): Xavier Leroy and others (INRIA)
- Paradigm(s): functional, object-oriented
- Family: ml-functional

## Problem It Aimed to Solve

The ML-family languages of the 1980s (Caml, Standard ML, and others) had powerful type systems, but their execution speed was generally interpreter-like and considered unsuitable for industrial use. At the French national research institute INRIA, Xavier Leroy and colleagues wanted to implement a native-code compiler that ran at practical speed while preserving ML's type safety and the expressive power of pattern matching. They further integrated an object-oriented class mechanism for large-scale software development, and released it in 1996 as Objective Caml (later OCaml).

## Features

- Inherits Hindley-Milner type inference, achieving safe static typing with almost no type annotations
- A native-code compiler can achieve execution speed approaching that of C, let alone dynamically typed languages
- Integrates object-oriented features with classes, inheritance, and polymorphism into the core of the functional language
- A powerful module system (functors) allows large-scale programs to be structured
- Widely adopted as the implementation language for compilers and static-analysis tools

## Languages It Was Influenced By

- [Standard ML](standard_ml.md)
- [Modula-3](modula_3.md)
- [C](c.md)
- [Pascal](pascal.md)


## Languages It Influenced

- [Rust](rust.md)
- [Haxe](haxe.md)
- [F#](f_sharp.md)
- [Elm](elm.md)
- [ReScript](rescript.md)
- [Scala](scala.md)
- [Gleam](gleam.md)
- [Move](move_lang.md)
- [Grain](grain_lang.md)
- [Scilla](scilla.md)
- [ATS](ats_lang.md)


## Current Status

OCaml is actively used today as the implementation language for static-analysis tools, financial systems, and the implementations of later languages such as Rust and ReScript. It is an ML-family functional language that continues to be supported both as a foundation for implementing academic type theory and as a practical industrial-strength language.

## Hello World

```
print_endline "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/OCaml)
