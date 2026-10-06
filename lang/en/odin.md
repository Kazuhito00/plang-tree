# Odin

- Year: 2016
- Designer(s): Bill Hall (Ginger Bill)
- Paradigm(s): procedural, systems
- Family: c-family

## Problem It Aimed to Solve

In fields such as game development, where large amounts of data need to be processed efficiently, the idea of Data-Oriented Design (DOD) had come to be emphasized. Bill Hall believed there was a need for a systems programming language that preserved the simplicity and transparency of C while offering modern array and slice features, fast compile times, and language features that made DOD easy to practice, and he began developing Odin in 2016.

## Features

- Provides modern built-in features such as slices and dynamic arrays while keeping a simple syntax close to C
- Makes structure-of-arrays (SoA)-style data layouts easy to handle, to support practicing data-oriented design
- Compiles extremely fast, keeping the development feedback loop short
- Based on manual memory management, but a context system makes it easy to switch allocators
- Adoption is spreading mainly within game development and tool development communities

## Languages It Was Influenced By

- [Pascal](pascal.md)
- [C](c.md)
- [Go](go.md)
- [Oberon](oberon.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is a systems programming language for data-oriented design that has been gaining popularity mainly among game developers, and it continues to be actively developed as an option alongside C, C++, and Rust.

## Hello World

```
package main

import "core:fmt"

main :: proc() {
    fmt.println("Hello, World!")
}
```

## External Links

No Wikipedia article was found.
