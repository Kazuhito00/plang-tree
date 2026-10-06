# Futhark

- Year: 2014
- Designer(s): Troels Henriksen, Cosmin Oancea, Martin Elsman
- Paradigm(s): functional, array
- Family: numeric-scientific

## Problem It Aimed to Solve

Troels Henriksen, Cosmin Oancea, Martin Elsman and others at DIKU, University of Copenhagen, sought a way to write high-performance programs for massively parallel hardware such as GPUs without writing CUDA or OpenCL directly. Futhark adopts a functional data-parallel programming style, aiming to achieve performance comparable to hand-written parallel code by having the compiler perform advanced fusion optimizations. Rather than being designed as a standalone general-purpose language, it is designed as a tool for generating computational kernels to be embedded into existing applications.

## Features

- Adopts a functional data-parallel programming style, allowing array operations to be described declaratively
- Generates high-performance GPU code by suppressing the creation of intermediate arrays through advanced fusion optimization by the compiler
- Targets compilation to GPU kernels such as CUDA and OpenCL, and is invoked and used from other languages such as C and Python
- Is designed not as a general-purpose programming language but as a domain-specific language (DSL) specialized for generating computational kernels
- Allows the correctness of parallel programs to be verified at compile time through static typing and strong type safety

## Languages It Was Influenced By

- [APL](apl.md)
- [Haskell](haskell.md)
- [Standard ML](standard_ml.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Futhark is currently positioned as a niche-use language. It continues to be used, as a research and practical tool for generating high-performance computational kernels for GPUs, in parts of the scientific computing field.

## Hello World

```futhark
def main = "Hello, world!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Futhark_%28programming_language%29)
