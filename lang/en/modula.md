# Modula

- Year: 1975
- Designer(s): Niklaus Wirth
- Paradigm(s): procedural, concurrent
- Family: algol-pascal

## Problem It Aimed to Solve

Wirth, the designer of Pascal, realized while actually building large-scale programs that Pascal itself lacked mechanisms for organizing and managing large programs. There was no way to bundle related types, variables, and procedures together and hide them from the outside, so programs became harder to keep track of as they grew larger. Wirth wanted to introduce a "module" mechanism into Pascal that could bundle related declarations together as a single unit. He also wanted the language itself to support the concept of "multiprogramming," safely executing multiple processes concurrently, in order to meet the growing needs of concurrency and real-time control that were emerging at the time.

## Features

- Built on Pascal's grammar as a foundation, while newly introducing a module mechanism that bundles declarations together and hides them from the outside
- Built-in language features such as processes and signals allow concurrent processing (multiprogramming) to be written directly
- Brought a structuring philosophy for large-scale programs, with attention to per-module compilation and information hiding
- Preserves Pascal's simplicity and solidity while also accounting for the low-level features needed for systems programming
- Strongly experimental in character; its ideas were later refined into a more polished form in its successor, Modula-2

## Languages It Was Influenced By

- [Pascal](pascal.md)


## Languages It Influenced

- [Euclid](euclid.md)


## Current Status

Modula is historical (a language that has finished its historical role), and is not used on its own today. However, its ideas of a module mechanism and concurrency were carried directly into its successor, Modula-2, leaving a major mark on the design of subsequent structured programming languages.

## Hello World

```
MODULE Hello;
    FROM InOut IMPORT WriteString, WriteLn;
BEGIN
    WriteString("Hello, World!");
    WriteLn
END Hello.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Modula)
