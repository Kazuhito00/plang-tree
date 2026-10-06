# SIMSCRIPT

- Year: 1962
- Designer(s): Harry Markowitz, Bernard Hausner
- Paradigm(s): procedural, event-driven
- Family: origin

## Problem It Aimed to Solve

In 1962 at the RAND Corporation, there was a demand for a way to let anyone build and maintain large-scale discrete-event simulations using free-form descriptions close to English. SIMSCRIPT was implemented as a preprocessor built on top of Fortran, aiming to be a dedicated language that could efficiently describe structured, modularized simulation models. It represented system state using the concepts of entities, attributes, and sets, and built programs around the occurrence of events over time, a design that became a precursor of event-driven simulation. It is also known for having Harry Markowitz, the Nobel laureate economist famous for his work in financial engineering, involved in its design.

## Features

- Models system state using the concepts of entities, attributes, and sets
- Adopts an event-driven programming style centered on the occurrence and handling of events
- Aims for descriptions readable even by non-programmers through a free-form syntax close to English
- Implemented as a preprocessor built on top of Fortran, making use of an existing computational foundation
- Has a large number of dedicated language features specialized for discrete-event simulation

## Languages It Was Influenced By

- [Fortran](fortran.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as niche (a language used in a specific field). While in modern times it has ceded its role to its successor, SIMSCRIPT II, and to other simulation-specific languages and tools, it is still referenced in some simulation fields today.

## Hello World

```
PREAMBLE
END
MAIN
PRINT 1 LINE THUS
Hello, World!
END
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/SIMSCRIPT)
