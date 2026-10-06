# Cg

- Year: 2002
- Designer(s): William R. Mark, R. Steven Glanville, Kurt Akeley, Mark J. Kilgard
- Paradigm(s): procedural, array
- Family: hardware-description

## Problem It Aimed to Solve

In the early 2000s, GPU shader programming was still centered on writing assembly language, imposing a high learning and maintenance cost on developers. Drawing on C and the RenderMan shading language, William R. Mark and colleagues at NVIDIA developed Cg, which let graphics hardware be programmed in a C-like syntax. Cg shared much of its design with Microsoft's HLSL, and the two emerged as sister languages at almost the same time. However, NVIDIA ended development of Cg in 2012, after which GLSL (the OpenGL standard) and Microsoft's HLSL took over as the dominant shading languages.

## Features

- Adopts a C-like syntax, allowing functions, structs, and control-flow constructs to be used directly
- Can write both vertex and pixel shaders, compiled per target GPU/API through a mechanism called profiles
- Built-in support for vector and matrix types such as `float4` and `float3x3`, allowing graphics computations to be written concisely
- Semantics bind variables to input and output stages of the GPU pipeline
- Could target both OpenGL and Direct3D, a cross-API design that was unusual for its time
- Shared an almost identical language specification with Microsoft's HLSL, and the two could often share the very same shader code

## Languages It Was Influenced By

- [C](c.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Cg is a historical language; NVIDIA ended its development in 2012. Today, GLSL (the OpenGL standard) and Microsoft's HLSL are the dominant shading languages, and Cg survives only in old documentation and legacy projects.

## Hello World

As a shader language, Cg has no notion of string output; the equivalent of "Hello World" is a minimal pixel shader that outputs a color to the screen.

```cg
float4 main() : COLOR
{
    return float4(1.0, 0.0, 0.0, 1.0); // outputs red
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Cg_%28programming_language%29)
