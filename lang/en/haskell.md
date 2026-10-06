# Haskell

- Year: 1990
- Designer(s): A committee (Simon Peyton Jones and others)
- Paradigm(s): functional
- Family: ml-functional

## Problem It Aimed to Solve

In the late 1980s, several research groups were independently developing purely functional languages characterized by lazy evaluation, such as Miranda, Lazy ML, and Orwell, and this made it difficult to share and compare research results. In particular, Miranda was a commercially licensed implementation, which placed constraints on free use and modification for research and educational purposes. Functional-language researchers therefore organized a committee and agreed to create an open standard language that unified the existing body of work, publishing the first language specification in 1990 and naming it Haskell.

## Features

- Purely functional, with side effects handled explicitly within the type system via monads
- Lazy evaluation (call-by-need) is the default, allowing infinite data structures to be handled naturally
- Combines ad hoc polymorphism via type classes with powerful static type inference
- Abstractions derived from category theory (Functor, Monad, Applicative, etc.) are deeply embedded in the language's culture
- GHC (the Glasgow Haskell Compiler), a highly optimized implementation, serves as the de facto standard implementation

## Languages It Was Influenced By

- [Miranda](miranda.md)
- [Standard ML](standard_ml.md)
- [Lisp](lisp.md)
- [Scheme](scheme.md)


## Languages It Influenced

- [Rust](rust.md)
- [F#](f_sharp.md)
- [Elm](elm.md)
- [PureScript](purescript.md)
- [Idris](idris.md)
- [Agda](agda.md)
- [CoffeeScript](coffeescript.md)
- [Raku](raku.md)
- [Scala](scala.md)
- [Swift](swift.md)
- [Mercury](mercury.md)
- [EuLisp](eulisp.md)
- [Fortress](fortress.md)
- [Gofer](gofer.md)
- [Curry](curry.md)
- [OpenSCAD](openscad.md)
- [Nix](nix_lang.md)
- [Dhall](dhall.md)
- [Unison](unison.md)
- [Roc](roc.md)
- [Lean](lean.md)
- [Koka](koka.md)
- [Futhark](futhark.md)
- [Austral](austral_lang.md)
- [Plutus](plutus.md)
- [Kitten](kitten_lang.md)


## Current Status

Industrial use of Haskell is limited, but concepts such as its type system and monads have spread to many other languages, and it continues to be used actively as one of the most important languages in programming language research.

## Hello World

```
main :: IO ()
main = putStrLn "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Haskell)
