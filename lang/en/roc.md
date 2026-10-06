# Roc

- Year: 2019
- Designer(s): Richard Feldman
- Paradigm(s): functional, pattern-matching
- Family: ml-functional

## Problem It Aimed to Solve

Roc (its name is derived from "Rock solid," though this is not a former name) was created to extend the good qualities of Elm — its approachable syntax, helpful compiler error messages, and robust type inference — into the domain of general-purpose programming, not limited to browser use. Elm was extremely practical, specialized for web front-end use, but there was no general-purpose language that carried forward its design philosophy. Richard Feldman aimed to create a fast language that preserved Elm-like readability and safety while being usable in a wide range of contexts, such as server-side programming, command-line tools, and scripting. Despite being a functional language, it also places emphasis on execution performance, compiling efficiently to native code and WebAssembly.

## Features

- Inherits Elm's readable syntax and helpful error messages, in which the compiler points out specific problem locations
- Purely functional, yet adopts a performance-focused compilation strategy (such as memory management via reference counting)
- Supports data modeling that makes heavy use of tagged unions and pattern matching
- Has its own module system that separates platforms and applications, letting the platform side handle integration with a host language (such as Rust or Zig)
- Can compile to native code and WebAssembly using an LLVM-based backend

## Languages It Was Influenced By

- [Elm](elm.md)
- [Haskell](haskell.md)
- [Rust](rust.md)
- [F#](f_sharp.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as a niche language used in a specific domain. It is still in development, at a pre-1.0 stage, but it is attracting attention from the functional-language community as an attempt to extend Elm's design philosophy into the general-purpose domain.

## Hello World

A Roc program begins with an `app` declaration and a platform specification, and `main` writes to standard output.

```roc
app "hello"
    packages { pf: "https://github.com/roc-lang/basic-cli/releases/download/0.7.0/bkGby8jb0tmZYsy2hg1E_B2QrCgcSTFdUpJcQwEYQoE.tar.br" }
    imports [pf.Stdout]
    provides [main] to pf

main =
    Stdout.line "Hello, World!"
```

## External Links

No Wikipedia article was found.
