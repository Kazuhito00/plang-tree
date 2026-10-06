# Plutus

- Year: 2021
- Designer(s): Manuel Chakravarty, Michael Peyton Jones, Philip Wadler
- Paradigm(s): functional
- Family: ml-functional

## Problem It Aimed to Solve

Conventional smart-contract languages typified by Solidity had a tendency toward unexpected bugs and vulnerabilities, stemming from account-based models and weak type systems. IOHK (now IOG) sought to leverage Haskell's powerful static type system and the rigor of functional programming to enable safe smart-contract authoring grounded in academic formal methods. Plutus, designed as a subset of Haskell, compiles to Plutus Core, a low-level System-Fω-based language, and combines with the eUTXO model to achieve deterministic contract execution with predictable gas costs. It began operating on the Cardano mainnet with the Alonzo hard fork in 2021.

## Features

- Designed as a subset of Haskell, inheriting its powerful static type system and purely functional nature
- Compiles to Plutus Core, a low-level language based on System Fω, which is executed on-chain
- Combined with Cardano's eUTXO model, it achieves deterministic contract execution with predictable gas costs
- Has strong affinity with academic formal methods, with a design that makes it easy to verify contract safety mathematically
- Both on-chain and off-chain code can be written in a single Haskell-based language

## Languages It Was Influenced By

- [Haskell](haskell.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Plutus is actively used as the smart-contract language of the Cardano blockchain. Since the Alonzo hard fork in 2021, it has continued to serve as the central language for smart-contract development in the Cardano ecosystem.

## Hello World

```haskell
{-# INLINABLE helloWorld #-}
helloWorld :: BuiltinString
helloWorld = "Hello, world!"
```

## External Links

No Wikipedia article was found.
