# Modula-2

- Year: 1978
- Designer(s): Niklaus Wirth
- Paradigm(s): procedural
- Family: algol-pascal

## Problem It Aimed to Solve

Pascal had excellent clarity as an educational language, but it lacked the ability to split large-scale programs into independent units for development, or to perform low-level hardware control such as for OSes and device drivers.

After a period as a visiting researcher at Xerox PARC, Niklaus Wirth felt that implementing his own workstation project "Lilith" and its OS required a new language that preserved Pascal's clarity while adding module division and systems-programming capability.

This is how Modula-2 came about, aiming to evolve from a mere educational language into a practical systems-description language.

## Features

- Separation of interface and implementation via modules (MODULE), and management of namespaces
- Systems-programming capability allowing low-level memory manipulation and address specification
- Strong typing and structured control constructs inherited from Pascal
- Support for concurrent processing via coroutines
- Designed on the assumption of independent compilation of each compilation unit
- A mechanism for checking type consistency between separately compiled modules

## Languages It Was Influenced By

- [Pascal](pascal.md)


## Languages It Influenced

- [Oberon](oberon.md)
- [Modula-3](modula_3.md)
- [Ada](ada.md)


## Current Status

Modula-2 is currently positioned as historical and is almost never used for new development in practice.

However, as a language that introduced the module concept in a practical form, it is a historically significant language that influenced the module system design of many later languages. Implementations are still maintained today in some embedded and educational fields.

## Hello World

```
MODULE Hello;

FROM InOut IMPORT WriteString, WriteLn;

BEGIN
  WriteString("Hello, world!");
  WriteLn
END Hello.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Modula-2)
