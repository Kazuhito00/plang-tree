# Mercury

- Year: 1995
- Designer(s): Zoltan Somogyi and others
- Paradigm(s): logic, functional
- Family: logic-declarative

## Problem It Aimed to Solve

Prolog pioneered the expressive power of logic programming, but because it is dynamically typed, it had the weakness that errors in the types of arguments passed to predicates, or in their instantiation state (whether an argument is input or output), could not be discovered until runtime. The larger the software written in a logic-programming language, the more serious this kind of bug became, and it stood as a barrier to industrial adoption.

Researchers at the University of Melbourne in Australia sought to solve this problem by creating a language that retained Prolog's declarative expressive power while statically checking type, mode (whether an argument is bound or unbound), and determinism (how many solutions can be produced) at compile time. Begun as a research project, this effort also set a goal of exceeding existing logic-language implementations in execution speed.

## Features

- Integrates a Haskell-like static polymorphic type system with logic programming inherited from Prolog
- Has a mode system that declares, for each argument, whether it is input or output
- Predicates declare their determinism (always exactly one solution, zero or one, many, and so on), which the compiler uses for verification and optimization
- Aggressive optimization using type and mode information enables faster execution than other logic languages
- A purely logic-based language that can nonetheless also use functional-style notation (function calls)
- I/O processing with side effects is handled safely through unique modes

## Languages It Was Influenced By

- [Prolog](prolog.md)
- [Haskell](haskell.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Mercury remains a niche language today, but its design as a statically typed logic language continues to be held in high academic regard. Practical adoption is limited, but the approach of overcoming Prolog's weaknesses through a type system represents a milestone in logic programming research where reliability is required. Development continues today, with the open-source community maintaining the implementation.

## Hello World

```mercury
:- module hello.
:- interface.
:- import_module io.

:- pred main(io::di, io::uo) is det.

:- implementation.

main(!IO) :-
    write_string("Hello, world!\n", !IO).
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Mercury_%28programming_language%29)
