# WebAssembly

- Year: 2017
- Designer(s): W3C (Google, Mozilla, Microsoft, Apple)
- Paradigm(s): procedural, systems
- Family: c-family

## Problem It Aimed to Solve

In the 2010s, applications running in web browsers grew increasingly complex, and demand grew for running heavy computational workloads such as games, image/video processing, and CAD directly in the browser. However, JavaScript was a dynamically typed, interpreted language, and no matter how much it was optimized, it could not match the execution speed of native code such as C/C++. Individual browser vendors had made their own separate attempts at acceleration, such as asm.js (Mozilla) and Native Client (Google), but these were not standardized. The W3C therefore brought together the major browser vendors — Google, Mozilla, Microsoft, and Apple — and standardized WebAssembly as a low-level bytecode format that could compile languages such as C/C++ and run them in the browser safely and at near-native speed.

## Features

- A low-level bytecode expressed in a compact binary format, designed for a stack-based virtual machine
- Standard support across all major browsers, with the ability to call back and forth with JavaScript
- Runs in a sandboxed execution environment, achieving near-native speed while preserving memory safety
- Designed as a compilation target for existing languages such as C/C++ and Rust
- Increasingly applied outside the browser as well (server-side, edge computing, plugin systems, etc.)

## Languages It Was Influenced By

- [C++](c_plus_plus.md)
- [JavaScript](javascript.md)
- [Lisp](lisp.md)


## Languages It Influenced

- [AssemblyScript](assemblyscript.md)


## Current Status

It now has standard support in nearly all browsers and has effectively established itself as the "common assembly language of the browser" (status: active). In recent years, adoption has expanded beyond the browser, also serving as an execution foundation for server-side and plugin systems.

## Hello World

```
(module
  (import "console" "log" (func $log (param i32 i32)))
  (import "js" "mem" (memory 1))
  (data (i32.const 0) "Hello, World!")
  (func (export "hello")
    (call $log (i32.const 0) (i32.const 13))
  )
)
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/WebAssembly)
