# Brook

- Year: 2003
- Designer(s): Ian Buck, Pat Hanrahan
- Paradigm(s): procedural, array, concurrent
- Family: c-family

## Problem It Aimed to Solve

In the early 2000s, GPUs were rapidly increasing their computational performance, but their parallel computing power could be used almost exclusively for graphics rendering. Buck and Hanrahan wanted to harness this high parallel computing performance for general-purpose computation (GPGPU) beyond graphics. At the time, performing computation on a GPU required forcibly repurposing the mechanisms of graphics APIs such as OpenGL or DirectX, which was a high barrier for programmers without specialized knowledge. They therefore extended the C language with the concept of stream programming, introducing the abstractions of "kernel functions" and "data streams" so that parallel code for the GPU could be written directly without having to be conscious of the graphics APIs.

## Features

- Extended the syntax of C, introducing two central concepts: "streams," representing collections of data, and "kernel functions," which are applied to them
- By applying a kernel function in parallel to each element of a stream, it can harness the GPU's large-scale parallelism
- Eliminated the need to directly handle low-level graphics APIs such as OpenGL or DirectX, greatly lowering the barrier to GPGPU programming
- Developed as an academic project by Stanford University's graphics research group
- Had a formative influence on the successor BrookGPU and AMD's GPGPU technology, laying the groundwork for the spread of later technologies such as CUDA

## Languages It Was Influenced By

- [C](c.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Brook is historical (a language that has finished its historical role) and is not used in current development. It was superseded by later GPGPU technologies such as CUDA and OpenCL, but it is remembered as pioneering research that opened up the idea of general-purpose computation using the GPU.

## Hello World

```
kernel void hello(out float o<>) {
    o = 1.0f;
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/BrookGPU)
