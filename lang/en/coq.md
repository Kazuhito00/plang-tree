# Coq

- Year: 1989
- Designer(s): Thierry Coquand and others (INRIA)
- Paradigm(s): functional, logic
- Family: ml-functional

## Problem It Aimed to Solve

Mathematical theorems and software correctness cannot be completely freed of oversights and errors through human review alone. Thierry Coquand and others at INRIA, France's national research institute, developed Coq based on dependent type theory (the Calculus of Constructions) as a formal language and processing system with which a computer could mechanically verify mathematical propositions and their proofs. This made it possible to describe complex mathematical proofs and software specifications in a form that could be verified unambiguously.

## Features

- Has a rigorous type system based on dependent type theory (the Calculus of Inductive Constructions)
- Provides a set of proof-assistance commands called "tactics" for interactively constructing proofs
- Has a highly reliable architecture in which the Coq kernel independently re-verifies proof terms that have already been verified
- Implemented in OCaml, and deeply tied to the ML-family language ecosystem
- Has functionality to extract verified code into executable languages such as OCaml and Haskell

## Languages It Was Influenced By

- [Standard ML](standard_ml.md)


## Languages It Influenced

- [Idris](idris.md)
- [Agda](agda.md)
- [Dhall](dhall.md)
- [Lean](lean.md)
- [Scilla](scilla.md)


## Current Status

Coq continues to be actively used in mathematical theorem proving and formal verification of software, and stands as a leading proof assistant with a track record that includes the development of verified compilers such as CompCert.

## Hello World

```
Require Import Coq.Strings.String.
Open Scope string_scope.

Compute "Hello, World!".
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Rocq)
