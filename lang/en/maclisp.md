# Maclisp

- Year: 1966
- Designer(s): Richard Greenblatt, Jon L. White
- Paradigm(s): functional, procedural, symbolic
- Family: lisp-scheme

## Problem It Aimed to Solve

In 1966, within MIT's Project MAC, there was a need for a faster Lisp implementation that would resolve the problem of slow variable access caused by Lisp 1.5's reliance on association-list lookup. By providing practical features such as functions and macros that take variable-length arguments, arrays, non-local exits, and fast numeric operations, Maclisp aimed to achieve execution speeds that could withstand the demands of developing large-scale AI programs. What is notable is that rather than being merely a theoretical implementation, it was polished into a practical tool actually used at the MIT Artificial Intelligence Laboratory. It was ported to multiple machine architectures over many years and was an especially influential presence among early Lisp implementations.

## Features

- Achieves fast variable access that does not rely on association-list lookup
- Has a macro mechanism, allowing flexible writing of programs that generate programs
- Has many practically advanced features for its time, such as arrays and variable-argument functions
- Has non-local exits (control structures similar to catch/throw), enabling complex control flow
- Supports fast numeric operations, with performance able to withstand the execution of large-scale AI programs

## Languages It Was Influenced By

- [Lisp](lisp.md)


## Languages It Influenced

- [Common Lisp](common_lisp.md)
- [LFE](lfe.md)


## Current Status

Maclisp is positioned as historical (a language that has finished its historical role). Maclisp itself is no longer used, but as an early Lisp implementation it carries historical significance for having influenced many later Lisp dialects.

## Hello World

```
(PRINT '|Hello, World!|)
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Maclisp)
