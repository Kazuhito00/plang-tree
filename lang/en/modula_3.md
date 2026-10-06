# Modula-3

- Year: 1988
- Designer(s): DEC/Olivetti (Luca Cardelli and others)
- Paradigm(s): procedural, object-oriented
- Family: algol-pascal

## Problem It Aimed to Solve

In the late 1980s, concepts such as automatic memory management via garbage collection, exception handling, and object orientation were becoming increasingly important in software development.

Researchers at DEC's Systems Research Center and at Olivetti wanted to build on Modula-2 while integrating these then-cutting-edge concepts into the language without compromising safety.

Rather than simply bolting on new features, the goal was to modernize the language while preserving Modula-2's existing design philosophy of "simplicity" and "safety."

## Features

- Automatic memory management via language-built-in garbage collection
- Structured error handling via an exception-handling mechanism
- Support for object-oriented classes and methods
- Concurrency features via threads and monitors
- A module system and strict type safety inherited from Modula-2
- A distinction between traced and untraced pointer types that guarantees the safety of pointer operations

## Languages It Was Influenced By

- [Modula-2](modula_2.md)
- [Ada](ada.md)
- [Oberon](oberon.md)
- [Pascal](pascal.md)
- [Object Pascal(Delphi)](object_pascal.md)


## Languages It Influenced

- [C#](c_sharp.md)
- [OCaml](ocaml.md)
- [Python](python.md)


## Current Status

Modula-3 is now a historical language, and it is generally regarded as a research language whose practical adoption remained limited.

Even so, its design, which safely integrated garbage collection and exception handling, was forward-looking, and it is credited with having indirectly influenced the design of later languages such as Python. Today it is rarely, if ever, used for new development.

## Hello World

```
MODULE Main;

IMPORT IO;

BEGIN
  IO.Put("Hello, world!\n");
END Main.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Modula-3)
