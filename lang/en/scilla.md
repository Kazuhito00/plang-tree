# Scilla

- Year: 2018
- Designer(s): Ilya Sergey, Amrit Kumar, Aquinas Hobor
- Paradigm(s): functional, event-driven
- Family: domain-specific

## Problem It Aimed to Solve

Ethereum smart contracts repeatedly suffered from vulnerabilities rooted in language design, such as integer overflow and reentrancy attacks. Scilla, developed for the Zilliqa blockchain, was designed as an intermediate-level language that eliminates such vulnerabilities at the language level and is amenable to formal verification. By modeling contracts as automata that perform state transitions, and by clearly separating the side-effect-free pure computation part from the message-based communication part, it enables the verification of formal semantics using the Coq proof assistant. It was developed starting from academic research (Sergey, Kumar, and Hobor, 2018), but by 2025 its GitHub repository had been archived and development had scaled back.

## Features

- Models contracts as automata that perform state transitions
- Clearly separates the side-effect-free pure computation part from the message-based communication part at the language level
- Its formal semantics are defined and verified using the Coq proof assistant
- Eliminates typical vulnerabilities such as integer overflow and reentrancy attacks through language design
- As an intermediate-level language, it is designed with an emphasis on affinity with static analysis and compiler verification

## Languages It Was Influenced By

- [OCaml](ocaml.md)
- [Coq](coq.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Scilla was developed as the smart-contract language of the Zilliqa blockchain, but by 2025 its GitHub repository had been archived and development had effectively scaled back. While its design philosophy emphasizing formal verification retains academic significance, in practical operation it is winding down the role it once played.

## Hello World

```
contract HelloWorld

transition sayHello()
  msg = "Hello, world!";
  e = { _eventname: "Hello"; message: msg };
  event e
end
```

## External Links

No Wikipedia article was found.
