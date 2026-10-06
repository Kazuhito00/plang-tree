# Hylo

- Year: 2021
- Designer(s): Dave Abrahams, Dimi Racordon
- Paradigm(s): generic, systems, functional
- Family: c-family

## Problem It Aimed to Solve

In systems programming, borrow checkers such as Rust's had come into wide use to reconcile safety with performance, but their steep learning curve and the complexity of their aliasing constraints were seen as a problem. Hylo (formerly named Val) was designed around the idea of "mutable value semantics"—the semantics of values themselves rather than references—aiming to achieve both memory safety and high performance without a borrow checker. Led by Dave Abrahams and Dimi Racordon, the project draws on Swift's subscript mechanism, the generic-programming insights found in C++'s STL, and Rust's concept of borrowing. It aims to let data structures such as doubly linked lists, which traditionally could only be written safely under reference semantics, be implemented safely and efficiently using value semantics instead.

## Features

- Centers on "mutable value semantics," expressing programs as the passing and mutation of values themselves rather than references
- Aims to achieve both memory safety and execution speed without using a borrow checker
- A mechanism inspired by Swift's subscripts allows efficient access to data while preserving value semantics
- Incorporates insights from generic programming as seen in C++'s STL
- Aims to let data structures such as doubly linked lists, traditionally writable safely only under reference semantics, be implemented safely and efficiently under value semantics
- Was originally developed under the name Val

## Languages It Was Influenced By

- [Swift](swift.md)
- [C++](c_plus_plus.md)
- [Rust](rust.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Niche. Hylo continues to be developed as an experimental systems programming language, and its approach of achieving safety and speed through value semantics, without a borrow checker, has drawn attention from researchers and language enthusiasts.

## Hello World

```hylo
public fun main() {
  print("Hello, World!")
}
```

## External Links

No Wikipedia article was found.
