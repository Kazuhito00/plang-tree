# Linda

- Year: 1986
- Designer(s): David Gelernter
- Paradigm(s): concurrent, declarative
- Family: concurrent-actor

## Problem It Aimed to Solve

In the 1980s, as parallel and distributed computing began to spread, there was a need for ways to express inter-process communication concisely and portably. Gelernter felt that existing parallel languages were cumbersome and hard to work with, and designed Linda as a "coordination language" kept separate from whatever language described the computation itself. It made it possible to loosely couple processes together using only a small number of operations (`out`, `in`, `rd`, `eval`, and so on) that put data into and take it out of a shared "tuple space." This design meant parallel processing capability could be added simply by embedding the Linda model into an existing host language such as C or Fortran.

## Features

- Designed not as a standalone program language but as a "coordination language" embedded into an existing host language
- Handles inter-process communication and synchronization through a shared associative memory space called a "tuple space"
- Concurrent processing can be expressed with just a handful of primitive operations: `out` (generate a tuple), `in` (retrieve and remove one), `rd` (read without removing), and `eval` (generate a tuple via asynchronous evaluation)
- Processes never couple directly to one another in time or space; they interact loosely only through the tuple space
- Parallel extensions can be added to an existing host language such as C or Fortran simply by adding the Linda model to it

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

- [Java](java.md)


## Current Status

Linda never became widely adopted as a specific practical system and remains a niche presence today. However, its idea of a loosely coupled concurrency model built around a tuple space left its mark on the design philosophy of later distributed computing technologies such as JavaSpaces, and it is still cited in theoretical discussions of concurrent computation.

## Hello World

Because Linda is a coordination language embedded into a host language (here, C), ordinary output is handled by the host language's own facilities, while `out` writes a tuple into the tuple space to signal completion.

```c
main() {
    printf("Hello, world!\n");
    out("done");
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Linda_%28coordination_language%29)
