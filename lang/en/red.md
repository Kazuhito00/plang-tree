# Red

- Year: 2011
- Designer(s): Nenad Rakocevic
- Paradigm(s): functional, scripting
- Family: scripting

## Problem It Aimed to Solve

REBOL drew attention for its concise design that unified code and data, but its execution speed was slow and it was unsuited to systems programming or native compilation, so developers were ultimately forced to fall back on C or C++ for lower-level tasks. Nenad Rakocevic, a member of the REBOL community, designed Red to preserve REBOL's expressiveness and ease of use while aiming for a "full stack" language capable of handling everything from scripting to OS-level systems description within a single language.

## Features

- Inherits REBOL's dialects (a mechanism for embedding domain-specific mini-languages) and concise syntax
- Native compilation enables faster execution than REBOL
- Has a low-level subset called "Red/System" for memory manipulation and systems programming
- Aims for cross-platform distribution as a single binary
- Comes with a built-in standard GUI toolkit despite being a scripting language

## Languages It Was Influenced By

- [REBOL](rebol.md)
- [Lisp](lisp.md)
- [Scala](scala.md)
- [Lua](lua.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Red is a "niche" language whose development continues today within a small community of developers, positioned as an attempt to extend REBOL's philosophy into the field of systems programming.

## Hello World

```red
Red []
print "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Red_%28programming_language%29)
