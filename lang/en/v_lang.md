# V

- Year: 2019
- Designer(s): Alexander Medvednikov
- Paradigm(s): procedural, object-oriented, systems
- Family: c-family

## Problem It Aimed to Solve

Go had gained support for its simple syntax and fast compilation, but it lacked some features that developers wanted, such as sum types, option types, and compile-time safety checks. Alexander Medvednikov designed V as a modern systems programming language that preserved Go's simplicity and good developer experience while adding these features, and that could quickly generate single binaries with no external dependencies.

## Features

- Has a simple, readable syntax resembling Go
- Provides safe error handling through sum types and Option/Result types
- Designed with a strong emphasis on very fast compilation speed
- Has a mechanism for transpiling to C source code for building, allowing it to leverage existing C toolchains
- Offers flexibility for performance tuning, such as the ability to choose whether or not to use garbage collection

## Languages It Was Influenced By

- [Go](go.md)
- [Oberon](oberon.md)
- [Python](python.md)
- [Rust](rust.md)
- [Swift](swift.md)
- [Kotlin](kotlin.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

V is a niche, up-and-coming systems programming language that touts simplicity and fast compilation, and it has an active community.

## Hello World

```
fn main() {
    println('Hello, World!')
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/V_%28programming_language%29)
