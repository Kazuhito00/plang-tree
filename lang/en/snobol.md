# SNOBOL

- Year: 1962
- Designer(s): Ralph Griswold and others (Bell Labs)
- Paradigm(s): pattern-matching, procedural
- Family: scripting

## Problem It Aimed to Solve

In the early 1960s, text processing was mainly done in Fortran or assembly, but these languages lacked any facility for structurally pattern-matching and rewriting strings, making them ill-suited to purposes such as symbolic processing, natural language analysis, and compiler parsing. Ralph Griswold and others at Bell Labs aimed to build a language that could describe text processing more naturally than any language of its time, by embedding the operation of searching for a pattern within a string and replacing the matched portion as a core feature of the language itself. The resulting SNOBOL established a pioneering design that treated patterns as a first-class data type.

## Features

- Treats patterns as a first-class data type that can be assigned to variables and combined
- Has a "match and replace" mechanism that performs string matching and rewriting (substitution) at the same time
- Adopts failure-driven control flow, branching according to whether a pattern match succeeds or fails
- A flexible, dynamically typed variable system in which types are determined at runtime
- Used across a broad range of fields, including language processing, text analysis, and artificial intelligence research

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

- [Lua](lua.md)
- [AWK](awk.md)
- [Icon](icon.md)


## Current Status

It is a "historical" language that has vanished from among today's mainstream languages, but it is valued as a pioneer that passed on the concept of string pattern matching to many later text-processing languages.

## Hello World

```snobol
	OUTPUT = "Hello, World!"
END
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/SNOBOL)
