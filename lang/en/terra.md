# Terra

- Year: 2013
- Designer(s): Zachary DeVito, James Hegarty, Alex Aiken, Pat Hanrahan
- Paradigm(s): procedural, systems, generic
- Family: c-family

## Problem It Aimed to Solve

Terra was developed by researchers at Stanford University to address the challenge of metaprogramming high-performance computing code from a flexible scripting language like Lua while still generating low-level code with C-like execution performance. Traditionally, combining dynamic code generation with high execution efficiency was difficult, and there was a tradeoff between the flexibility of a scripting language and the performance of a statically compiled one. Terra was designed to be embedded within Lua, and by using JIT compilation with LLVM as its backend, it sought to achieve both runtime code generation and high-speed numerical computation at the same time.

## Features

- Designed as a DSL (embedded domain-specific language) within the Lua language, allowing Terra functions to be defined inside Lua code
- Generates code with performance comparable to C through JIT compilation using LLVM as its backend
- Leverages Lua's metaprogramming features to dynamically generate and specialize Terra code at run time
- Adopts low-level memory management without garbage collection, making it suitable for systems programming and numerical computation
- Lets a single language system switch between two different execution models: Lua's interactivity and Terra's performance through static compilation

## Languages It Was Influenced By

- [Lua](lua.md)
- [C](c.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Terra is positioned as a niche language used in specific fields. It continues to be used mainly in research and parts of the graphics and numerical computing communities.

## Hello World

Terra code is written embedded within Lua code, with functions defined using the `terra` keyword.

```lua
terra hello()
    var s = "Hello, World!\n"
    C.printf(s)
end
hello()
```

## External Links

No Wikipedia article was found.
