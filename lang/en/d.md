# D

- Year: 2001
- Designer(s): Walter Bright
- Paradigm(s): object-oriented, procedural, generic
- Family: c-family

## Problem It Aimed to Solve

As a developer of a C++ compiler, Walter Bright had long felt the pain of development complications arising from C++'s complicated build model (multiple header file inclusion, the text-based preprocessor, an incomplete type system). He wanted to keep C++-level native execution speed and systems-programming capability while integrating modern language features such as garbage collection and a module system from the outset, and so he designed D. A notable feature is that, by deliberately discarding backward compatibility with C++, it aimed for a clean design unencumbered by past baggage.

## Features

- A module-based build system that discards header files while keeping C++-like syntax
- Comes with garbage collection by default, but manual memory management can also be chosen
- Powerful compile-time function evaluation (CTFE) and template/generics functionality
- Interoperability with C and, to some extent, C++
- Built-in language support for contract programming (preconditions/postconditions) and unit testing
- Safe, expressive data-manipulation features such as array slices and ranges
- Modes such as @nogc and betterC that let you avoid garbage collection
- Unit testing functionality and documentation generation built into the standard library
- Can link directly with C, making it easy to leverage existing C library assets
- Strong type inference and immutable/const qualifiers that raise the baseline level of safety
- Compile-time code generation and reuse via mixins
- Generic programming and compile-time programming via templates
- Multiple compiler implementations exist (DMD, GDC, LDC), each with a different optimization backend

## Languages It Was Influenced By

- [C++](c_plus_plus.md)
- [Java](java.md)
- [C](c.md)
- [Python](python.md)
- [Ruby](ruby.md)


## Languages It Influenced

- [Vala](vala.md)


## Current Status

D was an ambitious language born out of reflection on C++'s shortcomings, but attention has since been drawn away by languages such as Rust and Go that appeared later, and it now remains a niche language with a limited following. Even so, its design philosophy of combining fast compilation with C++-level performance is supported by a loyal fan base, and development continues at a slow but steady pace.

## Hello World

```
import std.stdio;

void main() {
    writeln("Hello, World!");
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/D_%28programming_language%29)
