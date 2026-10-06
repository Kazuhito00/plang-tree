# B

- Year: 1969
- Designer(s): Ken Thompson
- Paradigm(s): procedural
- Family: c-family

## Problem It Aimed to Solve

The PDP-7, on which early Unix was developed at Bell Labs, was a minicomputer with extremely limited memory, too small to run the BCPL implementations of the time as they were. Ken Thompson followed BCPL's design philosophy while creating B as a lightweight, interpreter-based language with a much smaller memory footprint.

The simple, untyped, word-oriented model was inherited from BCPL and was used to write early Unix tools and parts of the kernel. However, the design's heavy reliance on word-oriented memory addressing later exposed its limits when Unix moved to the PDP-11, which used byte-oriented addressing.

## Features

- Like BCPL, it has no types and treats all values as words
- Implemented as an interpreter, it could run even on the memory-constrained PDP-7
- Used to write many utilities as one of the very first Unix development languages
- Poorly suited to the PDP-11's byte-oriented addressing, a constraint that spurred the creation of its successor, C
- Much of its grammar and operators were inherited from BCPL and passed on unchanged to C
- Variable declarations had no type specifier and were implicitly treated as integers (words), a major point of difference from the later C

## Languages It Was Influenced By

- [BCPL](bcpl.md)
- [Fortran](fortran.md)
- [PL/I](pl_i.md)


## Languages It Influenced

- [C](c.md)


## Current Status

B is now regarded as a historical language (status: historical), but thanks to its record of simplifying BCPL and supporting early Unix development, it retains a place in computing history as the direct predecessor of C.

It is never used in practice, but it continues to be referenced as an important point of reference for understanding the design philosophy of C.

## Hello World

This appears in Dennis Ritchie's 1972 "A Tutorial Introduction to the Language B" and is one of the earliest recorded "Hello, world" programs. Since B has no string type, multiple characters are packed into constants stored in external variables, and `putchar` is used to print them one word at a time.

```
main( ) {
    extrn a, b, c;

    putchar(a); putchar(b); putchar(c); putchar('!*n');
}

a 'hell';
b 'o, w';
c 'orld';
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/B_%28programming_language%29)
