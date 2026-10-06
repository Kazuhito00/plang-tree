# Befunge

- Year: 1993
- Designer(s): Chris Pressey
- Paradigm(s): esoteric, stack-based
- Family: esoteric

## Problem It Aimed to Solve

Befunge grew out of the challenge of executing a program as a two-dimensional grid rather than as a traditional one-dimensional sequence of lines. Because the instruction pointer moves freely around the grid, turning up, down, left, or right, this fundamentally defeats the usual technique of a compiler reordering instructions for optimization — it was, in a sense, a challenge in "unoptimizability." The fact that the source code itself can take the form of a picture-like two-dimensional figure also makes this language unique.

## Features

- Treats source code as a two-dimensional grid, with the instruction pointer moving up, down, left, right, and sometimes reversing
- Symbols such as `>`, `<`, `^`, and `v` change the direction of travel of the instruction pointer itself
- Based on stack-based operations, with numbers, operators, and control symbols intermixed on the grid
- Because program execution order does not depend on a one-dimensional sequence of lines, ordinary code optimization techniques are hard to apply
- Many implementations have a "toroidal" execution space, where reaching the edge of the grid wraps around to the opposite edge

## Languages It Was Influenced By

- [Forth](forth.md)
- [FALSE](false_lang.md)


## Languages It Influenced

- [Malbolge](malbolge.md)
- [Piet](piet.md)


## Current Status

Befunge is positioned as an esoteric language and is not used for practical purposes. Owing to its unique two-dimensional execution model, it is especially known among esoteric languages for its distinctive visual appearance, and it has served as a starting point for derivative languages and later visually oriented esoteric languages.

## Hello World

The following is a "Hello World!" output program in Befunge's characteristic style, with the instruction pointer winding up, down, left, and right across the grid.

```
>              v
v  ,,,,,"Hello"<
>48*,          v
v,,,,,,"World!"<
>25*,@
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Befunge)
