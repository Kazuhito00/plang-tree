# Ada

- Year: 1980
- Designer(s): Jean Ichbiah
- Paradigm(s): procedural, object-oriented, concurrent
- Family: algol-pascal

## Problem It Aimed to Solve

In the 1970s, development of weapons systems and embedded software managed by the U.S. Department of Defense (DoD) suffered from the proliferation of hundreds of different programming languages across projects, causing serious problems for both maintainability and cost.

To break out of this situation, the DoD held an international competition, and the proposal from the French CII Honeywell Bull team led by Jean Ichbiah was selected.

The goal was to fundamentally improve the maintainability, portability, and safety of long-lived weapons systems by unifying development around a single, highly reliable language. The language's name comes from Ada Lovelace, regarded as the world's first programmer.

## Features

- Strong static typing and rigorous compile-time checks for early bug detection
- Built-in concurrency mechanism via tasks, standardized in the language specification
- Modularization through packages and support for generics
- Robust error handling through an exception mechanism
- Designed for embedded and real-time systems that demand high reliability
- Mechanisms such as range-constrained types and overflow checking that increase runtime safety

## Languages It Was Influenced By

- [Pascal](pascal.md)
- [ALGOL 68](algol_68.md)
- [Simula](simula.md)
- [Modula-2](modula_2.md)


## Languages It Influenced

- [C++](c_plus_plus.md)
- [Nim](nim.md)
- [Modula-3](modula_3.md)
- [Eiffel](eiffel.md)
- [Ruby](ruby.md)
- [Java](java.md)
- [PL/SQL](plsql.md)
- [Verilog](verilog.md)
- [VHDL](vhdl.md)
- [Chapel](chapel.md)
- [Austral](austral_lang.md)


## Current Status

Ada remains an active language today, and continues to be adopted as a standard in embedded systems fields that demand extremely high reliability, such as aerospace, defense, and rail.

Although its original goal of "eliminating language proliferation" was not fully achieved, it still retains its position as the de facto standard language in high-reliability fields, and continues to be used actively through repeated revisions of its standard.

## Hello World

```
with Ada.Text_IO; use Ada.Text_IO;

procedure Hello is
begin
   Put_Line ("Hello, World!");
end Hello;
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Ada_%28programming_language%29)
