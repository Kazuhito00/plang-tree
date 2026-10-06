# Taichi

- Year: 2019
- Designer(s): Yuanming Hu
- Paradigm(s): array, procedural, concurrent
- Family: domain-specific

## Problem It Aimed to Solve

Python is easy to write, but execution speed had long been a serious problem for computations involving physical simulation or sparse data structures. Yuanming Hu, an MIT alumnus, and colleagues developed Taichi as a language embedded in Python that could nonetheless be JIT-compiled for fast execution on GPU or CPU. It was designed with particular attention to handling spatially sparse data structures, such as sparse voxel grids, and to applications in physics-based machine learning through differentiable programming. It draws on a Halide-like approach that separates computation from scheduling, while retaining Python's simple syntax.

## Features

- Implemented as a DSL embedded in Python; functions decorated with `@ti.kernel` or `@ti.func` are JIT-compiled and executed on the GPU or CPU
- Offers sparse data structures as a first-class feature, allowing things like sparse voxel grids to be handled with memory efficiency
- Follows a Halide-like design philosophy that separates computational logic from memory layout and scheduling, making it easy to apply the same algorithm to different data structures or backends
- Supports automatic differentiation, enabling differentiable programming that combines physical simulation with machine learning
- Can switch among multiple backends — CUDA, Vulkan, Metal, CPU — from a single piece of code
- Retains Python's plain syntax as-is, making it easy to use alongside the existing Python ecosystem, such as NumPy

## Languages It Was Influenced By

- [Python](python.md)
- [Halide](halide.md)
- [CUDA](cuda.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Taichi is an active language, seeing continued heavy use in research and development involving physical simulation, computer graphics, and machine learning. Development by its open-source community also continues.

## Hello World

Taichi can print a message from a kernel running on the GPU or CPU by calling the `print` function inside a function decorated with `@ti.kernel`.

```python
import taichi as ti
ti.init(arch=ti.cpu)

@ti.kernel
def hello():
    print("Hello, world!")

hello()
```

## External Links

No Wikipedia article was found.
