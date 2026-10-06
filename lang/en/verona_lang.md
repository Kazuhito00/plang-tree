# Verona

- Year: 2019
- Designer(s): Sylvan Clebsch, Matthew Parkinson
- Paradigm(s): concurrent, object-oriented, systems
- Family: concurrent-actor

## Problem It Aimed to Solve

In software running in cloud environments, memory-safety flaws had become a serious threat undermining reliability. Verona is an experimental language developed by Microsoft Research that attempts to achieve safe concurrent memory access without locks by integrating the concept of ownership with a new concurrency model. It classifies objects into regions such as immutable, isolated-mutable, and shared, with a design in which the compiler statically prevents unsafe concurrent mutation. Led by Sylvan Clebsch, a co-designer of the Pony language, the project explores a concurrency model that combines the actor model with ownership types. It remains at the research stage today, an experimental project undergoing continuous, large-scale refactoring.

## Features

- A region-based ownership model classifies objects into regions such as immutable, isolated-mutable, and shared, and the compiler statically verifies the safety of concurrent access
- Relies on no garbage collector; memory allocation and deallocation are instead controlled through per-region memory management
- A mechanism called a "cown" (concurrent owner) enables safe concurrent access to multiple resources without using locks
- Integrates the actor model with an ownership type system, letting asynchronous processing be expressed with constructs such as `when` blocks
- Draws on both the actor-model expertise developed for Pony and Rust's concept of ownership
- Remains a Microsoft Research project at the research stage, with the language specification itself still evolving continuously

## Languages It Was Influenced By

- [Pony](pony.md)
- [Rust](rust.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Niche. Verona remains an experimental, research-stage language undergoing continuous large-scale refactoring. Practical adoption is still limited, but the forward-looking design that reconciles concurrency with memory safety has drawn interest from language researchers and cloud-systems developers.

## Hello World

```verona
class Main
{
  main()
  {
    Builtin.print("Hello world\n");
  }
}
```

## External Links

No Wikipedia article was found.
