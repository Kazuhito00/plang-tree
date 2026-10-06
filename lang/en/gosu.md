# Gosu

- Year: 2010
- Designer(s): Scott McKinney
- Paradigm(s): object-oriented, functional, procedural, scripting
- Family: jvm-dotnet

## Problem It Aimed to Solve

Guidewire, a company developing systems for insurance operations, needed a scripting language that would let its insurance-company customers safely and flexibly customize their own business rules (such as premium calculation methods and underwriting conditions). This effort, which began as an in-house language called GScript, evolved into a language that ran on the JVM with high interoperability with Java assets, while also offering rich code completion and refactoring support through static typing. McKinney and colleagues focused on practicality and developer experience so that developers of business systems could confidently write and maintain large-scale business logic.

## Features

- Runs on the JVM with high interoperability, able to call existing Java classes and libraries directly
- A statically typed language that nonetheless has type inference, combining concise notation with rich IDE support (code completion, refactoring)
- Incorporates modern features derived from functional languages and C#, such as closures and enhancement properties (extension properties)
- Used in practice as a business-rule authoring language for Guidewire's insurance systems (such as PolicyCenter)
- Published as open source, but its usage is centered mainly around the Guidewire-related ecosystem

## Languages It Was Influenced By

- [Java](java.md)
- [C#](c_sharp.md)
- [JavaScript](javascript.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as niche (a language used in a specific domain), continuing to be used mainly for customizing Guidewire's insurance-operations systems.

## Hello World

```
print("Hello, World!")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Gosu_%28programming_language%29)
