# Dhall

- Year: 2016
- Designer(s): Gabriel Gonzalez
- Paradigm(s): functional, declarative
- Family: domain-specific

## Problem It Aimed to Solve

Dhall was designed to avoid both the content duplication that tends to occur when writing configuration files in YAML or JSON, and the complexity and opacity that results from bringing in template engines or scripts to solve that duplication. There are many situations where one wants "a little function" or "a variable" in a configuration file, but bringing a general-purpose programming language into that context creates the risk of infinite loops and unexpected side effects. Gabriel Gonzalez set out to achieve safe "programmable configuration" by creating a configuration language that has functions and a type system, while deliberately excluding Turing completeness, guaranteeing that every expression is "total" — that it always finishes evaluating in finite time.

## Features

- Has functions, types, records, unions, and the like, but is not Turing complete; all expressions are guaranteed to terminate
- Has a static type system that can detect structural errors in configuration files before evaluation
- Its import mechanism lets expressions be pulled in from external files or URLs, enabling reuse and deduplication of configuration
- Has a standardized normal form and a unique hash, allowing the integrity of imported content to be verified via the hash
- Can export to YAML, JSON, or other configuration formats such as Nix

## Languages It Was Influenced By

- [Haskell](haskell.md)
- [Coq](coq.md)
- [Nix](nix_lang.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Dhall is positioned as a niche language used in specific fields. There are cases of adoption in safety-focused configuration management and in writing large-scale configuration files with complex dependencies, but it is hard to say that it has achieved broad, general popularity.

## Hello World

A Dhall expression becomes a value when evaluated. A string literal by itself is a valid Dhall program.

```dhall
"Hello, World!"
```

## External Links

No Wikipedia article was found.
