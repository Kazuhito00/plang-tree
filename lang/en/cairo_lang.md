# Cairo

- Year: 2021
- Designer(s): Lior Goldberg, Shahar Papini, Michael Riabzev
- Paradigm(s): systems, procedural, generic, pattern-matching
- Family: domain-specific

## Problem It Aimed to Solve

On-chain computation on Ethereum was expensive in gas fees and limited in processing capacity. StarkWare sought to achieve scaling through a ZK-rollup approach: heavy computation would be performed off-chain, with only its correctness verified on-chain, using STARK proofs that make computation cheaply verifiable. Previously, however, this required manually constructing arithmetic circuits and polynomial constraints, which made development difficult. Cairo was designed as the first Turing-complete language capable of expressing provable programs, letting developers write STARK-provable programs and StarkNet smart contracts with the feel of an ordinary programming language. With Cairo 1.0, the syntax was overhauled to be influenced by Rust.

## Features

- The first Turing-complete language capable of expressing STARK-provable programs
- From Cairo 1.0 onward, it adopts Rust-like syntax and incorporates concepts such as ownership and a type system
- Has an ecosystem with tooling (testing and debugging environments) that shares affinities with Python-style tools
- Execution results are traced on the Cairo virtual machine, and STARK proofs verify the correctness of the off-chain computation
- As a smart-contract language for StarkNet, it also supports features such as generics and pattern matching

## Languages It Was Influenced By

- [Rust](rust.md)
- [Python](python.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Cairo continues to be actively developed and used as the smart-contract language for StarkNet. As a language at the core of ZK-rollup blockchain-scaling technology, it continues to evolve alongside the STARK proof ecosystem.

## Hello World

```
#[starknet::contract]
mod hello_world {
    #[storage]
    struct Storage {}

    #[external(v0)]
    fn hello(self: @ContractState) -> felt252 {
        'Hello, world!'
    }
}
```

## External Links

No Wikipedia article was found.
