# Boo

- Year: 2003
- Designer(s): Rodrigo B. de Oliveira
- Paradigm(s): object-oriented, functional
- Family: jvm-dotnet

## Problem It Aimed to Solve

The .NET Common Language Infrastructure (CLI) had strong Unicode support, internationalization, and a rich set of libraries for web applications, but the main languages used on it, such as C# and VB.NET, could hardly be described as having syntax as concise and readable as Python's. De Oliveira wanted to create a statically typed language that could make full use of the capabilities of the .NET platform while being written in a readable, Python-like indentation-based syntax. He also made the language itself flexibly extensible through compiler extension mechanisms (compiler steps and macros), and actively incorporated functional features such as closures and generators.

## Features

- A statically typed language in which type checking is performed at compile time, despite having concise, indentation-based syntax similar to Python
- Has type inference, so it can benefit from static typing in many situations even without explicit type annotations
- Runs on the .NET CLI and can interoperate seamlessly with libraries written in C# or VB.NET
- Incorporates features derived from functional and Lisp-family languages, such as closures, generators, and macros
- Has extensibility that allows custom steps to be added to the compiler pipeline, and was also adopted as a scripting language for the Unity engine before the advent of UnityScript

## Languages It Was Influenced By

- [C#](c_sharp.md)
- [Python](python.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Boo is positioned as niche (a language used in specific fields), and although it was once used as one of the scripting language options for the Unity engine, its use is now confined to a limited community.

## Hello World

```
print "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Boo_%28programming_language%29)
