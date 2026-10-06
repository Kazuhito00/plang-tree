# Diksam

- Year: 2007
- Designer(s): Kazuya Maebashi (前橋和弥)
- Paradigm(s): procedural, scripting
- Family: scripting

## Problem It Aimed to Solve

Having taught the basics of interpreters and garbage collection with Crowbar, Kazuya Maebashi developed Diksam to teach a more full-fledged approach: how to build a statically typed, bytecode-executed language. It works by having a compiler generate bytecode that runs on a dedicated virtual machine, DVM (Diksam Virtual Machine), and it serves as teaching material for static type checking and bytecode verification while avoiding the heavyweight machinery of something like Java's class file format. It has basic types such as boolean, int, double, and string, and incorporates functional-language elements such as being able to assign functions to variables. As a progression from Crowbar, it is an educational language that bridges interpreter implementation to compiler and VM implementation.

## Features

- Compiles source code into bytecode and executes it on a dedicated virtual machine, DVM (Diksam Virtual Machine)
- Unlike Crowbar, it adopts static typing, serving as teaching material for compile-time type checking
- Has basic types such as boolean, int, double, and string, giving it a type system closer to that of a practical language
- Treats functions as first-class values, with a functional-language side that allows assignment to variables and passing as arguments
- Draws on Java's heavyweight class file format as a reference while offering a simplified bytecode verification mechanism as teaching material

## Languages It Was Influenced By

- [Crowbar](crowbar_lang.md)
- [C](c.md)
- [Java](java.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Diksam is a language dedicated to educational use, and it is not intended for adoption in practical application development. It continues to be referenced within the Japanese-speaking community of people building their own language processors, as teaching material for implementing a statically typed language's compiler and bytecode virtual machine.

## Hello World

With C/Java-like syntax, the `print` function is used to output a string.

```
print("Hello, World!\n");
```

## External Links

No Wikipedia article was found.
