# Lucid

- Year: 1976
- Designer(s): Edward A. Ashcroft, William W. Wadge
- Paradigm(s): dataflow, declarative, functional
- Family: ml-functional

## Problem It Aimed to Solve

In the sequential, von Neumann-style execution model that dominated at the time, the reliance on mutable variables and side effects made it difficult to verify programs or parallelize them. Ashcroft and Wadge devised Lucid, a dataflow language in which variables are treated as infinite data streams and programs are written as declarative equations, as an experimental exploration of a non-von-Neumann computational model. It adopted a demand-driven evaluation strategy that computed only the values actually needed, making it possible to express time and changes of state without explicit assignment. Lucid later influenced the design of dataflow languages such as SISAL, Lustre, and Pure Data.

## Features

- Treats variables as infinite streams along a time axis, with each variable representing a sequence of successive values
- Has no assignment or side effects; program structure is described through declarative equations (`where`/`is` clauses)
- Expresses temporal dependencies between values through stream operators such as `fby` (followed by), `first`, and `next`
- Adopts a demand-driven evaluation strategy, lazily computing only the values that are actually requested
- Looks superficially like a traditional functional language, but is executed internally as a dataflow graph

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

- [SISAL](sisal.md)


## Current Status

Lucid was never widely used for practical application development and remains a niche language. However, its idea of treating variables as infinite streams became the theoretical foundation for later dataflow and synchronous languages such as SISAL and Lustre, giving it lasting significance as a research language. It is still occasionally referenced in research on computational models.

## Hello World

In pLucid, a representative implementation of Lucid, a string can be printed directly using the `writes` function.

```
writes("Hello, world!\n")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Lucid_%28programming_language%29)
