# ATS

- Year: 2006
- Designer(s): Hongwei Xi
- Paradigm(s): functional, procedural, object-oriented, concurrent, generic
- Family: ml-functional

## Problem It Aimed to Solve

ATS was designed by Hongwei Xi with the goal of unifying practical programming with formal verification (theorem proving). It aimed to realize a type system that could catch typical bugs—such as division by zero, buffer overflows, and memory leaks—at compile time, while retaining execution speed comparable to C. A distinguishing feature is its two-tiered architecture, which clearly separates the part responsible for static type checking from the part that is actually executed at runtime (the static and dynamic components). Its steep learning curve has limited widespread adoption, but it continues to be used by developers who prioritize safety in embedded and low-level systems domains.

## Features

- Combines dependent types and linear types, allowing the correctness of a program to be formally verified at compile time
- Has a two-tiered architecture that clearly separates the static type-checking part (statics) from the runtime dynamic part (dynamics)
- Uses linear types to statically track memory allocation and deallocation, enabling safe resource management without garbage collection
- Aims for execution speed on par with C, with no extraneous runtime overhead
- Provides integrated support for multiple paradigms, including functional, imperative, object-oriented, and concurrent programming
- Its syntax and type system design were influenced by Standard ML, OCaml, and C++

## Languages It Was Influenced By

- [Standard ML](standard_ml.md)
- [OCaml](ocaml.md)
- [C++](c_plus_plus.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

ATS is positioned as a niche language. While it offers advanced capabilities such as formal verification through dependent and linear types, its steep learning curve has kept it from achieving widespread adoption. It continues to be used by a subset of developers and communities who prioritize safety in embedded development and low-level systems programming.

## Hello World

```
implement main0 () = print "Hello, world!\n"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/ATS_%28programming_language%29)
