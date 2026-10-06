# CPL

- Year: 1963
- Designer(s): Christopher Strachey, David Barron
- Paradigm(s): procedural, functional
- Family: c-family

## Problem It Aimed to Solve

ALGOL 60 had beautiful syntax and a rigorous specification, but its design was too specialized for scientific and technical computing to adequately cover industrial process control, business data processing, or even low-level system description. Strachey and Barron tried to build on top of ALGOL 60 to create a general-purpose language (the Combined Programming Language, or CPL for short) capable of handling every use case. However, in trying to cram far too many features into a single language — from high-level abstraction down to low-level bit manipulation — the specification became too vast and complex, and the project ended up as an unrealized concept without ever reaching a complete compiler implementation.

## Features

- Built on ALGOL 60's syntax as a foundation, while aiming at an ambitious, broad set of features covering everything from industrial applications to system description
- Attempted to handle everything from high-level abstract data types down to low-level bit and address manipulation within a single language
- Incorporated functional elements (an expression-oriented way of thinking), pointing toward a fusion of procedural and functional styles
- Its specification became so vast and complex that a full implementation was not realistic with the technology of the time
- Although the implementation was never completed, its design philosophy was carried forward into later languages

## Languages It Was Influenced By

- [ALGOL 60](algol_60.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

CPL is historical (a language whose historical role has ended), and since no complete compiler was ever implemented, it was never actually used in practice. However, it occupies an important place in the history of programming languages as the starting point of the lineage running through BCPL, B, and C — the modern system programming languages.

## Hello World

Since no complete implementation of CPL exists, the following is presented as an approximation based on the specification documents of the time.

```
writef("Hello, World!*n")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/CPL_%28programming_language%29)
