# ISPC

- Year: 2011
- Designer(s): Matt Pharr, William R. Mark
- Paradigm(s): procedural, array, concurrent
- Family: c-family

## Problem It Aimed to Solve

Making use of a CPU's SIMD (vector) instructions traditionally meant either relying on a compiler's automatic vectorization or hand-writing cumbersome SIMD intrinsics, both of which hurt productivity. Drawing on his experience with Intel's Larrabee project, Matt Pharr envisioned a programming model that adapted the GPU's SPMD (Single Program, Multiple Data) model for use on the CPU. ISPC lets programmers write SPMD programs in a C-like syntax, and the compiler automatically maps them onto the CPU's SIMD lanes, yielding vectorized parallel code that is both predictable and fast. It has been adopted in fields that demand high-performance CPU parallelism, such as game engines and renderers.

## Features

- Adopts a syntax very close to C, making it easy for existing C programmers to pick up
- The `uniform` and `varying` type qualifiers explicitly distinguish data that differs across SIMD lanes from data shared across all lanes
- Maps the GPU's SPMD programming model onto the CPU's SIMD instruction sets (SSE, AVX, and so on), giving programmers fast parallel execution without having to write explicit vectorized code
- The `foreach` statement controls how loop iterations are assigned to SIMD lanes, and multicore parallelism via `task` is integrated into the same model
- Designed so the compiler's generated code behavior is easy to predict, giving more reliable performance visibility than automatic vectorization
- Generates object files that can be called directly from C/C++ code, making it easy to integrate into existing build systems

## Languages It Was Influenced By

- [C](c.md)
- [CUDA](cuda.md)
- [GLSL](glsl.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

ISPC is an active language, with development continuing at Intel. It sees practical use in fields that demand high-performance SIMD parallelism on the CPU, such as game engines and rendering engines.

## Hello World

ISPC provides a `print` statement for debugging, which can output a message from within a C-like function definition.

```c
export void hello() {
    print("Hello, world!\n");
}
```

## External Links

No Wikipedia article was found.
