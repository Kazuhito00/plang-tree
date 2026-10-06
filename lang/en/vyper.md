# Vyper

- Year: 2017
- Designer(s): Vitalik Buterin
- Paradigm(s): procedural
- Family: c-family

## Problem It Aimed to Solve

The earlier smart contract language Solidity was highly expressive, but features such as inheritance, function overloading, and complex modifiers could be abused or become a breeding ground for unintended behavior, causing many vulnerabilities. Vyper aimed to adopt readable, Python-like syntax while deliberately stripping away language features, so that auditors could reliably grasp a contract's behavior and write secure smart contracts that were harder to exploit.

## Features

- Deliberately does not support features prone to misuse or vulnerabilities, such as inheritance, inline assembly, function overloading, and operator overloading
- Adopts Python-like, indentation-based syntax, emphasizing readability and ease of code review
- Mechanisms that enhance safety, such as integer overflow checking and explicit access modifiers, are built into the language specification
- Designed to prioritize predictable gas cost estimation and execution time, for example by requiring that loop bounds be statically determinable
- Compiles for the Ethereum Virtual Machine (EVM) and runs on the same blockchain platform as Solidity

## Languages It Was Influenced By

- [Python](python.md)
- [Solidity](solidity.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is actively used and in wide use today. It has not reached Solidity's level of adoption, but it continues to be used by projects that prioritize safety and by some DeFi-related contracts.

## Hello World

In a Vyper contract, a typical pattern is to store a string in a state variable and return its value from a function annotated with `@view`.

```vyper
@external
@view
def hello() -> String[13]:
    return "Hello, World!"
```

## External Links

No Wikipedia article was found.
