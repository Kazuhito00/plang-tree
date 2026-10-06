# Pizza

- Year: 1996
- Designer(s): Martin Odersky, Philip Wadler
- Paradigm(s): object-oriented, functional, generic, pattern-matching
- Family: jvm-dotnet

## Problem It Aimed to Solve

Java, in 1996, had only just appeared and was attracting attention, but it lacked features that had long been taken for granted in functional languages, such as generics (parameterized types), first-class functions (closures), algebraic data types, and pattern matching. Odersky and Wadler wondered whether these features derived from functional languages could be realized on the Java Virtual Machine (JVM) while remaining fully compatible with Java. Pizza was designed as an experiment in integrating the results of type-theory research into a practical object-oriented language, while still being able to make direct use of existing Java bytecode and class libraries.

## Features

- Generates bytecode fully compatible with Java, and can directly call existing Java class libraries
- Realized generics (parameterized types) well ahead of their time, not long after Java itself had appeared
- Introduced algebraic data types and pattern matching, enabling functional-style data manipulation
- Supported first-class functions (closures), enabling a programming style that treats functions as values
- Had strongly the character of an experimental prototype; its significance lies less in practical adoption than in serving as a bridge to its designers' own later research (GJ, Scala)

## Languages It Was Influenced By

- [Java](java.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Pizza is historical—a language whose historical role has ended—and it is not used today. It is remembered as the starting point of a lineage, as an experiment in integrating generics and functional features into Java, that led to Java's later introduction of generics and to the birth of Scala.

## Hello World

```
class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Pizza_%28programming_language%29)
