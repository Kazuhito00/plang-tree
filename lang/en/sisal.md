# SISAL

- Year: 1983
- Designer(s): James McGraw
- Paradigm(s): functional, dataflow, array
- Family: numeric-scientific

## Problem It Aimed to Solve

In the early 1980s, parallel computers with multiple processors were beginning to spread in scientific and technical computing, but writing and debugging parallel programs involving locks and synchronization was difficult in imperative languages such as Fortran and C. A joint team from Lawrence Livermore National Laboratory, the University of Manchester, and others designed SISAL, a functional language based on the principles of single assignment and dataflow, eliminating side effects so that the compiler could automatically and safely parallelize programs. It added recursion and finite streams to its predecessor, VAL, aiming for execution performance comparable to Fortran.

## Features

- Based on the principle of single assignment, in which every variable is bound to a value only once
- Programs can be analyzed as dataflow graphs, allowing automatically parallelizable sections to be detected purely from data dependencies
- A pure functional language with no side effects; even loops are expressed through side-effect-free constructs such as the `forall` expression
- Supports array operations as first-class citizens, allowing the numerical processing needed for scientific and technical computing to be written efficiently
- Extends its predecessor language VAL by adding recursive calls and finite streams
- Designed with the goal of achieving execution performance comparable to sequential Fortran code

## Languages It Was Influenced By

- [Pascal](pascal.md)
- [C](c.md)
- [Fortran](fortran.md)
- [Lucid](lucid_lang.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

SISAL is positioned as a historical language whose role has largely ended, and it is rarely adopted in new projects today. However, its idea of automatic parallelization based on the principles of single assignment and dataflow continues to be referenced as an important precursor in later research on parallel and functional languages.

## Hello World

SISAL has no explicit `print` statement; the return value of the `main` function serves as the program's output.

```
function main returns array[character]
  "Hello, world!"
end function
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/SISAL)
