# Whiley

- Year: 2010
- Designer(s): David J. Pearce
- Paradigm(s): procedural, functional, declarative
- Family: algol-pascal

## Problem It Aimed to Solve

In 2003, computer scientist Tony Hoare proposed the "verifying compiler" as a long-term challenge for programming language research: the goal of building a language implementation whose compiler could automatically verify that a program behaves correctly according to its specification. Pearce set out to meet this challenge head-on, designing a programming language from scratch that built in formal verification from the start as something to be used routinely and practically, rather than as a special add-on feature. He aimed to avoid the "hard to verify" weakness found in many existing languages, and to let the compiler automatically check contracts (preconditions, postconditions, and invariants).

## Features

- Functions and methods can specify preconditions, postconditions, and invariants, which the compiler attempts to verify automatically
- Combines procedural, functional, and declarative elements in an attempt to balance verifiability with practicality
- Draws syntax and type-system ideas from several languages, including Java, C, Python, and Rust
- Uses automated theorem-proving technology such as SMT solvers as its verification engine, mechanically checking program correctness
- Development continues mainly for research and educational purposes; large-scale commercial use remains limited

## Languages It Was Influenced By

- [Java](java.md)
- [C](c.md)
- [Python](python.md)
- [Rust](rust.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as a niche language, used in fields such as formal verification and programming language research. It has not achieved adoption as a mainstream commercial language.

## Hello World

```
function main(string[] args) -> void:
    print("Hello, World!")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Whiley_%28programming_language%29)
