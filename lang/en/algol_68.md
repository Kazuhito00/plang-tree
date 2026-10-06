# ALGOL 68

- Year: 1968
- Designer(s): Adriaan van Wijngaarden et al.
- Paradigm(s): procedural
- Family: origin

## Problem It Aimed to Solve

ALGOL 60 was highly regarded in academia, but it was criticized for shortcomings such as its inability to handle dynamic arrays, its lack of any mechanism for concurrency, and a type system that felt ad hoc and lacked orthogonality. The design team wanted to eliminate these flaws at the root and create a more general, theoretically coherent language.

The result was an orthogonal type system that clearly distinguished values from references, along with a basic mechanism for concurrency (parallel actions). However, the specification was written using a unique formal method of its own (van Wijngaarden grammar), which made the specification document itself notoriously difficult to understand and hindered implementation and adoption.

## Features

- An orthogonal type system that gave consistent, regular rules to how types could be combined
- Support for dynamic arrays and more flexible data structures
- A built-in language-level mechanism for concurrency (parallel actions)
- A specification written in the difficult formal method known as van Wijngaarden grammar, which raised the bar for understanding and implementation
- Highly regarded academically, but only limited adoption commercially
- Introduction of the concept of "modes," a notion of type that clearly distinguishes passing by value from passing by reference

## Languages It Was Influenced By

- [ALGOL 60](algol_60.md)


## Languages It Influenced

- [C](c.md)
- [C++](c_plus_plus.md)
- [Pascal](pascal.md)
- [Ada](ada.md)
- [Scheme](scheme.md)
- [Python](python.md)
- [Icon](icon.md)
- [sh(Bourne Shell)](sh.md)
- [ABC](abc.md)
- [Mesa](mesa.md)
- [Rexx](rexx.md)


## Current Status

ALGOL 68 is now regarded as a historical language (status: historical). Its strict specification limited its adoption, but its orthogonal type system and concept of concurrency have continued to be referenced for a long time as a theoretical foundation for later languages.

It is often cited as a representative example when discussing the "trade-off between theoretical elegance and practicality" in language design.

## Hello World

```algol68
begin
    print(("Hello, world!", newline))
end
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/ALGOL_68)
