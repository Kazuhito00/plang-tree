# Rexx

- Year: 1979
- Designer(s): Mike Cowlishaw
- Paradigm(s): procedural, scripting
- Family: scripting

## Problem It Aimed to Solve

On IBM mainframes (CMS), EXEC and EXEC 2 were used as scripting languages, but they had limited functionality and insufficient expressiveness for writing more complex processing. Rexx was designed as a general-purpose macro language that had the expressiveness of a full-fledged programming language like PL/I, while also having a syntax simple enough for beginners to learn. A major characteristic is that it was designed as a "glue language" that was not tied to any particular application and could be embedded into any program.

## Features

- A dynamically typed procedural language in which variables require no type declaration and can flexibly handle both strings and numbers
- Has clear control structures such as DO/END and IF/THEN/ELSE, known as "REXX structured programming"
- Has a unified mechanism for calling external functions and commands, making it easy to embed into host applications (CMS, TSO, OS/2, etc.)
- Comes with a rich set of string-processing functions, making it strong for macro-oriented uses such as text processing and report generation
- Beyond IBM products, it was standardized by ISO and ported to a variety of platforms

## Languages It Was Influenced By

- [PL/I](pl_i.md)
- [ALGOL 68](algol_68.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Rexx is a niche language used in specific fields. It continues to be used today in the maintenance and operation of IBM mainframe and OS/2 environments, but its adoption in new development has become limited.

## Hello World

Rexx is characterized by a simple syntax in which the `SAY` instruction is used to print a string to standard output.

```rexx
SAY 'Hello, World!'
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Rexx)
