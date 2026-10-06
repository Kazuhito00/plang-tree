# Halide

- Year: 2012
- Designer(s): Jonathan Ragan-Kelley, Andrew Adams
- Paradigm(s): functional, array, dataflow, declarative
- Family: domain-specific

## Problem It Aimed to Solve

In image-processing programs, the algorithm's logic had been tightly coupled with the details of its execution schedule—loop order, parallelization, vectorization—so that any performance tuning required rewriting the entire program. Halide, developed by Jonathan Ragan-Kelley and Andrew Adams at MIT, solved this problem by clearly separating an image-processing pipeline's "algorithm" from its "schedule." A developer first writes the algorithm declaratively, and can then optimize performance for a variety of hardware targets simply by changing the schedule, without rewriting the code. Implemented as a DSL embedded in C++, it has been widely adopted in industry, including in Google's Pixel camera pipeline and Adobe Photoshop.

## Features

- Clearly separates an image-processing pipeline's "algorithm" from its "schedule" (the optimization policy covering execution order, parallelization, vectorization, and the like)
- Algorithms are written declaratively as combinations of functional-style `Func`s and `Var`s
- Changing only the schedule, without rewriting the code, lets performance be optimized for a variety of hardware targets, including CPUs and GPUs
- Implemented as a DSL embedded in C++ (an internal DSL), making it easy to integrate into existing C++ projects
- Also includes automatic scheduling (an autoscheduler) to help search for an optimal schedule
- Widely used in production in industry, including in Google's Pixel camera pipeline and Adobe Photoshop

## Languages It Was Influenced By

- [C++](c_plus_plus.md)


## Languages It Influenced

- [Taichi](taichi_lang.md)


## Current Status

Active. Halide is in wide practical use across industry—including at Google and Adobe—in image processing and computational photography, and it stands as one of the representative DSLs referenced in compiler-optimization research.

## Hello World

Halide is a domain-specific language, and its essence lies in defining an image-processing pipeline rather than in text output as such. The following is a minimal Halide pipeline embedded in C++: it prints "Hello, World!" using ordinary C++ facilities while also defining and executing the Halide function `gradient`.

```cpp
#include "Halide.h"
#include <cstdio>
using namespace Halide;

int main() {
    printf("Hello, World!\n");

    Func gradient;
    Var x, y;
    gradient(x, y) = x + y;
    Buffer<int32_t> output = gradient.realize({8, 8});

    return 0;
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Halide_%28programming_language%29)
