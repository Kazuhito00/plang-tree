# Joy

- Year: 2001
- Designer(s): Manfred von Thun
- Paradigm(s): functional, concatenative
- Family: c-family

## Problem It Aimed to Solve

Manfred von Thun designed Joy while searching for a way to realize John Backus's ideas about function-level programming (FP) without relying on the lambda calculus. In Joy, functions take no formal parameters, and programs are built solely through function composition over values on a stack—a "concatenative" style. This made it easier to treat program semantics algebraically, producing a pure functional language well suited to formal reasoning based on function composition. It shows both a similarity to Forth's stack-based style (arrived at independently) and influence from Scheme.

## Features

- Adopts a concatenative style in which functions take no formal parameters and programs are built purely from operations on stack values and function composition
- Program concatenation directly corresponds to function composition, keeping algebraic properties intact and making programs easy to reason about and transform
- Treats higher-order functions (quotations, i.e., quoted programs) as first-class values
- Designed as a pure functional language with no side effects
- Has a stack-based execution model similar to Forth's, though it developed independently

## Languages It Was Influenced By

- [Forth](forth.md)
- [Scheme](scheme.md)


## Languages It Influenced

- [Cat](cat_lang.md)
- [Kitten](kitten_lang.md)


## Current Status

Joy is positioned as a language whose historical role has ended; it sees essentially no practical use today, but as a pioneering language that established the concatenative programming style, it continues to influence later research-oriented languages such as Cat and Kitten.

## Hello World

```joy
"Hello, world!" putchars.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Joy_%28programming_language%29)
