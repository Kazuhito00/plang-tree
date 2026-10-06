# ReScript

- Year: 2020
- Designer(s): Bloomberg / community (Hongbo Zhang and others)
- Paradigm(s): functional
- Family: ml-functional

## Problem It Aimed to Solve

BuckleScript, a project that compiled OCaml to JavaScript, had succeeded in bringing OCaml's robust type system into JavaScript development, but the OCaml-derived syntax and toolchain were unfamiliar to JavaScript developers, and there were also issues with compatibility with the existing JavaScript ecosystem (npm and existing codebases). Bloomberg and community members such as Hongbo Zhang newly designed a syntax that JavaScript developers could read and write comfortably, while preserving OCaml's type system and the efficiency of the generated output code, and made it independent as ReScript.

## Features

- Provides OCaml's type inference, algebraic data types, and pattern matching through a JavaScript-like syntax
- Generates JavaScript output that is human-readable and can be combined directly with existing JS assets
- Inherits the compilation infrastructure of OCaml/BuckleScript, giving it extremely fast compile speed
- Has a binding mechanism that allows interaction with JavaScript values and APIs without type annotations
- Has an ecosystem that places importance on integration with React (descended from the earlier ReasonReact lineage)

## Languages It Was Influenced By

- [OCaml](ocaml.md)
- [JavaScript](javascript.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

ReScript is a niche language adopted by some JavaScript/web development teams that prioritize type safety, particularly within Bloomberg and React-related communities, and it is positioned as an option for bringing OCaml's type system into practical frontend development.

## Hello World

```
Js.log("Hello, World!")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/ReScript)
