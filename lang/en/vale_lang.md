# Vale

- Year: 2020
- Designer(s): Evan Ovadia
- Paradigm(s): object-oriented, systems, generic
- Family: c-family

## Problem It Aimed to Solve

In systems programming, a trade-off stood in the way: the runtime overhead of garbage collection on one side, and the steep learning curve and constraints imposed by Rust's borrow checker on the other. Vale attempts to achieve memory safety through a mechanism of its own called "generational references," without relying on either garbage collection or a complex borrow checker. It plans to eventually introduce region-based borrow checking to further improve performance while preserving safety. Designer Evan Ovadia drew on his experience with constraint references from his earlier language, Gel, in designing Vale. The language is currently at the alpha stage, with development ongoing within its community.

## Features

- A mechanism of its own called "generational references" detects memory-safety bugs such as use-after-free without either garbage collection or a complex borrow checker
- Each object carries a generation number, and at run time the language verifies that a reference does not point to memory that has already been freed and reused
- Plans to eventually introduce region-based borrow checking, aiming to omit unnecessary generation checks and improve speed while preserving safety
- Adopts readable syntax closer to C++ and JavaScript, aiming for a lower learning curve than Rust
- Built around single ownership and move semantics, while still allowing references where needed
- Reflects the designer's earlier experience with constraint references from his previous language, Gel

## Languages It Was Influenced By

- [C++](c_plus_plus.md)
- [Rust](rust.md)
- [JavaScript](javascript.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Niche. Vale is still at the alpha stage, with development continuing within its community. Its ambitious goal of achieving memory safety without garbage collection or a borrow checker has drawn attention from those interested in systems-language design.

## Hello World

```vale
exported func main() {
  println("Hello world!");
}
```

## External Links

No Wikipedia article was found.
