# Julia

- Year: 2012
- Designer(s): Jeff Bezanson, Stefan Karpinski, Viral Shah, Alan Edelman
- Paradigm(s): functional, procedural, array
- Family: numeric-scientific

## Problem It Aimed to Solve

In the field of scientific and technical computing, the so-called "two-language problem" had long been a persistent headache: it had become standard practice to prototype in an easy-to-write language like Python and then rewrite only the performance-critical parts in C or Fortran. Researchers at MIT wanted to eliminate this compromise and create a language that kept the ease of writing dynamically typed code while approaching C-level execution speed through JIT (just-in-time) compilation. It was designed with the goal of combining the usability of existing scientific computing languages (such as MATLAB) with performance comparable to statically typed languages.

## Features

- Achieves high performance despite being a dynamic language, thanks to LLVM-based JIT compilation
- Has a type system centered on multiple dispatch
- Allows matrix and array operations to be written concisely, in notation close to mathematical formulas
- Offers interoperability that makes it easy to call existing C and Fortran code
- Has a rich collection of packages for scientific and technical computing, machine learning, and numerical simulation

## Languages It Was Influenced By

- [Python](python.md)
- [MATLAB](matlab.md)
- [Lisp](lisp.md)
- [Dylan](dylan.md)
- [R](r.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Julia remains an actively used language (status: active), gaining adoption in numerical simulation and machine learning as an emerging language that aims to combine speed with ease of writing. Positioned as a solution to the "two-language problem," it has been steadily growing its user base, particularly within the research community.

## Hello World

```
println("Hello, World!")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Julia_%28programming_language%29)
