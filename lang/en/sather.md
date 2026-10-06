# Sather

- Year: 1990
- Designer(s): Stephen Omohundro
- Paradigm(s): object-oriented, functional
- Family: algol-pascal

## Problem It Aimed to Solve

In 1990, many researchers strongly sympathized with the ideas behind the object-oriented language Eiffel, such as design by contract and iterators, yet were dissatisfied with the low execution performance of its implementations. At ICSI Berkeley, Sather aimed to create an object-oriented language that, through efficient compilation, achieved execution speed comparable to C while still offering design by contract, iterators, and parameterized types (generics). It is notable for also pursuing safe memory management via garbage collection alongside this, aiming for a language that satisfied both performance and safety simultaneously. The name "Sather" comes from Sather Tower at the University of California, Berkeley.

## Features

- Inherits design by contract (preconditions, postconditions, and invariants) from Eiffel
- Integrates the cluster-derived notion of abstract data types into an object-oriented framework
- Parameterized types (generics) allow writing type-safe generic code
- A compiler design that pursues C-level execution efficiency while still including garbage collection
- Iterators as a language feature, allowing collection operations to be written concisely
- Supports multiple inheritance while including mechanisms to prevent name collisions

## Languages It Was Influenced By

- [Eiffel](eiffel.md)
- [CLU](clu.md)
- [Common Lisp](common_lisp.md)
- [Scheme](scheme.md)
- [C++](c_plus_plus.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Sather is classified as historical, a language whose historical role has ended. It earned a certain amount of recognition as an academic experimental language but never achieved widespread practical use, and today it is mainly referenced in the context of language design research.

## Hello World

```
class MAIN is
   main is
      #OUT + "Hello, World!\n";
   end;
end;
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Sather)
