# Pike

- Year: 1994
- Designer(s): Fredrik Hübinette
- Paradigm(s): object-oriented, procedural
- Family: c-family

## Problem It Aimed to Solve

LPC, the predecessor scripting language to Pike, was a language designed for LPMud, an online multi-user dungeon (MUD), but it had limits in versatility and execution speed. Fredrik Hübinette wanted to create a scripting runtime that preserved the familiar object-oriented thinking of LPC while operating faster with a C-like syntax, and so he developed Pike. A core aim of the design was to achieve execution efficiency close to native code while still being dynamically typed.

## Features

- Has a brace-based syntax resembling C, while remaining dynamically typed and easy to script with
- Includes garbage collection, hiding memory management from the programmer
- Provides high-level data types (arrays, mappings, multisets, etc.) built into the language
- Compiles to bytecode and runs on a virtual machine, making it relatively fast among interpreted languages
- Originally used for MUD servers, giving it particular strength in network services and scripting extensions

## Languages It Was Influenced By

- [C](c.md)
- [C++](c_plus_plus.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Pike continues to be used in some projects today (such as the Roxen WebServer), but its user base is limited, placing it in a "niche" position. It never achieved the level of adoption reached by Perl or Python, which emerged around the same time.

## Hello World

```
int main() {
    write("Hello, World!\n");
    return 0;
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Pike_%28programming_language%29)
