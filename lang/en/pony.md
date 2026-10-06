# Pony

- Year: 2015
- Designer(s): Sylvan Clebsch
- Paradigm(s): object-oriented, concurrent
- Family: concurrent-actor

## Problem It Aimed to Solve

The actor model, as represented by Erlang, achieves high concurrency through message passing, but the risk of data races still remains if actors share mutable data. Rust, meanwhile, achieved memory safety and prevention of data races through compile-time ownership checking, but its design philosophy differed from the flexible concurrency model of the actor approach. Sylvan Clebsch designed Pony to combine both the concurrency of the actor model and Rust-like static verification, aiming for a language that could eliminate data races and exceptions entirely through its compile-time type system alone, without relying on runtime locks or exceptions.

## Features

- Manages actor-model-based concurrency through a unique type system called reference capabilities
- Guarantees at compile time, through type checking, that data races cannot occur
- Aims for a design in which exceptions (such as null references or division by zero) never occur at runtime
- Garbage collection is performed independently per actor, so no global pause ever occurs
- Statically typed while integrating object orientation with actor-based concurrency

## Languages It Was Influenced By

- [Erlang](erlang.md)
- [Rust](rust.md)
- [C](c.md)
- [Python](python.md)


## Languages It Influenced

- [Inko](inko_lang.md)
- [Verona](verona_lang.md)


## Current Status

Pony has an advanced type system that draws academic attention, but its user base remains limited and niche. As an experimental language demonstrating the ambitious goal of statically eliminating data races, it has offered one option in the design of concurrent-processing languages.

## Hello World

```
actor Main
  new create(env: Env) =>
    env.out.print("Hello, world!")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Pony_%28programming_language%29)
