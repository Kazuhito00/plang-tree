# TMG

- Year: 1963
- Designer(s): Robert M. McClure
- Paradigm(s): declarative, pattern-matching
- Family: origin

## Problem It Aimed to Solve

In the early 1960s, writing a compiler entirely by hand was a very laborious task; even the parsing portion alone took a great deal of time and effort and was prone to errors. McClure wanted to create a tool that could automatically generate a parser (and by extension a compiler) that worked correctly simply from a declarative description of the grammar rules. TMG (short for "Transmogrifier," meaning something that transforms) built the mechanism of recursive-descent parsing with backtracking directly into the language processor itself, becoming an early pioneer of what is now called a "compiler-compiler," generating a program from a description of grammar rules.

## Features

- Grammar rules are declaratively described as patterns, and recursive-descent parsing is performed automatically based on them
- Includes a backtracking mechanism that can try multiple candidate rules while searching for a parse path that matches the input
- Output (code generation) actions can be written alongside parsing, so it functions as a translator rather than merely a recognizer
- Was actually used in the early days of Unix development to implement the B language and an early version of PL/I called EPL
- An early and important presence in the lineage of modern parser generators (compiler-compilers)

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

TMG is historical, a language whose historical role has ended, and it is no longer used today. It is referenced in the history of compiler technology as an early implementation of the concept of a compiler-compiler.

## Hello World

A TMG program consists of a set of patterns and grammar rules. A rule that simply outputs a string looks something like this:

```
HELLO: .OUT["Hello, World!"];
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/TMG_%28language%29)
