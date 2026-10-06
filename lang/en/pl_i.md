# PL/I

- Year: 1964
- Designer(s): IBM committee
- Paradigm(s): procedural
- Family: origin

## Problem It Aimed to Solve

In the early 1960s, IBM was maintaining two separate languages in parallel: Fortran for scientific and technical computing, and COBOL for business data processing. With the advent of the new System/360 mainframe, IBM believed that creating a single, all-purpose language covering both use cases could reduce development and training costs. PL/I was designed with the ambitious goal of unifying a wide range of features into one language, including numerical computation, string processing, concurrency, and exception handling.

However, the attempt to cover every possible use case caused the language specification itself to balloon in size, making compiler implementation excessively complex. The accumulation of features added through a committee process also ended up raising the learning cost significantly.

## Features

- Aimed to be an "all-purpose language" unifying features of Fortran, ALGOL 60, and COBOL
- Equipped with a wide range of features such as structures, pointers, concurrency, and exception handling (the ON statement)
- Designed for use across the single platform of the System/360
- The specification became bloated, raising both compiler implementation cost and learning cost
- Some features (exception handling, structured control) influenced the design of later languages
- Frequent implicit type conversion via default values was also criticized as a breeding ground for unintended bugs

## Languages It Was Influenced By

- [Fortran](fortran.md)
- [ALGOL 60](algol_60.md)
- [COBOL](cobol.md)


## Languages It Influenced

- [B](b_language.md)
- [C](c.md)
- [Rexx](rexx.md)
- [SAS](sas.md)


## Current Status

PL/I is now positioned as a legacy language (status: legacy). It still runs in some mainframe environments, but it is rarely adopted for new development.

It is often cited in discussions of language design as a cautionary example of a language that tried to cram in too many features.

## Hello World

```pli
HELLO: PROCEDURE OPTIONS(MAIN);
    PUT LIST('Hello, world!');
END HELLO;
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/PL/I)
