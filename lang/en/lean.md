# Lean

- Year: 2013
- Designer(s): Leonardo de Moura
- Paradigm(s): functional, logic, declarative
- Family: ml-functional

## Problem It Aimed to Solve

Lean was designed as a proof assistant for rigorously formalizing mathematical theorems and verifying their correctness by machine. Mathematical proofs were becoming complex enough that oversights could occur with human review alone, and formal verification by computer was in demand. Leonardo de Moura aimed to build a proof assistant based on dependent type theory, while also making the type system underlying it usable as a practical dependently typed programming language. The central idea of Lean is that the act of writing proofs and the act of writing programs can be handled in a unified way, on the same language and the same type system.

## Features

- Has a dependent type system, in which types themselves can contain values, allowing extremely precise specifications and proofs to be expressed as types
- Functions as an interactive theorem prover, letting proofs be constructed and verified interactively
- Has a mechanism called "tactics" for describing proof strategies, making automation and reuse of proofs easier
- Also used practically as a dependently typed programming language, allowing proofs and programs to be written in the same language
- Has an active community around mathematical libraries (such as mathlib), supporting large-scale projects to formalize mathematics

## Languages It Was Influenced By

- [Coq](coq.md)
- [Haskell](haskell.md)
- [Standard ML](standard_ml.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Lean is in active, widespread use. It has been adopted as one of the leading systems in mathematical formalization projects and theorem-proving research, and continues to be actively used by both mathematicians and computer scientists.

## Hello World

A Lean program writes a string to standard output via the `IO` monad.

```lean
def main : IO Unit :=
  IO.println "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Lean_%28proof_assistant%29)
