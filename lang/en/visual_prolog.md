# Visual Prolog

- Year: 1986
- Designer(s): Prolog Development Center (PDC)
- Paradigm(s): logic, object-oriented, functional, procedural, declarative
- Family: logic-declarative

## Problem It Aimed to Solve

Conventional Prolog implementations, particularly Turbo Prolog, were dynamically typed, which meant errors were hard to catch until runtime, making them ill-suited for developing large-scale, practical applications. Visual Prolog sought to overcome this weakness by incorporating strong static typing and object-oriented concepts into Prolog. It further aimed to refine logic programming into a form applicable to practical software development by providing a commercial integrated development environment capable of building full-fledged GUI applications for Windows.

## Features

- A Prolog implementation with static typing, able to catch many type errors at compile time
- Incorporates object-oriented ideas, allowing design through classes and interfaces
- Based on the fundamental elements of logic programming — predicates, facts, and rules — while also supporting procedural description
- Comes with an integrated development environment (IDE) featuring a GUI builder for Windows
- Continues to be developed and offered as commercial software, with a design geared toward enterprise application development

## Languages It Was Influenced By

- [Prolog](prolog.md)
- [Pascal](pascal.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as a niche language used in a specific field. It continues to see steady use in areas such as enterprise business application development, and is still maintained and offered today as a commercial product by PDC.

## Hello World

```prolog
class main
open core

predicates
    main : core::runnable.
clauses
    main() :-
        stdio::write("Hello, World!"), stdio::nl.

end class main
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Visual_Prolog)
