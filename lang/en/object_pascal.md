# Object Pascal (Delphi)

- Year: 1986
- Designer(s): Apple/Borland (later Anders Hejlsberg and others)
- Paradigm(s): object-oriented, procedural
- Family: algol-pascal

## Problem It Aimed to Solve

In the mid-1980s, the arrival of the Macintosh made GUI application development rapidly important, but Pascal at the time lacked object-oriented concepts and had no flexible means of abstracting GUI components such as windows and buttons.

Apple developed Object Pascal, an object-oriented extension for the Mac, which Borland later took over and developed further.

In particular, the Delphi environment created by Anders Hejlsberg at Borland made it possible to assemble GUIs by drag-and-drop while retaining Pascal's readable syntax, realizing a RAD (Rapid Application Development) tool that was widely embraced as a practical option for Windows application development.

## Features

- Object-oriented features including classes, inheritance, and polymorphism
- Readable, strict syntax inherited from Pascal
- Visual form design and RAD development integrated with the Delphi environment
- High reusability through a component-based architecture
- Fast execution performance thanks to native compilation
- Designed for business applications, with database access features built in from the start

## Languages It Was Influenced By

- [Pascal](pascal.md)
- [Smalltalk](smalltalk.md)
- [Simula](simula.md)


## Languages It Influenced

- [C#](c_sharp.md)
- [Nim](nim.md)
- [Modula-3](modula_3.md)


## Current Status

Object Pascal (Delphi) is currently positioned as a niche language and no longer has the momentum it once had.

However, thanks to the ongoing evolution of the Delphi environment, it is still used in some business system development. As the language that drove the RAD boom of the 1990s, its design philosophy has been carried forward into later languages such as C#.

## Hello World

```
program HelloWorld;

{$APPTYPE CONSOLE}

begin
  Writeln('Hello, World!');
  Readln;
end.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Object_Pascal)
