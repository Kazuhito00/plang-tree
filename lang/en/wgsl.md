# WGSL

- Year: 2021
- Designer(s): Dan Sinclair, David Neto, Myles Maxfield
- Paradigm(s): procedural, array
- Family: hardware-description

## Problem It Aimed to Solve

The existing web graphics API, WebGL, used GLSL ES as its shading language, but WebGPU — the next-generation API meant to safely expose functionality comparable to newer native graphics APIs (Vulkan/Metal/Direct3D 12) inside the browser — needed a new shading language that could satisfy the browser's sandboxing requirements. The W3C's GPU for the Web working group designed WGSL as a safety-focused language that avoids undefined behavior and emphasizes static verification. Its syntax is strongly influenced by Rust, while also drawing on concepts from existing shading languages such as GLSL and HLSL. It is designed to be portable across multiple GPU backends and to guarantee deterministic execution.

## Features

- Adopts a Rust-like syntax, featuring function definitions with `fn`, variable declarations with `let`/`var`, and explicit type annotations
- Thoroughly committed to eliminating undefined behavior; even things like out-of-bounds array access are specified to always have defined behavior
- Attributes such as `@vertex`, `@fragment`, and `@compute` explicitly mark shader stages, allowing multiple stages to be written in a single file
- Designed as an intermediate representation portable across multiple native GPU APIs, including Vulkan, Metal, Direct3D 12, and OpenGL
- Handles GPU resources (buffers, textures, samplers, and so on) in a type-safe manner through structs and binding groups
- Static verification rules out undefined behavior and security issues ahead of time, so it can run safely within a browser's sandboxed environment

## Languages It Was Influenced By

- [Rust](rust.md)
- [GLSL](glsl.md)
- [HLSL](hlsl.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

WGSL is an active language, and standardization continues at the W3C as part of the WebGPU specification. Implementation in major browsers is progressing, and it is increasingly used as the standard shading language for next-generation graphics and GPGPU programming on the web.

## Hello World

Like other shading languages, WGSL has no notion of string output; the equivalent of "Hello World" is a minimal fragment shader that outputs a color to the screen.

```wgsl
@fragment
fn main() -> @location(0) vec4<f32> {
    return vec4<f32>(1.0, 0.0, 0.0, 1.0); // outputs red
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/WebGPU_Shading_Language)
