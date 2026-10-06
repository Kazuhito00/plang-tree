# Scala

- Year: 2003
- Designer(s): Martin Odersky
- Paradigm(s): object-oriented, functional
- Family: jvm-dotnet

## Problem It Aimed to Solve

Martin Odersky was a researcher who had also been involved in developing javac (the official Java compiler), and he believed there was no fundamental contradiction between object-oriented programming and functional programming, two paradigms that were at the time treated as almost entirely separate camps. Since the existing Java language leaned heavily toward object orientation, and purely functional languages like Haskell had not seen much adoption in practice, Scala was designed as an attempt to fuse the two into a single unified language on the JVM, achieving both academic rigor and practical usability in industry.

## Features

- A multi-paradigm design that integrates object-oriented and functional programming on an equal footing
- A static type system with advanced type inference, along with case classes and pattern matching
- Runs on the JVM and can interoperate with Java libraries
- A functional philosophy that recommends immutable data structures and a design that suppresses side effects
- Adopted as the implementation language of the big-data processing platform Apache Spark, which drove its spread
- Flexible capability for building DSLs (domain-specific languages) through operator overloading and implicit conversions

## Languages It Was Influenced By

- [Java](java.md)
- [Haskell](haskell.md)
- [Standard ML](standard_ml.md)
- [OCaml](ocaml.md)
- [Scheme](scheme.md)


## Languages It Influenced

- [F#](f_sharp.md)
- [Red](red.md)
- [Kotlin](kotlin.md)
- [Ceylon](ceylon.md)
- [Fortress](fortress.md)
- [Chisel](chisel.md)


## Current Status

Scala remains an actively developed, current language, and it is firmly used in the field of data engineering, particularly owing to its position as the implementation language of the big-data processing platform Apache Spark. As the pioneer that brought functional programming in earnest into the JVM world, it continues to exert an ideological influence on the design of subsequent JVM languages. In recent years, migration to Scala 3, which has simplified the language specification, has been underway.

## Hello World

```scala
object Main extends App {
  println("Hello, World!")
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Scala_%28programming_language%29)
