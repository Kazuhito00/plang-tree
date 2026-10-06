# Gleam

- Year: 2016
- Designer(s): Louis Pilfold
- Paradigm(s): functional, concurrent
- Family: concurrent-actor

## Problem It Aimed to Solve

The Erlang VM (BEAM) had long offered high concurrency and fault tolerance through the actor model, but both Erlang itself and Elixir were dynamically typed, meaning that in large codebases, type-related bugs could not be caught before execution. Louis Pilfold wanted to bring Rust-like static typing and clear compiler error messages to BEAM, and developed Gleam, a functional language with robust type inference, so that developers could ensure type safety while still benefiting from BEAM's concurrency infrastructure.

## Features

- Runs on BEAM (the Erlang VM) and can directly leverage the concurrency infrastructure and library assets of Erlang/Elixir
- Features Hindley-Milner-style static type inference, catching many errors at compile time
- Designed with an emphasis on clear, friendly compiler error messages reminiscent of Rust
- A functional programming style based on immutable data and pattern matching
- Also supports compilation to JavaScript, allowing use across multiple targets including the frontend

## Languages It Was Influenced By

- [Erlang](erlang.md)
- [Rust](rust.md)
- [OCaml](ocaml.md)
- [Elm](elm.md)
- [Elixir](elixir.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Gleam is an emerging language that has drawn attention in recent years for bringing static typing to the BEAM ecosystem, and it is gradually gaining adoption among developer communities that want type safety while still leveraging the assets of Erlang and Elixir.

## Hello World

```
import gleam/io

pub fn main() {
  io.println("Hello, world!")
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Gleam_%28programming_language%29)
