# POP-11

- Year: 1975
- Designer(s): Robin Popplestone, Steve Hardy, Chris Mellish, Aaron Sloman, John Williams, Robert Duncan, Simon Nichols, John Gibson
- Paradigm(s): procedural, functional, declarative, symbolic
- Family: lisp-scheme

## Problem It Aimed to Solve

In the 1970s, in AI research and education, Lisp's heavily parenthesized syntax was a barrier for beginners and for programmers accustomed to procedural languages such as Pascal. Popplestone and colleagues at the University of Edinburgh built on their earlier language POP-2 to design POP-11, which offered symbolic-processing, functional, and declarative features through a syntax closer to procedural style. It also incorporated design elements derived from Forth, such as a stack-based model, and came with an interactive development environment and incremental compilation. It was used for a long time as the core language of Poplog, an integrated environment for AI education and research.

## Features

- Supports symbolic processing and list manipulation through readable, procedural-like syntax rather than Lisp-style nested parentheses
- Adopts an evaluation model, derived from Forth, in which values are passed via a stack
- A multi-paradigm language that lets functional, declarative, and symbolic-processing features be freely combined within a procedural framework
- Incremental compilation allows development to proceed interactively while defining functions
- As the core language of the integrated development environment Poplog, it could interoperate seamlessly with other AI-oriented languages such as Prolog and Lisp

## Languages It Was Influenced By

- [Forth](forth.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

POP-11 is positioned as a niche language and is rarely used in new software development today. However, it is still referenced within the historical lineage of AI research and education alongside the Poplog environment, and continues to be maintained and used by some educational institutions and researchers.

## Hello World

POP-11's characteristic interactive style involves pushing a value onto the stack and printing it with the `=>` operator.

```
'Hello, world!' =>
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/POP-11)
