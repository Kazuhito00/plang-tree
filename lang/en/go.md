# Go

- Year: 2009
- Designer(s): Robert Griesemer, Rob Pike, Ken Thompson
- Paradigm(s): procedural, concurrent
- Family: c-family

## Problem It Aimed to Solve

In the late 2000s, inside Google, it had become normal for builds of C++ codebases spanning hundreds of millions of lines to take tens of minutes, and the complexity of dependencies and the difficulty of writing concurrent code were significantly undermining development efficiency. Robert Griesemer, Rob Pike, and Ken Thompson aimed to create a language with fast compilation, a simple language specification, and concurrency as a first-class feature, in order to meet the needs of developing large-scale distributed systems at a scale like Google's. Ken Thompson had also been a party to the birth of Unix/C, and Go strongly reflects the systems-programming experience the three had accumulated.

## Features

- A lightweight concurrency model based on goroutines and channels (grounded in CSP theory)
- A simple grammar and minimal set of language features that enable fast compilation
- Garbage collection combined with native compilation nearly as fast as C
- Loose abstraction through an interface-based type system with no inheritance
- Comes standard with a powerful standard library and toolchain (gofmt, go modules, etc.)
- No exception mechanism; adopts a design of explicitly returning error values
- Easy deployment via static linking into a single binary
- Composition-based code reuse through struct embedding (no inheritance)
- A design philosophy that eliminates style debates by unifying code formatting with gofmt
- Simple dependency management and versioning via go modules
- Later versions introduced generics, making it possible to write type-safe generic code as well
- Cross-compilation built in as a standard feature
- Syntactic conveniences such as `defer` for writing cleanup logic, making resource management concise

## Languages It Was Influenced By

- [C](c.md)
- [Oberon](oberon.md)
- [Smalltalk](smalltalk.md)
- [occam](occam.md)
- [Pascal](pascal.md)


## Languages It Influenced

- [Zig](zig.md)
- [Crystal](crystal.md)
- [V](v_lang.md)
- [Odin](odin.md)
- [Ballerina](ballerina.md)
- [CUE](cue_lang.md)


## Current Status

Wielding simplicity and concurrency performance as its weapons, Go has been widely adopted in cloud infrastructure platforms such as Docker and Kubernetes, and remains actively used today as one of the leading languages in cloud-native development. Although its initial emphasis on simplicity drew some criticism, it has since gradually expanded its feature set—introducing generics, for example—while maintaining a consistent design philosophy.

## Hello World

```
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Go_%28programming_language%29)
