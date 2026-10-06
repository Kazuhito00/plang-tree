# sed

- Year: 1974
- Designer(s): Lee E. McMahon
- Paradigm(s): scripting, pattern-matching
- Family: scripting

## Problem It Aimed to Solve

The line editor `ed` was a familiar tool for early Unix developers, but repeatedly typing the same interactive editing commands across multiple files or large numbers of lines was inefficient. Lee E. McMahon set out to create a "stream editor" that carried over `ed`'s command set but could be run as a script in a single batch, without any interaction with the user, aiming to automate mechanical text transformation across whole files as a batch process.

## Features

- Reads input line by line, applying edit operations such as substitution, deletion, and insertion while pattern-matching with regular expressions
- Requires no interactive operation and can be run automatically from a script as part of a pipeline
- Has a concise command language inherited from `ed`'s command set
- Has internal buffer mechanisms called the pattern space and hold space that retain state
- Specializes in self-contained text transformation, with minimal complex control structures or arithmetic

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

- [Perl](perl.md)
- [AWK](awk.md)


## Current Status

Nearly half a century later, sed remains an "active" language, still built into pipeline processing as a standard tool on Unix-like operating systems, and it remains in active use as a staple of text transformation in shell scripts.

## Hello World

```sh
echo | sed 's/^.*$/Hello, World!/'
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Sed)
