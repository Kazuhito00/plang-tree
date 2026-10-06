# Nial

- Year: 1981
- Designer(s): Mike Jenkins
- Paradigm(s): array, functional
- Family: numeric-scientific

## Problem It Aimed to Solve

In the late 1970s, Mike Jenkins of Queen's University in Canada set out to implement Trenchard More's array theory as a practical programming language. APL at the time had powerful array operations but was weak at symbolic processing and representing nested data structures, while Lisp excelled at symbolic processing but had weak array operations. Nial was designed to combine the strengths of both, as a structured language that treats numeric, character, and symbolic data uniformly as arrays. It was intended primarily for artificial intelligence research and algorithm prototyping.

## Features

- Has a data model that treats numbers, characters, and symbols uniformly as "arrays" with no distinction between them
- Naturally expresses nested structures (nested arrays), overcoming APL's weakness in handling non-rectangular data
- Is multi-purpose, supporting both Lisp-like symbolic processing and APL-like array operations
- Composes functions through structured transformers (higher-order functions), designed for interactive trial-and-error use
- Adopts a readable, English-word-based syntax, avoiding APL's dependence on special symbols

## Languages It Was Influenced By

- [APL](apl.md)
- [Lisp](lisp.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Nial is currently positioned as a niche-use language. It continues to be used in some circles as an experimental vehicle for AI research and algorithm description, but it has not achieved widespread adoption as a general-purpose practical language.

## Hello World

In Nial, evaluating a string literal simply displays it.

```nial
'Hello, world!'
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Nial)
