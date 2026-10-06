# Plankalkül

- Year: 1943
- Designer(s): Konrad Zuse
- Paradigm(s): procedural
- Family: origin

## Problem It Aimed to Solve

While developing the relay-based computers Z1 through Z3 from the 1930s onward, Konrad Zuse wanted to describe complex algorithms — such as evaluating chess positions or proving geometric theorems — symbolically, rather than by directly manipulating bit strings in machine language. At the time, the very concept of a "programming language" did not yet exist, and computational procedures could only be expressed through wiring, switches, or instructions specific to a given machine.

Zuse single-handedly devised a notation equipped with variables, arrays, conditional branching, and iteration, and by around 1945 had compiled it into what he called "Plankalkül" (roughly, "plan calculus"). Its publication was delayed by the turmoil of wartime and postwar conditions, and it was never implemented or widely adopted. Nevertheless, the design itself predates every other language on record and is notable for having arisen independently of any contemporary research institution.

## Features

- A data structure capable of handling arrays and nested record types — an exceptionally advanced design for its time
- Structured control constructs, including conditionals and loops
- Expressed in a distinctive two-dimensional notation, with values and their subscripts arranged vertically
- Concepts equivalent to floating-point numbers, and operations resembling set operations, were also included in the design
- No compiler or execution system existed when it was devised; it remained purely a design on paper
- More than half a century after its conception, it was first executed on a software emulator in 1998

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Today it is a language mentioned only as a historical artifact (status: historical) and is never used in practice.

However, because of how early it was designed, it is invariably cited as the starting point in accounts of programming language history, and its successful 1998 execution was widely reported as the event where "the world's oldest programming language ran after half a century."

## Hello World

Plankalkül had almost no concept of string output; the notion of "displaying a string on screen" simply did not exist in its design. As the simplest example that can be written in this language, a program that adds two 8-bit values is shown instead. Note that the original notation is a distinctive two-dimensional layout with variable names and their subscripts arranged in two rows; the following is the linearized notation commonly used in modern literature.

```
P1 add (V0[:8.0], V1[:8.0]) → R0[:8.0]
V0[:8.0] + V1[:8.0] ⇒ R0[:8.0]
END
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Plankalk%C3%BCl)
