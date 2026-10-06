# Oberon

- Year: 1986
- Designer(s): Niklaus Wirth, Jürg Gutknecht
- Paradigm(s): procedural, object-oriented
- Family: algol-pascal

## Problem It Aimed to Solve

Modula-2 had grown richer in features compared to Pascal, but Niklaus Wirth was unsatisfied with the way language specifications kept becoming more complex over time.

While developing a new OS called "Oberon" for workstations at ETH Zürich, Wirth and Jürg Gutknecht aimed to write everything from the OS kernel to applications in a single language, with a specification and implementation reduced to the utmost simplicity.

This "pursuit of simplicity" was also a clear reaction against the prevailing trend of ever more complex language design at the time. The result was a language whose specification was trimmed down to a mere few dozen pages.

## Features

- A minimal language specification, pared down even further than Modula-2
- A simple object-oriented mechanism achieved through type extension
- Memory management built on the assumption of garbage collection
- A design philosophy that keeps both the language specification and its implementation small enough for a single person to fully grasp
- A unified approach in which the entire OS (the Oberon System) is written in a single language
- A text-based user interface integrated with its own distinctive window system

## Languages It Was Influenced By

- [Modula-2](modula_2.md)
- [Pascal](pascal.md)


## Languages It Influenced

- [Go](go.md)
- [Modula-3](modula_3.md)
- [V](v_lang.md)
- [Odin](odin.md)
- [Component Pascal](component_pascal.md)
- [Zonnon](zonnon.md)


## Current Status

Oberon remains niche today and never became a widely adopted language.

However, as the culmination of Wirth's family of languages pursuing extreme simplicity, it left a lasting philosophical influence on later "simplicity-first" language designs such as Go. The Oberon System also continues to be used at some research and educational institutions, including ETH Zürich.

## Hello World

```
MODULE Hello;
IMPORT Out;
BEGIN
  Out.String("Hello, world!"); Out.Ln
END Hello.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Oberon_%28programming_language%29)
