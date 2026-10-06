# Scheme

- Year: 1975
- Designer(s): Guy Steele, Gerald Sussman
- Paradigm(s): functional, symbolic processing
- Family: Lisp/Scheme family

## Problem It Aimed to Solve

In the mid-1970s, Guy Steele and Gerald Sussman at MIT sought to reexamine the dynamic scoping and bloated feature sets of the Lisp dialects of the time and create a smaller, more theoretically consistent language. In particular, through their research into the actor model, they found a need for a minimal, mathematically elegant Lisp dialect that used lexical scoping and tail-call optimization (a mechanism that treats tail recursion as equivalent to a loop). This design philosophy was later adopted as the teaching language for the celebrated educational text "Structure and Interpretation of Computer Programs" (SICP).

## Features

- One of the earliest Lisp dialects to adopt lexical scoping as the standard
- Guarantees tail-call optimization as part of the specification, allowing recursion to be used like a loop
- Has `call/cc`, which treats continuations as first-class values
- Its language specifications (R5RS, R7RS, etc.) are extremely compact, making it well-suited to education and research
- Adopts the "Lisp-1" approach, placing functions and variables in the same namespace

## Languages It Was Influenced By

- [Lisp](lisp.md)
- [ALGOL 68](algol_68.md)


## Languages It Influenced

- [Rust](rust.md)
- [Common Lisp](common_lisp.md)
- [Clojure](clojure.md)
- [Racket](racket.md)
- [Dylan](dylan.md)
- [Guile](guile.md)
- [Haskell](haskell.md)
- [Lua](lua.md)
- [JavaScript](javascript.md)
- [Scala](scala.md)
- [R](r.md)
- [K](k.md)
- [Sather](sather.md)
- [EuLisp](eulisp.md)
- [SCM](scm.md)
- [LFE](lfe.md)
- [Chicken Scheme](chicken_scheme.md)
- [Chez Scheme](chez_scheme.md)
- [Snap!](snap.md)
- [Q (kdb+)](q_kdb.md)
- [Michelson](michelson.md)
- [Joy](joy_lang.md)


## Current Status

Scheme never became a commercial mainstream language, but it is positioned as a "niche" language that retains a strong following in education and research. Its minimal, consistent design continues to provide the theoretical foundation for many modern language features, including continuations and lexical scoping.

## Hello World

```
(display "Hello, World!")
(newline)
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Scheme_%28programming_language%29)
