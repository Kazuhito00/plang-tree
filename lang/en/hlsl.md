# HLSL

- Year: 2002
- Designer(s): Microsoft
- Paradigm(s): procedural, array
- Family: hardware-description

## Problem It Aimed to Solve

In the early days of DirectX, vertex and pixel shaders had to be written directly in GPU assembly language, which made development inefficient and maintenance difficult. To coincide with the release of DirectX 9, Microsoft developed HLSL, which let GPU shaders be written in a high-level, C-like syntax. It shared much of its design with Cg, developed around the same time by NVIDIA, and the two languages emerged as near-identical siblings. By combining hardware-independent high-level expression with compiler-driven optimization, HLSL greatly improved the productivity of shader development.

## Features

- Adopts a C-like syntax, allowing functions, structs, and control-flow constructs to be used directly
- A single language covers multiple shader stages, including vertex shaders, pixel shaders, geometry shaders, and compute shaders
- Built-in vector and matrix types such as `float4` and `float4x4` allow graphics computations to be expressed concisely
- Semantics (such as `: POSITION` or `: SV_Target`) explicitly bind variables to inputs and outputs of the GPU pipeline
- Compiled against a shader model tied to the DirectX version, with optimizations tailored to the target GPU generation
- Shares syntax and design philosophy with NVIDIA's Cg, and the two were effectively treated as sister languages in their early days

## Languages It Was Influenced By

- [C](c.md)


## Languages It Influenced

- [WGSL](wgsl.md)


## Current Status

HLSL is an active language and continues to be widely used as the standard shading language of the DirectX and Windows graphics ecosystem. It plays a central role in real-time graphics fields, game development chief among them.

## Hello World

As a shader language, HLSL has no notion of string output; the equivalent of "Hello World" is a minimal pixel shader that outputs some color to the screen. Below is a pixel shader that fills the entire screen with red.

```hlsl
float4 main() : SV_Target
{
    return float4(1.0, 0.0, 0.0, 1.0); // outputs red
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/High-Level_Shader_Language)
