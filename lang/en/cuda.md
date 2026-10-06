# CUDA

- Year: 2007
- Designer(s): NVIDIA
- Paradigm(s): procedural, concurrent
- Family: c-family

## Problem It Aimed to Solve

The GPU (Graphics Processing Unit) was originally a chip designed purely for rendering 3D graphics, but internally it had a structure with a huge number of computing cores, extremely well suited to parallel computation. However, in the early 2000s, using this computing power required going through graphics-only APIs such as OpenGL or DirectX and forcibly expressing computation in a shader language, making general-purpose computation outside of graphics (GPGPU) extremely difficult. NVIDIA developed CUDA as a programming model that could access the GPU's parallel computing cores directly, without going through a graphics API, so that general-purpose computation could be written in syntax close to C++.

## Features

- A language/platform that adds GPU-oriented parallel-processing extensions (kernel functions, thread hierarchies, etc.) to C++-based syntax
- Allows large-scale parallel computation using thousands of GPU cores to be described in relatively familiar syntax
- Lets host (CPU) side and device (GPU) side code be written separately within the same source
- Widely used in fields that require massive amounts of parallel computation, such as deep learning, scientific computing, and cryptocurrency mining
- Specialized for NVIDIA GPUs and does not run on other vendors' GPUs (vendor lock-in exists)

## Languages It Was Influenced By

- [C++](c_plus_plus.md)
- [C](c.md)


## Languages It Influenced

- [Mojo](mojo.md)
- [ISPC](ispc.md)
- [Taichi](taichi_lang.md)


## Current Status

CUDA currently holds an industry-standard position as the computing foundation for the deep learning and machine learning fields (status: active), and against the backdrop of the AI boom it has become, together with NVIDIA GPUs, a de facto essential platform.

## Hello World

```
#include <cstdio>

__global__ void helloFromGPU() {
    printf("Hello, World from GPU!\n");
}

int main() {
    helloFromGPU<<<1, 1>>>();
    cudaDeviceSynchronize();
    return 0;
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/CUDA)
