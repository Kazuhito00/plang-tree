# BLISS

- Year: 1970
- Designer(s): W. A. Wulf, D. B. Russell, A. N. Habermann
- Paradigm(s): procedural, systems
- Family: c-family

## Problem It Aimed to Solve

In the late 1960s, developing operating systems and compilers for DEC minicomputers such as the PDP-10 in assembly language was unproductive, while existing high-level languages (such as ALGOL and PL/I) fell short in portability, execution efficiency, and direct access to hardware. Wulf and his colleagues at Carnegie Mellon University designed BLISS as a typeless, expression-oriented systems language that retained the benefits of structured programming while still allowing machine-level control such as register manipulation. This made it possible to develop OSes and compilers for the PDP-10 in a high-level language. It later ceded its mainstream position to C, but DEC/VSI continues to maintain a BLISS compiler for OpenVMS to this day.

## Features

- An "expression-oriented" language in which every syntactic construct returns a value, with no distinction between statements and expressions
- A typeless design in which variables carry no fixed type, allowing bit-level and word-level operations to be written directly
- Provides hardware-level control such as register variables and address arithmetic, while also offering structured-programming constructs such as conditionals, loops, and blocks
- Equipped with a powerful macro facility used for compile-time code generation and abstraction
- Designed as a systems-implementation language for writing OSes and compilers targeting DEC hardware such as the PDP-10, PDP-11, and VAX

## Languages It Was Influenced By

- [ALGOL 60](algol_60.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

BLISS is positioned as a niche language, and with the spread of C its role as a systems-implementation language for new development has essentially ended. However, DEC/VSI still maintains a BLISS compiler for certain OpenVMS components, and it continues to see limited use within legacy VMS environments.

## Hello World

In BLISS, a program is written as a module and calls a library routine to output a string.

```
MODULE HELLO (MAIN = HELLO) =
BEGIN

GLOBAL ROUTINE HELLO : NOVALUE =
BEGIN
    LIB$PUT_OUTPUT (%ASCID'Hello, world!');
END;

END
ELUDOM
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/BLISS)
