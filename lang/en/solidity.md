# Solidity

- Year: 2014
- Designer(s): Gavin Wood and others (Ethereum)
- Paradigm(s): object-oriented, procedural
- Family: c-family

## Problem It Aimed to Solve

Ethereum, conceived in 2013, aimed to be more than just a cryptocurrency—it sought to be a general-purpose platform for running "smart contracts" that automatically execute assets and contractual terms on a blockchain. However, programs on a blockchain, once deployed, are extremely difficult to modify, and must reproduce exactly the same deterministic result across countless nodes on the network—a constraint far stricter than anything in conventional software development. Gavin Wood and others adopted a syntax familiar to existing developers, drawing on C++, JavaScript, and Python, while designing Solidity as a language for writing contracts safely and deterministically on the Ethereum Virtual Machine (EVM).

## Features

- A contract-oriented syntax in which code (functions) and state (storage) are bundled together into a single unit called a "contract"
- Compiles to EVM bytecode, reproducing identical execution results across every node on the blockchain
- Because it involves the manipulation of funds, security vulnerabilities such as integer overflow and reentrancy attacks receive particular emphasis
- Has a concept of computational cost called "gas," a mechanism that economically discourages excessive computation such as infinite loops
- A deployed contract generally cannot be modified or deleted, which demands careful verification beforehand

## Languages It Was Influenced By

- [C++](c_plus_plus.md)
- [JavaScript](javascript.md)
- [Python](python.md)


## Languages It Influenced

- [Vyper](vyper.md)


## Current Status

Solidity remains the de facto standard language for smart contract development on Ethereum and compatible blockchains (status: active), with the majority of blockchain applications such as DeFi (decentralized finance) and NFTs written in Solidity.

## Hello World

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    function greet() public pure returns (string memory) {
        return "Hello, World!";
    }
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Solidity)
