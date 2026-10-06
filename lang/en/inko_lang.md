# Inko

- Year: 2015
- Designer(s): Yorick Peterse
- Paradigm(s): concurrent, object-oriented, pattern-matching
- Family: concurrent-actor

## Problem It Aimed to Solve

The Dutch developer Yorick Peterse drew inspiration from actor-based languages such as Erlang and Pony, and developed Inko aiming to solve problems in concurrent programs such as unpredictable performance degradation, runtime errors, and data races. Inko adopts a concurrency model based on lightweight processes, and achieves safe concurrency without a garbage collector through deterministic automatic memory management based on single ownership. Through static typing and an error-handling mechanism, it aims to enable type-safe concurrency and reliable software development.

## Features

- Adopts a concurrency model based on lightweight processes (actors), with processes communicating through message passing
- Performs deterministic memory management based on single ownership, freeing memory without relying on a garbage collector
- Uses static typing to detect many errors at compile time
- Increases the reliability of concurrent programs through a design in which data races cannot structurally occur
- Combines pattern matching with object-oriented features, enabling highly expressive code

## Languages It Was Influenced By

- [Erlang](erlang.md)
- [Pony](pony.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Inko is currently positioned as a niche-use language. Development continues as an experimental effort in language design aimed at achieving safe concurrency, but it has not achieved widespread adoption as a practical language.

## Hello World

```inko
import std.stdio (STDOUT)

class async Main {
  fn async main {
    STDOUT.new.print('Hello, world!')
  }
}
```

## External Links

No Wikipedia article was found.
