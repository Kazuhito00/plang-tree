# UPC

- Year: 1999
- Designer(s): UPC Consortium, William Carlson
- Paradigm(s): procedural, concurrent, systems
- Family: numeric-scientific

## Problem It Aimed to Solve

UPC (Unified Parallel C) was developed to tackle the challenge of reconciling the ease of writing shared-memory parallel computation with the performance and data-placement control offered by message-passing distributed-memory computation. At the time, several different C language extensions had been proposed for parallel memory programming, but they were incompatible with one another and unstandardized. The UPC Consortium sought to integrate the strengths of these approaches, keeping the language based on C, to enable programming on large-scale parallel machines using the PGAS (Partitioned Global Address Space) model. Another goal was to let existing C programmers transition to parallel programming without a large learning cost.

## Features

- Extends C's syntax directly, so existing C code can be parallelized by adding qualifiers such as `shared`
- The PGAS model allows programming from the perspective of a single address space, like shared memory, even in a distributed-memory environment
- Has `upc_forall`, a parallel version of the for statement, allowing iteration to be described concisely according to the distributed placement of data
- Has explicit synchronization primitives (barriers, locks), letting the programmer control the details of parallel execution
- Multiple implementations existed targeting supercomputers and large-scale cluster environments (Berkeley UPC, GCC UPC, and others)

## Languages It Was Influenced By

- [C](c.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as niche (a language used in a specific field). It continues to be used at some HPC research institutions and in legacy supercomputer environments, but its adoption in new development is limited.

## Hello World

UPC uses C's syntax as-is, with parallel extensions such as `upc_barrier` added on top.

```c
#include <upc.h>
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Unified_Parallel_C)
