# Component Pascal

- Year: 1997
- Designer(s): Oberon microsystems
- Paradigm(s): procedural, object-oriented
- Family: algol-pascal

## Problem It Aimed to Solve

Component Pascal was developed as a successor to Oberon and Oberon-2 by Oberon microsystems, a spin-off company from ETH Zürich. Its goal was to further refine the type system of the existing Oberon-2 language and provide a more expressive and safer language suited to component-based software development. The BlackBox Component Builder development environment provided with it featured an advanced mechanism for directly linking GUI widgets on a form editor to variables and procedures, anticipating techniques that would later appear in .NET development environments. It was initially offered as a commercial product, but was open-sourced in 2004–2005 and continues to be maintained today by a small volunteer community.

## Features

- Refines the type system of Oberon-2, combining safety and expressiveness suited to component-oriented software development
- Its BlackBox Component Builder integrated development environment allows GUI widgets on a form to be directly linked to variables and procedures
- Has a type-safe module system that promotes independent development and reuse on a per-component basis
- Includes garbage collection, ensuring memory safety while allowing concise code
- Provides object-oriented features, such as typed procedure variables and dynamic binding, through a concise syntax
- Was open-sourced in 2004–2005 and has since been maintained by a small volunteer community

## Languages It Was Influenced By

- [Pascal](pascal.md)
- [Oberon](oberon.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Component Pascal is positioned as a niche language. It was formerly offered as a commercial product but has since been open-sourced and continues to be maintained by a small group of volunteers. The development approach pioneered by the BlackBox Component Builder—directly linking GUI widgets on a form to variables—is sometimes credited as a forerunner of later .NET development environments.

## Hello World

```
MODULE Hello;
  IMPORT Out;
BEGIN
  Out.String("Hello, world!"); Out.Ln
END Hello.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Component_Pascal)
