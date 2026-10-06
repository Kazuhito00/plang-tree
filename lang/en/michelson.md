# Michelson

- Year: 2018
- Designer(s): Arthur Breitman, Kathleen Breitman
- Paradigm(s): functional, procedural
- Family: domain-specific

## Problem It Aimed to Solve

As typified by the 2016 DAO incident, bugs in smart contracts could lead to irrecoverable financial losses. Tezos needed a smart-contract language that was amenable to formal verification in order to reduce such risks. Michelson was designed by drawing ideas from several language lineages—Forth, Scheme, ML, and Cat—as a stack-based, side-effect-free, purely functional, and statically typed language. Because typed programs are verified before execution, runtime errors caused by things like stack-shape mismatches cannot occur in principle.

## Features

- Adopts a stack-based computation model, in which instructions build up a program by manipulating values on the stack
- Statically typed, with a program's stack shape verified before execution, so no type-related runtime errors can occur
- Follows a purely functional, side-effect-free design philosophy that pairs well with formal verification
- Incorporates stack manipulation derived from Forth, notions of types and functions derived from Scheme and ML, and compositional design derived from Cat
- Functions as the execution language for Tezos smart contracts, positioned as a low-level compilation and verification target

## Languages It Was Influenced By

- [Forth](forth.md)
- [Scheme](scheme.md)
- [Standard ML](standard_ml.md)
- [Cat](cat_lang.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Michelson continues to run actively as the smart-contract execution language of the Tezos blockchain. Because its design is amenable to formal verification, it is also used as a compilation target for higher-level languages such as LIGO and SmartPy.

## Hello World

```
parameter unit;
storage string;
code { CDR ; PUSH string "Hello, world!" ; NIL operation ; PAIR }
```

## External Links

No Wikipedia article was found.
