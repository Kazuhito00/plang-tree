# Cat

- Year: 2008
- Designer(s): Christopher Diggins
- Paradigm(s): functional, concatenative, generic
- Family: c-family

## Problem It Aimed to Solve

Christopher Diggins designed Cat as a language that preserves the conciseness and algebraic composability of concatenative languages like Joy while introducing static typing and type inference. Whereas most earlier concatenative languages were dynamically typed, Cat introduced a mechanism for statically inferring stack inputs and outputs as higher-order polymorphic types, allowing programs to be written using only stack operations and quotations, without variables. Development of the C#-based v1 implementation was frozen in 2008, but it influenced the design of later statically typed concatenative languages such as Kitten.

## Features

- Like Joy, adopts a concatenative style in which programs are built solely from function composition and stack operations
- Has a type system that statically infers stack inputs and outputs as higher-order polymorphic types, bringing static typing to a field of concatenative languages that had mostly been dynamically typed
- Uses no variables at all; programs are written purely with stack operations and quotations
- Supports generic programming, allowing functions to be defined polymorphically over types
- Implemented in C#, running on the .NET environment

## Languages It Was Influenced By

- [Joy](joy_lang.md)
- [Forth](forth.md)


## Languages It Influenced

- [Michelson](michelson.md)
- [Kitten](kitten_lang.md)


## Current Status

Cat is positioned as a language whose historical role has ended, with development of v1 frozen in 2008. However, its design as a statically typed concatenative language continues to influence later language designs such as Michelson and Kitten.

## Hello World

```cat
"Hello, world!" writeln
```

## External Links

No Wikipedia article was found.
