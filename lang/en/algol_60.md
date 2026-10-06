# ALGOL 60

- Year: 1960
- Designer(s): International committee (Backus, Naur, and others)
- Paradigm(s): procedural
- Family: origin

## Problem It Aimed to Solve

By the late 1950s, Fortran was already in practical use in the United States, but it was heavily machine-dependent and inadequate as a common language for rigorously describing and publishing algorithms in academic papers. An international committee made up of researchers from Europe and the United States set out to define a language that was mathematically rigorous, machine-independent, and capable of sharing and publishing scientific computing algorithms internationally.

As an outcome of this effort, formal grammar definition using BNF notation was adopted for the first time, establishing a method for describing a language specification itself without ambiguity. Advanced concepts for the time, such as block structure, recursion, and dynamic type checking, were incorporated, and the language became a textbook reference point for language design for decades afterward.

## Features

- The first language whose grammar was formally and rigorously defined using BNF notation
- Introduced block structure with begin-end and lexical scoping
- One of the earliest languages to support recursive calls
- Widely used as an "algorithm description language" in academic publications
- Specification work preceded implementation, so its influence was greater in academia and theory than in commercial use
- Had a distinctive argument-passing mechanism called call by name, which later became a source of language design controversy

## Languages It Was Influenced By

- [Fortran](fortran.md)
- [ALGOL 58](algol_58.md)


## Languages It Influenced

- [ALGOL 68](algol_68.md)
- [PL/I](pl_i.md)
- [BASIC](basic.md)
- [Simula](simula.md)
- [Pascal](pascal.md)
- [Icon](icon.md)
- [occam](occam.md)
- [CLU](clu.md)
- [ALGOL W](algol_w.md)
- [CPL](cpl.md)
- [BLISS](bliss.md)
- [SETL](setl.md)
- [Concurrent Pascal](concurrent_pascal.md)


## Current Status

It is now positioned as a historical language (status: historical), but as the ancestor of structured programming, it continues to influence the grammatical design of most subsequent procedural languages.

Few implementations survive today, but it is still taken up in computer science education as material for studying the history of language design.

## Hello World

The ALGOL 60 language specification itself does not define standard input/output procedures, so execution requires an input/output procedure provided independently by an implementation (here, `outstring`, as found in implementations such as those from Burroughs).

```algol60
begin
    outstring(1, "Hello, world!")
end
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/ALGOL_60)
