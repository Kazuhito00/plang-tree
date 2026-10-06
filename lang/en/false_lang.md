# FALSE

- Year: 1993
- Designer(s): Wouter van Oortmerssen
- Paradigm(s): esoteric, stack-based
- Family: esoteric

## Problem It Aimed to Solve

FALSE was created as a challenge to see how functional a Forth-like stack-based language could be made with a compiler of only 1024 bytes. Rather than practicality itself, it was a minimalist experiment in how much language functionality could be preserved under the constraint of shrinking the compiler's implementation size to the utmost limit, and the resulting terse, symbol-heavy syntax later became one of the starting points of the "esoteric language" genre. The name "FALSE" itself is a wry joke, hinting at a denial of practicality.

## Features

- Has a Forth-like stack-based computational model, but most instructions are pared down to one or two symbols
- Variable names are restricted in principle to a single letter, a through z, with the notion of namespaces cut to a bare minimum
- The language specification itself is extremely simplified so that the compiler implementation fits in just 1024 bytes
- Control structures (conditionals and loops) are also expressed purely through combinations of blocks (`[...]`) and symbolic instructions
- Source code can be written extremely tersely, at a great cost to readability

## Languages It Was Influenced By

- [Forth](forth.md)


## Languages It Influenced

- [Brainfuck](brainfuck.md)
- [Befunge](befunge.md)


## Current Status

FALSE is positioned as an esoteric language and is not used for practical purposes. Owing to its aspect as an experiment in minimal compilers, it continues to be referenced by later designers of esoteric languages as one of the representative works of the genre's early days.

## Hello World

In FALSE, simply writing a string literal directly in the source code causes it to be written to standard output on the spot. As a result, printing "Hello, World!" is completed in just this one line.

```
"Hello, World!"
```

## External Links

No Wikipedia article was found.
