# Mojo

- Year: 2023
- Designer(s): Chris Lattner
- Paradigm(s): procedural, object-oriented, systems
- Family: c-family

## Problem It Aimed to Solve

In the early 2020s, Python had become the de facto standard language for AI and machine learning, but its slow execution speed as an interpreted language, and its lack of optimization for accelerators such as GPUs and TPUs, were hindering the transition from research-stage prototypes to production environments. Chris Lattner, who had also designed LLVM, Clang, and Swift, founded Modular and developed Mojo as a language that maintains a high degree of syntactic compatibility with Python while achieving, through compilation, memory safety on par with Rust and execution speed on par with C.

## Features

- Adopts much of Python's syntax and keywords as they are, making it easy for existing Python developers to learn
- Uses MLIR (Multi-Level Intermediate Representation) as its compilation foundation, generating code optimized for diverse hardware such as CPUs, GPUs, and TPUs
- Incorporates memory-safety mechanisms inherited from Rust, such as an ownership system
- Static typing can be introduced incrementally, allowing types to be specified explicitly only where performance is needed
- Was open-sourced as Mojo 1.0 in August 2026

## Languages It Was Influenced By

- [Python](python.md)
- [C++](c_plus_plus.md)
- [Rust](rust.md)
- [Swift](swift.md)
- [Zig](zig.md)
- [CUDA](cuda.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Mojo is an emerging language under active development that addresses Python's execution-speed problems in the AI and machine learning field, and its adoption is expected to spread following its open-sourcing in 2026.

## Hello World

```
fn main():
    print("Hello, World!")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Mojo_%28programming_language%29)
