# Nim

- Year: 2008
- Designer(s): Andreas Rumpf
- Paradigm(s): procedural, object-oriented, generic
- Family: c-family

## Problem It Aimed to Solve

While Python's indentation-based, readable syntax boosted productivity, its execution speed was a major handicap as an interpreted language. Andreas Rumpf wanted to preserve that high readability while achieving execution speed comparable to C through compilation. Nim was designed to take the approach of transpiling source code into intermediate C (or C++, or JavaScript) before native compilation, allowing it to directly benefit from the optimizations and portability of existing C compilers.

## Features

- A concise, indentation-based syntax similar to Python's
- Near-native execution speed thanks to its transpile-to-C approach
- Static typing with powerful type inference, plus metaprogramming through compile-time macros
- A choice of memory management strategies (the default ARC, garbage collection, and others)
- High interoperability with existing C/C++ libraries
- UFCS (Uniform Function Call Syntax), which lets procedure calls and method calls be written uniformly
- A macro system that can execute code at compile time, enabling DSL-like extensions
- A flexible multi-paradigm design combining object-oriented, procedural, and some functional styles
- Generated C/C++ code that is highly readable and easy to debug with existing C toolchains
- Rich features such as operator overloading and an effect system, without sacrificing conciseness
- Dependency management via the Nimble package manager
- Support for compiling to JavaScript as well, allowing the same language to be used on both frontend and backend

## Languages It Was Influenced By

- [Python](python.md)
- [C++](c_plus_plus.md)
- [Ada](ada.md)
- [Lisp](lisp.md)
- [Object Pascal(Delphi)](object_pascal.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Nim has gained a certain amount of support as a language that balances readability and execution speed, but adoption remains limited compared to languages such as Rust and Go, and it currently occupies a niche position. Even so, development continues within a small community, and it retains a loyal following among those who want both scripting-like ease of use and native performance.

## Hello World

```
echo "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Nim_%28programming_language%29)
