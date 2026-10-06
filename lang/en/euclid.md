# Euclid

- Year: 1977
- Designer(s): Butler Lampson, James G. Mitchell, Jim Horning, Ralph L. London, Gerald J. Popek
- Paradigm(s): procedural, functional
- Family: algol-pascal

## Problem It Aimed to Solve

In the 1970s, DARPA (the U.S. Defense Advanced Research Projects Agency) and Canada's Department of National Defence needed a language for writing "verifiable programs," ones for which it could be mathematically proven that the written program truly behaved according to its specification. Languages like Pascal at the time were expressive, but carried many ambiguous features—such as pointer aliasing and mixed side effects—that made formal verification difficult. Lampson and colleagues therefore sought to design a systems programming language, built on top of Pascal, that deliberately removed features that hindered verification, prioritizing safety and verifiability above all else. Use in settings requiring high reliability, such as military and defense systems, was kept in mind.

## Features

- Has a syntax similar to Pascal, but deliberately excludes ambiguous features that hinder formal verification, such as unrestricted pointer manipulation and aliasing
- Allows procedures to specify pre-conditions and post-conditions, making it easier to mechanically verify a program's correctness
- Incorporates a module mechanism, allowing large system programs to be organized and described in structured form
- Draws on strengths from several preceding languages, such as CLU's abstract data types and Mesa's module concept
- A strongly research-oriented language that emphasized verifiability over practicality, and commercial use did not spread

## Languages It Was Influenced By

- [Pascal](pascal.md)
- [Mesa](mesa.md)
- [CLU](clu.md)
- [BCPL](bcpl.md)
- [Modula](modula.md)


## Languages It Influenced

- [Turing](turing_lang.md)


## Current Status

It is historical (a language whose historical role has ended) and is not used in practice today. It stands as an early attempt at programming language design premised on formal verification, and is referenced within the history of programming language research.

## Hello World

```
module Hello =
begin
    procedure main =
    begin
        write("Hello, World!")
    end
end.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Euclid_%28programming_language%29)
