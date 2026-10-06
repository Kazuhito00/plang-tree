# CLU

- Year: 1975
- Designer(s): Barbara Liskov, Russell Atkinson, Toby Bloom, Eliot Moss, Robert Scheifler, Alan Snyder
- Paradigm(s): object-oriented, procedural, generic
- Family: algol-pascal

## Problem It Aimed to Solve

In the mid-1970s, as large-scale software systems grew more complex, none of the languages of the day offered "data abstraction" theory as a practical feature. The CLU development team at MIT devised a mechanism called the "cluster," which unified a data's internal representation with the procedures that operate on it, aiming to integrate abstract data types, iterators, exception handling, and parametric types (generics) into a single language system. Although it lacked an inheritance mechanism, it sought to improve the maintainability and reliability of large programs through thorough modularity and encapsulation. This design would go on to lay the theoretical groundwork for later object-oriented languages and generics.

## Features

- Unifies data representation and its manipulating procedures through "clusters," realizing abstract data types
- Introduces the concept of the iterator as a language feature, allowing collection traversal to be written concisely
- Has an exception handling mechanism that structures control flow when errors occur
- Adopted parametric polymorphism (generics) early on
- Has no class inheritance, with a design that emphasizes modularity through abstraction and encapsulation

## Languages It Was Influenced By

- [ALGOL 60](algol_60.md)
- [Lisp](lisp.md)
- [Simula](simula.md)


## Languages It Influenced

- [Ruby](ruby.md)
- [Python](python.md)
- [Java](java.md)
- [Sather](sather.md)
- [Euclid](euclid.md)
- [Argus](argus.md)


## Current Status

CLU is regarded as historical (a language that has finished its historical role). CLU itself is no longer used in practice, but the concepts of abstract data types, iterators, and exception handling are deeply rooted in today's major languages.

## Hello World

```
start_up = proc ()
    po: stream := stream$primary_output()
    stream$putl(po, "Hello, World!")
end start_up
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/CLU_%28programming_language%29)
