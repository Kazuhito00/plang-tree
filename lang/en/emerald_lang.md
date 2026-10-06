# Emerald

- Year: 1986
- Designer(s): Andrew P. Black, Norman C. Hutchinson, Eric Jul, Henry M. Levy
- Paradigm(s): object-oriented, concurrent
- Family: concurrent-actor

## Problem It Aimed to Solve

In the 1980s, there was a shortage of programming languages that could move and place objects across a distributed system while preserving performance. Researchers at the University of Washington, building on the lineage of Pascal, Simula, and Smalltalk, aimed to build object mobility and location transparency into the language as first-class concepts. Equal emphasis was placed on being able to write distributed programs concisely while preserving information hiding. Designed as a small, practical language, it went on to influence later work on Java and distributed operating systems research.

## Features

- Builds "mobility"—the ability for objects to move between nodes on a network—into the language specification as a first-class concept
- Provides location transparency, so programmers need not be aware of which node an object currently resides on
- Combines object-oriented abstraction descending from Simula and Smalltalk with static typing inherited from Pascal
- Allows inter-process communication and distributed placement of objects to be expressed without writing complex communication protocols directly
- Keeps the language core small, prioritizing practicality suited to experimentation and research in distributed programming

## Languages It Was Influenced By

- [Pascal](pascal.md)
- [Simula](simula.md)
- [Smalltalk](smalltalk.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Emerald is positioned as a historical language and is not used in production today. However, its idea of distributed object mobility is said to have indirectly influenced later work on Java and research into distributed operating systems.

## Hello World

Emerald centers its syntax around object definitions and message sending. Below is a conceptual Hello World example.

```
const main <- process
process boot()
  System.print("Hello, world")
end boot
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Emerald_%28programming_language%29)
