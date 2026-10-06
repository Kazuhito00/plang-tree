# Chisel

- Year: 2012
- Designer(s): Jonathan Bachrach, Huy Vo, Brian Richards, Yunsup Lee, Krste Asanović
- Paradigm(s): functional, object-oriented, declarative, generic
- Family: hardware-description

## Problem It Aimed to Solve

Chisel was developed at the University of California, Berkeley, to address the poor abstraction capabilities of Verilog and VHDL for writing reusable hardware generators. The background need was, in particular, to efficiently generate complex designs such as the RISC-V-based processor "Rocket Chip." Traditional hardware description languages made it difficult to generate parameterized modules or abstract higher-order designs, and large-scale processor designs tended to accumulate redundant code. Chisel was built on top of Scala's language features, aiming to achieve parameterized hardware description by leveraging the flexibility of Scala's object-oriented and functional programming.

## Features

- Implemented as an embedded domain-specific language (eDSL) in Scala, importing and using Scala libraries directly
- Leverages abstraction facilities from both functional and object-oriented programming to concisely describe parameterized hardware generators
- Static checking through types operates at Scala compile time, catching many hardware design errors early
- Higher-order functions and collection operations allow repetitive circuit structures to be generated concisely
- Ultimately generates Verilog code, allowing seamless integration with existing EDA toolchains

## Languages It Was Influenced By

- [Scala](scala.md)
- [Verilog](verilog.md)
- [VHDL](vhdl.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as a niche language used in a specific field. It continues to be actively used in RISC-V processor research and development and in open-source hardware design.

## Hello World

Because Chisel is a library on top of Scala, hardware modules are described as Scala code. Simple output uses Scala's standard facilities.

```scala
object Hello extends App {
  println("Hello, World!")
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Chisel_%28programming_language%29)
