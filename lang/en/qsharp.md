# Q#

- Year: 2017
- Designer(s): Krysta Svore, Microsoft Quantum Architectures and Computation (QuArC) team
- Paradigm(s): functional, procedural, concurrent
- Family: domain-specific

## Problem It Aimed to Solve

Q# is a language designed to naturally express, as a dedicated abstraction, concepts unique to quantum mechanics such as qubit superposition and entanglement, rather than forcibly repurposing the framework of existing classical programming languages. Attempts to write quantum computing algorithms as libraries in C++ or Python already existed, but it was difficult to handle quantum operations and classical control flow together within a single language in an integrated, type-safe way. Microsoft's team aimed to create a dedicated language that would let quantum-algorithm researchers describe the algorithm itself without being overly conscious of the details of actual hardware or simulators, while still integrating seamlessly with classical control code.

## Features

- Has a `Qubit` type representing a qubit, and a syntax that clearly distinguishes quantum operations (operation) from classical functions (function)
- The compiler can automatically derive operations unique to quantum computing, such as the adjoint and controlled forms of unitary operations
- Has a syntax similar to C#, while modeling in its type system the nondeterminism that accompanies quantum measurement and the no-cloning theorem's prohibition on copying quantum state
- Classical control flow (loops, conditional branches) and quantum operations can be combined seamlessly within the same program
- Through Microsoft's Quantum Development Kit (QDK), it handles execution on simulators and on actual quantum hardware in a unified way

## Languages It Was Influenced By

- [C#](c_sharp.md)
- [F#](f_sharp.md)
- [Python](python.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is in active, wide use. As the core language of Microsoft's Quantum Development Kit, it continues to be used in the research, education, and experimental development of quantum algorithms.

## Hello World

In Q#, quantum operations are defined as an operation annotated with the `@EntryPoint()` attribute, and strings can be printed using the `Message` function.

```qsharp
namespace HelloWorld {
    open Microsoft.Quantum.Intrinsic;

    @EntryPoint()
    operation SayHello() : Unit {
        Message("Hello, World!");
    }
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Q_Sharp)
