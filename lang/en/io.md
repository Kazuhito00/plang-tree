# Io

- Year: 2002
- Designer(s): Steve Dekorte
- Paradigm(s): object-oriented
- Family: smalltalk-oop

## Problem It Aimed to Solve

Self had demonstrated the groundbreaking concept of prototype-based object orientation, but its implementation had grown complex and large in order to achieve high-performance JIT compilation. Steve Dekorte wanted to simplify as much as possible the prototype-based thinking that Self had pioneered, and rebuild it as a very small runtime that could withstand embedded use as well. His goal was to achieve, in a lightweight implementation, a purity even more thoroughgoing than Smalltalk's, treating everything uniformly as message sending.

## Features

- A pure prototype-based language with no classes, in which objects are created by cloning other objects
- Both syntax and semantics are extremely small, a minimal design that lets the entire language specification be grasped in a short time
- Has its own concurrency model (actor-like), based on coroutines
- A consistency in which even control structures themselves are implemented as message sends
- Never spread into commercial or industrial use; known instead as an instructional example for studying language design

## Languages It Was Influenced By

- [Self](self.md)
- [Smalltalk](smalltalk.md)
- [Lua](lua.md)
- [Lisp](lisp.md)
- [Python](python.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Io is now positioned as a historical language, with little active practical use remaining. However, its minimal, consistent prototype-based design continues to be referenced as material for language-runtime design and education.

## Hello World

```
"Hello, world!" println
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Io_%28programming_language%29)
