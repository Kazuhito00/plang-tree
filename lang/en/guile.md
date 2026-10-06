# Guile

- Year: 1993
- Designer(s): The GNU Project (Jim Blandy and others)
- Paradigm(s): functional, symbolic processing
- Family: Lisp/Scheme family

## Problem It Aimed to Solve

The GNU Project needed an official, unified runtime that could be embedded in various applications as an extension language. At the time, applications each used their own scattered Lisp dialect, as Emacs Lisp did, and to avoid this fragmentation, Guile was developed as an embeddable Scheme implementation that conformed to a standardized Scheme specification (R5RS, etc.) while making integration with C easy. The goal was for the whole of GNU software to share a common extension-language foundation.

Tcl had originally been considered a leading candidate, but calls for a more expressive language led to the adoption of the Scheme-based Guile, which came to be positioned as GNU's official extension language.

## Features

- Positioned as the official extension language of the GNU Project (the GNU Extension Language)
- Conforms to the Scheme standards (R5RS/R7RS) while also providing its own extensions
- Provides an API that makes it easy to embed in applications written in C
- Also adopted as the implementation language of the GNU Guix package management system
- Has Scheme-derived features such as tail-call optimization and continuations
- Designed for multi-language support, allowing several languages (Emacs Lisp, ECMAScript, etc.) to run on the same VM
- Has its own bytecode VM, enabling fast execution of compiled code

## Languages It Was Influenced By

- [Scheme](scheme.md)
- [Lisp](lisp.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Although Guile is a "niche" language, it is positioned as the official extension language of the GNU Project and continues to be used in practice in some important GNU software, most notably GNU Guix. As the standard means of extension within the GNU ecosystem, it is expected to remain an important foundation for GNU software going forward.

## Hello World

```
(display "Hello, World!")
(newline)
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/GNU_Guile)
