# Agda

- Year: 2007
- Designer(s): Ulf Norell
- Paradigm(s): functional, logic
- Family: ml-functional

## Problem It Aimed to Solve

The idea of "propositions as types" — the Curry-Howard correspondence, which maps logical propositions to program types — was theoretically well known, but it needed to be refined into a proof assistant that could actually be used interactively for verification. Ulf Norell at Chalmers University of Technology developed Agda, based on dependent type theory, as a system that could uniformly write and verify both mathematical proofs and programs within the same language.

## Features

- Dependent types allow the type itself to express a proposition (a property to be proven)
- Supports interactive proof assistance (goal-based hole filling and type checking) in conjunction with an editor
- Its syntax, which makes heavy use of Unicode symbols, resembles mathematical notation
- Totality is required; functions that do not terminate or pattern matches that are not exhaustive are not permitted in principle
- Functions both as a pure proof assistant and as a functional programming language with dependent types

## Languages It Was Influenced By

- [Haskell](haskell.md)
- [Coq](coq.md)


## Languages It Influenced

- [Idris](idris.md)


## Current Status

Agda continues to be actively used as both a theorem proving assistant and a dependently typed programming language, in research and education on programming language theory and formal methods. Its position remains specialized toward writing and verifying mathematical proofs rather than practical general-purpose development.

## Hello World

```
module hello-world where

open import Agda.Builtin.IO using (IO)
open import Agda.Builtin.Unit using (⊤)
open import Agda.Builtin.String using (String)

postulate putStrLn : String → IO ⊤
{-# FOREIGN GHC import qualified Data.Text as T #-}
{-# COMPILE GHC putStrLn = putStrLn . T.unpack #-}

main : IO ⊤
main = putStrLn "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Agda_%28programming_language%29)
