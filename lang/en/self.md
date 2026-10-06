# Self

- Year: 1987
- Designer(s): David Ungar, Randall Smith
- Paradigm(s): object-oriented
- Family: smalltalk-oop

## Problem It Aimed to Solve

Smalltalk pursued object orientation thoroughly, but it still presupposed a fixed abstraction hierarchy in which instances were generated from a template called a "class." David Ungar and Randall Smith sought an even more fundamental and uniform object model that did not require classes at all. Through the idea of "prototypes" — cloning an existing object and rewriting only the differences as needed — they wanted to make it possible to build systems more directly and interactively, without having to agonize over the design of a class hierarchy.

## Features

- The originator of prototype-based OOP, with no classes; objects are created by cloning (prototyping) existing objects
- Data and methods are both expressed uniformly through a simple mechanism called slots
- Developed advanced JIT compilation technology that frequently inlines and optimizes at runtime for high-performance execution, which later influenced speed-up techniques in systems such as JavaScript's V8
- Inherited, like Smalltalk, the philosophy of interactive development in a live object environment
- Had major academic influence but did not become widespread as a commercial implementation

## Languages It Was Influenced By

- [Smalltalk](smalltalk.md)
- [APL](apl.md)


## Languages It Influenced

- [Io](io.md)
- [JavaScript](javascript.md)
- [REBOL](rebol.md)
- [Factor](factor.md)
- [Dolittle (ドリトル)](dolittle.md)
- [Squeak](squeak.md)
- [NewtonScript](newtonscript.md)
- [Newspeak](newspeak_lang.md)


## Current Status

It never became widespread commercially and is now positioned as a historical language used mainly for research. However, its prototype-based approach and JIT technology later bore fruit in the form of JavaScript, a technology that developers around the world encounter daily, giving it an extremely large influence.

## Hello World

```
'Hello, world!' printLine.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Self_%28programming_language%29)
