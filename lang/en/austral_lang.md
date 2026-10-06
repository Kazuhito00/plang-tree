# Austral

- Year: 2018
- Designer(s): Fernando Borretti
- Paradigm(s): procedural, functional, systems
- Family: c-family

## Problem It Aimed to Solve

In systems programming languages, the complexity and overhead of existing techniques for guaranteeing memory safety—garbage collection or elaborate borrow checkers—had become a persistent challenge. Austral was designed to eliminate bugs such as double-free and use-after-free at compile time by adopting linear types, while keeping the language specification itself simple enough for a single person to fully understand. It also features a capability-based security model that restricts each module's access to external resources on a per-module basis, intended to reduce the risk of supply-chain attacks. Designer Fernando Borretti built on Ada's module system and Rust's concepts of linear types and borrowing, while also incorporating functional features such as Haskell-style type classes and algebraic data types.

## Features

- Adopts linear types to detect and eliminate bugs such as double-free and use-after-free at compile time
- Uses no garbage collection; memory is instead managed deterministically through the passing of ownership
- Includes a capability-based security model that restricts each module's access to external resources on a per-module basis
- Emphasizes keeping the language specification within what a single person can fully understand, favoring a simple design with a deliberately narrow feature set
- Incorporates functional features inspired by Haskell, such as type classes and algebraic data types
- Adopts syntax inspired by the clarity of Ada's module system

## Languages It Was Influenced By

- [Ada](ada.md)
- [Rust](rust.md)
- [Haskell](haskell.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Niche. Austral is used by a small community of developers as an experimental systems programming language, and its design philosophy—pursuing safety and simplicity through linear types—continues to draw attention.

## Hello World

```austral
module body Example is
    function main(): ExitCode is
        Print.println("Hello, world!");
        return ExitSuccess();
    end;
end module body.
```

## External Links

No Wikipedia article was found.
