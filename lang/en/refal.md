# REFAL

- Year: 1968
- Designer(s): Valentin Turchin
- Paradigm(s): functional, pattern-matching, symbolic
- Family: ml-functional

## Problem It Aimed to Solve

In the Soviet Union of the 1960s, there was a demand for a language that could perform symbolic computation over strings and list structures (such as natural language processing, symbolic mathematics, and program transformation) in a way that was both mathematically simple and clear, yet practical for writing large-scale programs. Valentin Turchin designed Refal, a functional language based on pattern matching and term rewriting rather than Lisp's list orientation, making it possible to express transformations of tree-structured data naturally. Later implementations such as Refal-2 and Refal-5 were built, and the language has continued to be used in symbolic-processing research and the theory of program transformation.

## Features

- Programs are written as a series of rewriting rules (pattern → expression); when a pattern matches an input expression, it is replaced with the corresponding expression
- Rather than Lisp-style lists, tree-structured "expressions" are the basic unit of data, and their structure can be directly decomposed and constructed through pattern matching
- Has no notion of function calls; all computation proceeds as a repeated series of term rewrites
- Variables carry no type; data is represented with a simple model consisting only of symbols (atoms) and nested structures
- Has been used in research on program transformation and metaprogramming (it is the origin of "supercompilation")

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

REFAL is positioned as a niche language with very limited practical use today. On the other hand, as the origin of the program-transformation theory of "supercompilation" proposed by Turchin, it continues to attract academic interest in the field of program optimization and transformation research.

## Hello World

In Refal, a program's entry point is declared with `$ENTRY`, and the built-in function `Prout` outputs a string.

```
$ENTRY Go {
  = <Prout 'Hello, world!'>;
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Refal)
