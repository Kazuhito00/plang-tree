# JOVIAL

- Year: 1960
- Designer(s): Jules Schwartz
- Paradigm(s): procedural, systems
- Family: algol-pascal

## Problem It Aimed to Solve

At the end of the 1950s, there was almost no high-level language capable of real-time processing for military embedded systems or aircraft electronics. Jules Schwartz and colleagues at the System Development Corporation, drawing on ALGOL 58 and their experience developing the SAGE air-defense system, designed JOVIAL as a language suited to real-time and embedded use. It was adopted mainly for U.S. Air Force aircraft software development, and is optimized for control systems rather than business data processing.

## Features

- Built on the structured syntax of ALGOL 58, with features added for embedded and real-time systems
- Designed to handle hardware-level data representation and bit-level operations
- Has a mechanism called COMPOOL for common data definitions, allowing data structures to be shared across multiple program modules
- Designed with execution in mind for resource-constrained environments, such as onboard computers in military aircraft
- Unlike languages aimed at business data processing, includes features optimized for use in control and monitoring systems

## Languages It Was Influenced By

- [ALGOL 58](algol_58.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

JOVIAL is positioned as a legacy language, and is said to still be used today for maintaining some older military and aerospace systems. It is almost never used for new development, but retains a historical presence in long-lived, mission-critical systems.

## Hello World

JOVIAL has a structured, ALGOL-family syntax. Below is an example giving a rough sense of it.

```
START
  PRINT "Hello, world";
TERM
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/JOVIAL)
