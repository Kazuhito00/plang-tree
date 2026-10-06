# Zig

- Year: 2016
- Designer(s): Andrew Kelley
- Paradigm(s): procedural, systems
- Family: c-family

## Problem It Aimed to Solve

C has remained the foundation of systems programming for decades, but it carries problems such as hidden control flow through preprocessor macros, a large amount of undefined behavior, and a weak build system. Andrew Kelley designed Zig to solve these problems while maintaining full binary- and source-level interoperability with C, aiming to create a simple systems language. Rather than adding complex features like C++, its design philosophy is one of subtraction: a single powerful mechanism, compile-time execution, substitutes for generics and metaprogramming. There is also a strong emphasis on keeping the specification minimal so that the language itself remains small enough for anyone to fully grasp.

## Features

- The `comptime` feature, which allows code to be executed at compile time, achieves generics without macros or templates
- A design that eliminates hidden control flow (such as operator overloading or implicit propagation of exceptions), making code behavior explicit
- High C interoperability, to the point of being able to directly import C header files
- Its own build system can be written in Zig itself, making cross-compilation easy by default
- Adopts manual memory management, but makes memory management easier to track by explicitly passing allocators around
- Represents error handling with a dedicated type (error unions), and has no exception mechanism
- The standard library supports a wide range of cross-compilation targets using LLVM
- Performs no hidden memory allocation; every place where allocation occurs is always made explicit in the code
- Achieves self-hosting, in which the Zig compiler itself can be built with Zig
- Excludes implicit control flow such as operator overloading and exception throwing from the language specification
- The Zig compiler alone can also be used as a build tool for existing C/C++ projects
- Optional types make the handling of null explicit in the type system
- The balance between safety checks and optimization can be switched per build mode

## Languages It Was Influenced By

- [C](c.md)
- [C++](c_plus_plus.md)
- [Go](go.md)
- [Rust](rust.md)


## Languages It Influenced

- [Carbon](carbon.md)
- [Mojo](mojo.md)


## Current Status

As an emerging systems language aiming to be a successor to C, Zig is drawing attention for its unique metaprogramming model based on comptime, and it is an actively developed, current language. Although it is still below version 1.0 and specification changes continue, adoption is growing in embedded development and toolchain development, and it is also valued for how easy it is to introduce incrementally into existing C projects.

## Hello World

```
const std = @import("std");

pub fn main() void {
    std.debug.print("Hello, World!\n", .{});
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Zig_%28programming_language%29)
