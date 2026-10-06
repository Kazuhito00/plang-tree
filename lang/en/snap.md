# Snap!

- Year: 2011
- Designer(s): Jens Mönig, Brian Harvey
- Paradigm(s): visual, functional, object-oriented, event-driven
- Family: educational-visual

## Problem It Aimed to Solve

Snap! was created out of a desire to build on Scratch's accessible block-based interaction while bringing in more substantial computational concepts. It wanted to teach not just sequential processing and event handling, but the core ideas of functional programming — higher-order functions, lambda expressions, first-class procedures — in the form of blocks, without the barrier of technical terminology or text-based syntax. It was designed with a strong emphasis on serving as an introductory teaching tool that lets university students with no prior programming experience experience the essence of computer science early on.

## Features

- Retains Scratch's drag-and-drop block interface, but treats blocks themselves as first-class values that can be passed to other blocks
- Anonymous functions (lambda expressions) can be built directly as blocks, allowing programming with higher-order functions to be learned visually
- Also supports lists of lists (nested structures) and object-oriented-style sprite inheritance, giving it expressive power beyond simple educational use
- Has APL-influenced, set-operation-like blocks (operations corresponding to map, filter, and reduce)
- Runs in the browser and has a degree of compatibility for loading Scratch projects

## Languages It Was Influenced By

- [Scratch](scratch.md)
- [Scheme](scheme.md)
- [Logo](logo.md)
- [Smalltalk](smalltalk.md)
- [APL](apl.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is used for educational purposes. It has been adopted in university-level introductory CS courses, including UC Berkeley's "Beauty and Joy of Computing," and is valued as teaching material that conveys substantial computational theory despite being a block-based language.

## Hello World

By passing the string "Hello, World!" to the "say" block, the sprite displays the message in a speech bubble.

```
say [Hello, World!]
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Snap!_%28programming_language%29)
