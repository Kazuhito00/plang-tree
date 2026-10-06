# Rust

- Year: 2010
- Designer(s): Graydon Hoare
- Paradigm(s): systems, functional, generic
- Family: c-family

## Problem It Aimed to Solve

Software written in C/C++ had long suffered from memory-safety bugs such as buffer overflows, dangling pointers, and data races, and these had become a major source of serious security vulnerabilities. Garbage collection improves safety but introduces runtime overhead. Having worked at Mozilla, Graydon Hoare drew on type-system ideas from functional languages (OCaml, Haskell) and designed Rust as a language that guarantees memory safety through compile-time ownership checks, without runtime cost.

## Features

- Compile-time memory-safety guarantees through the unique concepts of ownership, borrowing, and lifetimes
- No garbage collector, yet prevents memory leaks and dangling pointers
- Features derived from functional languages, such as algebraic data types and pattern matching
- Generic programming and zero-cost abstraction through traits
- Thread safety under the banner of "fearless concurrency"
- Explicit handling of error handling and null-safety via the Result and Option types
- Ships with Cargo, an integrated package manager and build tool
- The borrow checker detects data races at compile time, guaranteeing thread safety at runtime
- Code generation and boilerplate reduction through a macro system
- `unsafe` blocks allow safety checks to be deliberately bypassed only where necessary

## Languages It Was Influenced By

- [C++](c_plus_plus.md)
- [OCaml](ocaml.md)
- [Haskell](haskell.md)
- [Erlang](erlang.md)
- [Scheme](scheme.md)


## Languages It Influenced

- [Zig](zig.md)
- [Carbon](carbon.md)
- [Pony](pony.md)
- [Swift](swift.md)
- [Gleam](gleam.md)
- [Mojo](mojo.md)
- [V](v_lang.md)
- [Whiley](whiley.md)
- [Ballerina](ballerina.md)
- [Move](move_lang.md)
- [Roc](roc.md)
- [Verona](verona_lang.md)
- [Austral](austral_lang.md)
- [Vale](vale_lang.md)
- [Hylo](hylo_lang.md)
- [WGSL](wgsl.md)
- [Cairo](cairo_lang.md)


## Current Status

Backed by its ownership-based memory-safety guarantees, Rust is rapidly gaining adoption in fields that demand both performance and security, such as OS kernels, browser engines, and embedded systems, making it one of the most vibrant systems programming languages today. Its partial adoption in the Linux kernel and growing use across various cloud platforms attest to its significant presence.

## Hello World

```
fn main() {
    println!("Hello, World!");
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Rust_%28programming_language%29)
