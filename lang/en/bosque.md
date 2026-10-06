# Bosque

- Year: 2019
- Designer(s): Mark Marron
- Paradigm(s): functional, declarative
- Family: ml-functional

## Problem It Aimed to Solve

Mark Marron of Microsoft Research believed that the structured programming model that became mainstream from the 1970s onward (loops, mutable state, reference identity, and the like) made automated reasoning about and verification of code difficult. Bosque was designed to keep an approachable syntax similar to TypeScript and a coding feel similar to Node/JavaScript, while adopting functional-language semantics akin to ML, aiming for a "regularized programming" that eliminates the elements that breed complexity. It also aimed at research into property verification via SMT solvers and a next-generation intermediate representation and tooling geared toward highly reliable, cloud-native software development. The project was archived as a Microsoft repository in November 2023.

## Features

- Deliberately eliminates elements that make reasoning difficult, such as loops, mutable state, and reference identity
- Adopts an approachable syntax similar to TypeScript, while its semantics are close to ML-family functional languages
- Is designed with property verification via SMT solvers in mind, aiming toward automated verification of program correctness
- Was built as part of research into a next-generation intermediate representation and tooling aimed at high reliability in cloud-native software development
- Has more the character of a research prototype for programming language design than that of a practical language

## Languages It Was Influenced By

- [TypeScript](typescript.md)
- [Standard ML](standard_ml.md)
- [JavaScript](javascript.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Bosque was archived as a Microsoft repository in November 2023, and is positioned as a research project that has finished its historical role. As an experimental attempt at "regularized programming" that eliminates loops and mutable state, it left behind certain insights for the field of programming language research.

## Hello World

```bosque
namespace NSMain;

entrypoint function main(): CString {
    return "Hello, world!"cstring;
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Bosque_%28programming_language%29)
