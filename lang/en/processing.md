# Processing

- Year: 2001
- Designer(s): Casey Reas, Ben Fry
- Paradigm(s): object-oriented, visual
- Family: jvm-dotnet

## Problem It Aimed to Solve

Casey Reas and Ben Fry, both from the MIT Media Lab, noticed that when designers and visual artists tried to prototype expressions using computer graphics, the boilerplate code needed for full-fledged Java class definitions and GUI setup was a major barrier. Even for creators without formal programming training, there was a need for an environment where they could immediately draw shapes and animations on screen and iterate through trial and error by writing just a few lines of code. Rather than using Java as-is, Processing addressed this by layering a simplified grammar and a sketch-oriented development environment on top of it.

## Features

- Concise syntax that lets a drawing loop start with only the minimal functions setup()/draw()
- Can use most of the Java language as-is, but greatly omits boilerplate code
- A development style of repeated prototyping in small program units called "sketches"
- Comes standard with APIs for creative purposes such as 2D/3D graphics, images, and sound
- Widely adopted as a bridge between programming education and media art production
- A dedicated integrated development environment (Processing IDE) unifies writing and running code

## Languages It Was Influenced By

- [Java](java.md)
- [PostScript](postscript.md)
- [Logo](logo.md)
- [BASIC](basic.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Processing remains in active use today as a staple language and development environment in creative coding education and art production. It has been adopted at art and design education institutions around the world as an entry point through which programming beginners and designers engage with code through visual expression, and community-driven development continues.

## Hello World

```
void setup() {
  println("Hello, World!");
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Processing_%28programming_language%29)
