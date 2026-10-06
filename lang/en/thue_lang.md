# Thue

- Year: 2000
- Designer(s): John Colagioia
- Paradigm(s): declarative, pattern-matching
- Family: esoteric

## Problem It Aimed to Solve

Thue arose from the idea of implementing, as-is, the system of string rewriting rules known as a semi-Thue system, devised by the mathematician Axel Thue, directly as a programming language. It has none of the usual language machinery such as control structures or variables, and was designed as a kind of "Turing tarpit" that achieves Turing completeness solely through the nondeterministic application of string substitution rules.

## Features

- Adopts the mathematician Axel Thue's semi-Thue system directly as its programming model
- A program is written as a "set of rewriting rules" and has no variables or control structures whatsoever
- When multiple rules match, one is applied nondeterministically, and Turing completeness is achieved through nothing but this repetition
- Rules are written with the left-hand and right-hand sides separated by a delimiter such as `::=`
- Input and output are also built into special rules, and there is no dedicated syntax for them as in ordinary languages
- Because it operates through pure string rewriting alone, it is frequently cited as a representative example of a "Turing tarpit"

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Thue is positioned as a niche esoteric language and is not intended for practical use. Its theoretical purity—demonstrating Turing completeness through string rewriting alone—keeps it referenced among those with an interest in the theory of computation and esoteric languages.

## Hello World

```
a::=Hello, world!

::=
a
```

## External Links

No Wikipedia article was found.
