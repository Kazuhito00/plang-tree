# Mesa

- Year: 1976
- Designer(s): Chuck Geschke, Butler Lampson, Jim Mitchell, Ed Satterthwaite
- Paradigm(s): procedural, concurrent, systems
- Family: c-family

## Problem It Aimed to Solve

In the 1970s, Xerox PARC needed a strongly typed language supporting separate compilation in order to develop advanced system software for the Alto workstation. The Mesa development team built on Pascal's clear syntax as a foundation while incorporating a module mechanism that separated interface from implementation, concurrency control via monitors, and an exception-handling mechanism, aiming for a language that could robustly build large-scale system software. A distinctive feature was that it was an "engineering language" for multiple developers collaborating to build a massive system, rather than for a single programmer. This design philosophy was carried forward into its successor Cedar and into Modula-2, and even, more distantly, into Java.

## Features

- Separates interfaces from implementations (modules), enabling large-scale development through separate compilation
- Has a synchronization mechanism called monitors, allowing concurrent programs to be written safely
- Has an exception-handling mechanism, allowing error-handling processing to be described in a structured way
- Adopts Pascal-like, strongly typed syntax while also allowing the low-level control needed for systems programming
- Incorporates forward-looking ideas of garbage collection and automatic memory management

## Languages It Was Influenced By

- [Pascal](pascal.md)
- [ALGOL 68](algol_68.md)


## Languages It Influenced

- [Java](java.md)
- [Euclid](euclid.md)
- [Cedar](cedar.md)


## Current Status

It is positioned as historical (a language whose historical role has ended). It was used only internally at Xerox PARC and never achieved widespread adoption, but its design around modules, exception handling, and concurrency control left a strong influence on later languages such as Modula-2 and Java.

## Hello World

```
DIRECTORY
  IO;

Hello: PROGRAM =
BEGIN
  IO.PutFL["Hello, World!\n"];
END.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Mesa_%28programming_language%29)
