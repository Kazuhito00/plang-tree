# Fortress

- Year: 2006
- Designer(s): Guy L. Steele Jr., Sun Microsystems
- Paradigm(s): procedural, functional, concurrent, generic
- Family: numeric-scientific

## Problem It Aimed to Solve

Fortress was developed as part of DARPA's High Productivity Computing Systems (HPCS) program, aiming to be a next-generation scientific computing language to succeed Fortran. It sought to let programs be written in notation close to mathematical formulas, directly reflecting the notation that mathematicians and scientists were already accustomed to. Anticipating an era in which parallel computing was becoming the hardware norm, the language's basic policy was for code to be executed in parallel implicitly, without explicit parallelization directives. It also incorporated modern language features such as type safety and generics, aiming to achieve both high performance and safety at once.

## Features

- Programs can be written in notation close to a mathematics textbook, using Unicode mathematical symbols and Greek letters
- Iteration constructs such as for-loops are designed to execute in parallel by default, making sequential execution the exceptional case
- Integrates elements of both object-oriented and functional programming, including static typing, generics, and multiple dispatch via traits
- Supports quantities with units (physical units), allowing the type system to catch errors specific to scientific computing
- Had mechanisms for integrating dependencies between components and tests directly into the code

## Languages It Was Influenced By

- [Fortran](fortran.md)
- [Scala](scala.md)
- [Haskell](haskell.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Fortress is positioned as historical (a language that has finished its historical role). Development was discontinued by Sun (by then Oracle) in 2012, and the implementation was never completed. However, its ideas of implicit parallelism and mathematical notation remain a reference point in discussions on the design of later scientific computing languages.

## Hello World

In Fortress, a program is defined as a `component`, with the `run` function serving as the entry point.

```
component HelloWorld
export Executable
run(args: String...): () = do
  println "Hello, World!"
end
end
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Fortress_%28programming_language%29)
