# Move

- Year: 2019
- Designer(s): Sam Blackshear
- Paradigm(s): procedural, systems, generic
- Family: c-family

## Problem It Aimed to Solve

In the Libra/Diem blockchain project led by Facebook (as it was then known), bugs such as the double-spending or accidental loss of digital assets kept recurring in smart contracts that handled those assets. Move aimed to prevent such bugs at the level of the language specification itself by treating digital assets as a special type called a "resource," and enforcing through the type system the constraint that such values can be neither duplicated nor implicitly discarded. It was designed as a fundamental response to the asset-management vulnerabilities that had occurred in existing smart-contract languages such as Solidity.

## Features

- Values of the "resource" type cannot be automatically copied, and can only be passed around through explicit move semantics
- A resource must always be owned by some variable, and the type system guarantees it can never be implicitly discarded
- Recommends organizing code into modules, with only a limited set of functions exposed for operating on resources
- Static type checking and bytecode verification can detect many asset-related bugs before execution
- Supports generics, allowing the same logic to be reused across different kinds of assets

## Languages It Was Influenced By

- [Rust](rust.md)
- [OCaml](ocaml.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Actively and widely used. The Libra/Diem project itself has ended, but the Move language has been adopted by newer blockchain platforms such as Aptos and Sui, and development continues.

## Hello World

In Move modules, a common example uses the standard library's `debug` module to output a string.

```move
module 0x1::HelloWorld {
    use std::debug;

    public fun hello() {
        debug::print(&b"Hello, World!");
    }
}
```

## External Links

No Wikipedia article was found.
