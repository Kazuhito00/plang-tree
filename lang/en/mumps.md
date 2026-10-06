# MUMPS

- Year: 1966
- Designer(s): Neil Pappalardo, Curt Marble, Robert A. Greenes
- Paradigm(s): procedural
- Family: domain-specific

## Problem It Aimed to Solve

MUMPS (Massachusetts General Hospital Utility Multi-Programming System) was created to manage patient records and test information at Massachusetts General Hospital. The time-sharing systems of the day had extremely limited memory and processing power, and within those constraints a mechanism was needed that would let multiple users access data simultaneously. Development in assembly language was unproductive, and the developers were dissatisfied with it. They therefore aimed to create a dedicated, concisely written language with hierarchical database functionality built in from the start. In responding to the special demands of the medical field, a unique design emerged in which the language itself and the data store were fused together.

## Features

- Built into the language specification is a persistent hierarchical database called "global variables," where assigning to a variable directly manipulates data on disk
- Dynamically typed, treating all values as strings while interpreting them as numbers depending on context
- Allows commands and keywords to be abbreviated extremely tersely, with a grammar that prioritized processing speed within limited memory capacity
- Comes with simultaneous access from multiple processes and mutual exclusion as standard features, designed on the assumption of a multi-user environment
- Has long been used in the healthcare information systems (EHR) field, and still operates today inside major electronic health record systems such as Epic

## Languages It Was Influenced By

- [JOSS](joss.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as niche (a language used in a specific field). It is rarely used in general software development, but it remains actively in operation today as the foundation of medical information systems such as electronic health records, remaining indispensable in that field.

## Hello World

In MUMPS, output is done with the `WRITE` command (abbreviated `W`).

```
WRITE "Hello, World!",!
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/MUMPS)
