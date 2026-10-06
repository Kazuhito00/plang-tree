# AssemblyScript

- Year: 2017
- Designer(s): Daniel Wirtz, Max Graey
- Paradigm(s): object-oriented, functional, generic, systems
- Family: c-family

## Problem It Aimed to Solve

AssemblyScript came about to let developers accustomed to JavaScript/TypeScript more easily take advantage of WebAssembly's fast execution performance. Compiling to WebAssembly previously required learning a new language from scratch, such as C++ or Rust, which posed a high barrier to entry for web developers. Daniel Wirtz and Max Graey aimed to create a language that existing JavaScript/TypeScript developers could compile directly to WebAssembly while sticking with syntax they were already used to, by adopting syntax nearly identical to TypeScript while making it compilable as a strictly statically typed subset.

## Features

- Its syntax is nearly identical to TypeScript, and it compiles using TypeScript's type annotations as-is
- Has garbage collection, but for performance also allows direct use of near-manual memory management and low-level types (such as `i32` and `f64`)
- Supports object-oriented features such as generics, classes, and interfaces, while limiting the language to a subset of features to fit WebAssembly's constraints
- Existing TypeScript code cannot simply be reused as-is; it must be rewritten to follow AssemblyScript's own typing rules
- Integrates with the npm ecosystem, giving it a high affinity with existing JavaScript/TypeScript toolchains

## Languages It Was Influenced By

- [TypeScript](typescript.md)
- [JavaScript](javascript.md)
- [WebAssembly](webassembly.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is actively used and in wide use today. It continues to be used as an approachable option for TypeScript-experienced developers in the development of high-performance web applications and plugin systems using WebAssembly.

## Hello World

In AssemblyScript, as in TypeScript, strings can be output using `console.log`.

```typescript
export function main(): void {
  console.log("Hello, World!");
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/AssemblyScript)
