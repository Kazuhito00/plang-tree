# Elm

- Year: 2012
- Designer(s): Evan Czaplicki
- Paradigm(s): functional
- Family: ml-functional

## Problem It Aimed to Solve

In the early 2010s, web frontend development was plagued by runtime errors stemming from JavaScript's dynamic typing (references to null or undefined, type mismatches, etc.). Evan Czaplicki, then a student at Harvard, believed as part of his thesis research that a statically typed, pure functional language should be able to eliminate many such runtime errors at compile time, and designed a new language, Elm, that compiles for web browsers.

## Features

- Sets "no runtime exceptions" as a central goal of the language design
- Designed with an emphasis on friendly, easy-to-understand compiler error messages
- Provides, as a standard, a unidirectional-data-flow UI design pattern known as The Elm Architecture (TEA)
- Purely functional; interoperation with JavaScript is done only through an explicit ports mechanism
- Enforces strict semantic versioning across the entire ecosystem to avoid breaking changes

## Languages It Was Influenced By

- [Haskell](haskell.md)
- [Standard ML](standard_ml.md)
- [OCaml](ocaml.md)
- [F#](f_sharp.md)


## Languages It Influenced

- [Gleam](gleam.md)
- [Roc](roc.md)
- [Gren](gren_lang.md)


## Current Status

Elm is a niche language with a devoted following in part of the web frontend developer community, and even as alternatives such as TypeScript have become mainstream, it stands as a proof of concept for the ideal of "web development without runtime errors."

## Hello World

```
import Html exposing (text)

main =
    text "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Elm_%28programming_language%29)
