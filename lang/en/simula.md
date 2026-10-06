# Simula

- Year: 1967
- Designer(s): Ole-Johan Dahl, Kristen Nygaard
- Paradigm(s): object-oriented, procedural
- Family: algol-pascal

## Problem It Aimed to Solve

Ole-Johan Dahl and Kristen Nygaard of the Norwegian Computing Center, while writing programs to describe discrete-event simulations such as ship operation schedules, ran into a problem: existing procedural languages had no way to bundle state and behavior together, so the code for each simulated entity ended up scattered and unwieldy. They extended ALGOL 60 and introduced the concept of a "class," which packages data (state) and the procedures that operate on it (behavior) into a single unit.

This idea originally served purely as a tool for simulation, but the concept of the object itself was later evaluated independently as a new paradigm for general-purpose programming. It is said that Alan Kay's exposure to this idea also led to the birth of Smalltalk.

## Features

- Introduced the concept of the "class" as a language feature for the first time, bundling state and behavior into one
- Built on ALGOL 60's syntax, inheriting its block structure and procedure-call notation
- Has a class inheritance mechanism, allowing common behavior to be reused
- Comes with a standard library for discrete-event simulation (processes, event queues)
- Commercial adoption was limited, but the concept itself was inherited by every OOP language that followed
- Has execution control resembling coroutines (suspending and resuming processes), which made it possible to express concurrent-like simulations

## Languages It Was Influenced By

- [ALGOL 60](algol_60.md)


## Languages It Influenced

- [C++](c_plus_plus.md)
- [Pascal](pascal.md)
- [Ada](ada.md)
- [Object Pascal(Delphi)](object_pascal.md)
- [Eiffel](eiffel.md)
- [Smalltalk](smalltalk.md)
- [CLU](clu.md)
- [Squeak](squeak.md)
- [Emerald](emerald_lang.md)
- [Concurrent Pascal](concurrent_pascal.md)


## Current Status

Simula is now positioned as a historical language (status: historical), but as the world's first object-oriented language it is the wellspring of every subsequent OOP language, including C++, Java, and Smalltalk.

It is regarded as one of the most influential languages in the history of computer science, and Dahl and Nygaard received the Turing Award in 2001.

## Hello World

```simula
BEGIN
    OUTTEXT("Hello, world!");
    OUTIMAGE;
END;
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Simula)
