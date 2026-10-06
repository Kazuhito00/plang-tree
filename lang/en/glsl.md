# GLSL

- Year: 2002
- Designer(s): John Kessenich, Dave Baldwin, Randi Rost
- Paradigm(s): procedural, concurrent
- Family: hardware-description

## Problem It Aimed to Solve

In early-2000s OpenGL, working with shaders (the mechanism for programming per-vertex and per-pixel rendering processes) required writing low-level assembly-style instruction sequences directly, and code aiming to achieve complex visual effects became extremely cumbersome and hard to maintain. Kessenich and others, working under the OpenGL ARB (the standards body), wanted to create a language that could describe shaders using a readable, high-level syntax similar to C. While preserving the advantages of OpenGL as an open standard, they aimed to open up shader programming to a much wider range of developers by providing a mechanism for describing vertex and pixel (fragment) processing intuitively and programmably.

## Features

- Has a syntax similar to C and can describe processing such as vertex shaders and fragment shaders that runs in parallel on the GPU
- Provides built-in vector and matrix types, allowing the operations needed for 3D graphics to be expressed concisely
- Designed on the assumption that each shader invocation is executed independently, in massive parallel
- Built into the open standard specifications OpenGL (and its successors OpenGL ES and WebGL), and used across a wide range of platforms
- Alongside HLSL (for DirectX), one of the representative shading languages widely used in real-time graphics

## Languages It Was Influenced By

- [C](c.md)


## Languages It Influenced

- [ISPC](ispc.md)
- [WGSL](wgsl.md)


## Current Status

It is active (a language in current, wide use), and it continues to be widely used today as the standard shading language in real-time 3D graphics development using OpenGL, OpenGL ES, and WebGL.

## Hello World

Since GLSL is a language for graphics processing, it has no concept of string output, but a minimal example that outputs a solid color from a fragment shader looks like this.

```glsl
void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // Outputs white instead of "Hello, World!"
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/OpenGL_Shading_Language)
