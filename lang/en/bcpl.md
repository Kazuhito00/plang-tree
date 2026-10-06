# BCPL

- Year: 1966
- Designer(s): Martin Richards
- Paradigm(s): procedural
- Family: c-family

## Problem It Aimed to Solve

In the mid-1960s, rewriting a compiler from scratch for every new machine was an enormous amount of labor, and Martin Richards wanted a language whose compiler could easily be ported across many different machines. Achieving that meant simplifying the language specification to the extreme, expressing everything solely in terms of untyped words (a single machine word), with no distinction of types.

BCPL made "having no types" a deliberate design policy, and by routing compilation through an abstract machine code (OCODE), it made porting to different hardware easy. This uncompromising simplicity became the wellspring of the lightweight systems-description languages that followed.

## Features

- Treats all values as machine words, with no explicit data types
- Prioritizes compiler portability above all, and could be deployed to multiple machines via an intermediate code (OCODE)
- Allows low-level operations such as pointer arithmetic and bit manipulation to be written directly
- A procedural language with block structure and basic control constructs (IF, WHILE, etc.)
- Was also used in OS development predating Unix, such as the CAP computer and TRIPOS
- Has surface-level features that differ from later C, such as its own block delimiters (`$( ... $)`) instead of curly braces

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

- [B](b_language.md)
- [C](c.md)
- [occam](occam.md)
- [Euclid](euclid.md)


## Current Status

BCPL is now positioned as a historical language (status: historical), but as the starting point of the lineage that runs through the B language to C, it is an extremely important presence in the history of programming languages.

Some hobbyist communities still maintain implementations of it today, and it is also used as educational material for learning about the prehistory of C.

## Hello World

```
GET "LIBHDR"

LET START() = VALOF
$(
    WRITES("Hello, World!*N")
    RESULTIS 0
$)
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/BCPL)
