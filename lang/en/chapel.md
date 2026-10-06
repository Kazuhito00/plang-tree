# Chapel

- Year: 2009
- Designer(s): David Callahan, Hans Zima, Brad Chamberlain
- Paradigm(s): object-oriented, concurrent, array, procedural
- Family: numeric-scientific

## Problem It Aimed to Solve

Chapel was developed to address the problem that, in the field of HPC (high-performance computing), parallel programming combining Fortran or C/C++ with MPI was complex and offered low productivity. In conventional approaches, the description of the algorithm itself and the implementation details of data distribution and parallelization tended to become closely intertwined, making the code hard to follow. Chapel aimed to separate these two concerns, adopting a design that allows an algorithm to be expressed concisely while still permitting control over the details of parallel execution when needed. Another notable aim was to make the language easy to write for both HPC engineers accustomed to Fortran/C and a newer generation of developers accustomed to Java or Python.

## Features

- Adopts the concept of global-view parallelism, allowing an entire distributed-memory system to be described as if it were a single address space
- Has rich built-in support for arrays, allowing multi-dimensional arrays and their distribution methods to be specified declaratively
- Provides both task parallelism and data parallelism as first-class language features
- Has object orientation and generics, balancing modern language features with the demands of high-performance computing
- Based on the PGAS (Partitioned Global Address Space) model, allowing data placement across nodes to be handled either explicitly or implicitly

## Languages It Was Influenced By

- [C](c.md)
- [C++](c_plus_plus.md)
- [Java](java.md)
- [Ada](ada.md)
- [Fortran](fortran.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Chapel is positioned as active (a language that is currently in wide use). Development continues as open source, centered on Cray (now HPE), and it is used in the fields of scientific and technical computing and data-parallel processing on supercomputers.

## Hello World

In Chapel, `writeln` is used to write to standard output.

```chapel
writeln("Hello, World!");
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Chapel_%28programming_language%29)
