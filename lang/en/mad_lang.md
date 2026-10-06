# MAD

- Year: 1959
- Designer(s): Bernard Galler, Bruce Arden, Robert M. Graham
- Paradigm(s): procedural
- Family: origin

## Problem It Aimed to Solve

In the late 1950s, although FORTRAN and COBOL already existed for early scientific and technical computing on machines such as the IBM 704, there was demand for a simpler and easier-to-use programming tool. Bernard Galler, Bruce Arden, and Robert M. Graham of the University of Michigan developed MAD (Michigan Algorithm Decoder), taking ALGOL 58 (IAL) as a starting point but arriving at a substantially different, original design. Thanks to its fast compilation and easy-to-understand syntax, it was used for programming education at many universities throughout the 1960s. MAD was also used in the development of CTSS, Multics, and the Michigan Terminal System, and the early ELIZA chatbot was written in MAD-SLIP.

## Features

- An original language developed at the University of Michigan, taking ALGOL 58 as a starting point but with its own distinct grammar and semantics
- Its `PRINT COMMENT` statement lets a string be printed as-is, without any format specification
- Designed to compile quickly in a single pass, giving it execution efficiency well suited to university lab environments of the time
- Has its own control constructs for error handling and branching, such as the `WHENEVER` statement
- Was used in the development of major operating systems of the era, including CTSS, Multics, and the Michigan Terminal System
- Its MAD-SLIP dialect was also used in early artificial intelligence research, such as ELIZA

## Languages It Was Influenced By

- [ALGOL 58](algol_58.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

MAD played an important role in university education and systems development in the 1960s, but its practical role ended as FORTRAN, C, and other languages later became widespread, and it is now regarded as a historical language. Its use in early operating system development and artificial intelligence research is still referenced today from the standpoint of the history of computer science.

## Hello World

In MAD, the `PRINT COMMENT` statement lets any string be printed as-is without a format specification.

```
PRINT COMMENT $HELLO WORLD$
END OF PROGRAM
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/MAD_%28programming_language%29)
