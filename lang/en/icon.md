# Icon

- Year: 1977
- Designer(s): Ralph Griswold
- Paradigm(s): pattern-matching, procedural
- Family: scripting

## Problem It Aimed to Solve

SNOBOL4 had excellent expressive power for pattern matching, but its distinctive syntax and limited data structures made it hard to read as a general-purpose programming language and unsuited to writing large-scale programs. Ralph Griswold, the creator of SNOBOL himself, reflected on these shortcomings and designed a successor language that adopted ALGOL-style readable block structure and control constructs while retaining the strength of pattern matching. The goal was a language that could handle both text processing and general application development.

## Features

- Has a unique control mechanism called "goal-directed evaluation," in which expressions return success or failure, allowing iteration and branching to be expressed naturally
- Adopts ALGOL-style structured block and control syntax, giving it high readability
- Has a rich set of built-in data structures such as lists, sets, and tables
- Inherits SNOBOL-derived pattern matching through a string-scanning mechanism
- Introduced the advanced concept of generators (expressions that produce a sequence of values in turn)

## Languages It Was Influenced By

- [SNOBOL](snobol.md)
- [ALGOL 68](algol_68.md)
- [ALGOL 60](algol_60.md)


## Languages It Influenced

- [Unicon](unicon.md)


## Current Status

Icon remains a "niche" language, still used today by some enthusiasts and in text-processing and language-processing research, and the direct successor of Icon itself has been carried forward into Unicon (a Unicode and object-oriented extension of Icon).

## Hello World

```icon
procedure main()
    write("Hello, World!")
end
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Icon_%28programming_language%29)
