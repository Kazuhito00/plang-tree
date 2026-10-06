# PureScript

- Year: 2013
- Designer(s): Phil Freeman
- Paradigm(s): functional
- Family: ml-functional

## Problem It Aimed to Solve

Elm deliberately narrowed down its language features under the philosophy of "web development without runtime errors," which left developers seeking the expressive power of Haskell's advanced type system, such as type classes and higher-rank polymorphism, unsatisfied. Phil Freeman developed PureScript as a language that would carry over Haskell's type system into a JavaScript target environment as faithfully as possible, while still generating efficient, readable JavaScript code.

## Features

- Has a powerful type system inherited from Haskell, including type classes, higher-rank polymorphism, and algebraic data types
- Unlike Haskell, it adopts strict (eager) evaluation by default, improving compatibility with JavaScript's execution model
- The generated JavaScript code is designed with readability in mind, making it easy to combine with existing JavaScript assets
- Has its own type system extensions, such as record types via row polymorphism
- Has a frontend development ecosystem centered on dedicated UI frameworks such as Halogen

## Languages It Was Influenced By

- [Haskell](haskell.md)
- [JavaScript](javascript.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

PureScript is a niche language that continues to be used within a segment of the web development community that values static typing, and it is positioned as one option for bringing the expressive power of Haskell's type system into the JavaScript world.

## Hello World

```
module Main where

import Prelude

import Effect (Effect)
import Effect.Console (log)

main :: Effect Unit
main = log "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/PureScript)
