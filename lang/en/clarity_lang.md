# Clarity

- Year: 2018
- Designer(s): Aaron Blankstein, Ludo Galabru
- Paradigm(s): functional, declarative
- Family: domain-specific

## Problem It Aimed to Solve

Smart contracts on Solidity/EVM suffered repeatedly from problems that only became apparent at runtime, such as reentrancy attacks and unpredictable halts due to running out of gas. Blockstack (now Hiro Systems) aimed for a language whose behavior and cost could be statically analyzed before execution, and deliberately adopted a design that gives up Turing completeness. Clarity has a Lisp-style S-expression syntax and is interpreted directly from source without compilation, leaving no room for compiler-induced bugs, so the source code itself serves as the specification of correctness. It also runs on the Stacks blockchain, which is anchored to Bitcoin, and can reference Bitcoin state directly.

## Features

- Adopts Lisp-style S-expression syntax, building programs through parenthesized function application
- Deliberately forgoes Turing completeness, so that behavior and cost can be statically analyzed before execution
- Interpreted directly from source rather than compiled, so the source code itself is the execution specification
- Runs on the Stacks blockchain and, through its Bitcoin anchor, can reference Bitcoin state directly
- Its functional, declarative notation makes side effects easy to control, which in turn makes contract safety easier to verify

## Languages It Was Influenced By

- [Lisp](lisp.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Clarity continues to be actively used as the smart-contract language of the Stacks blockchain, a Bitcoin layer. Its design philosophy of prioritizing predictability through non-Turing-completeness sets it apart from other smart-contract languages.

## Hello World

```lisp
(print "Hello, world!")
```

## External Links

No Wikipedia article was found.
