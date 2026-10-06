# VB.NET

- Year: 2002
- Designer(s): Microsoft
- Paradigm(s): object-oriented, procedural
- Family: jvm-dotnet

## Problem It Aimed to Solve

Throughout the 1990s, Visual Basic (Classic) became synonymous with RAD (rapid application development) and spread explosively, but its internal design depended on COM technology, which was fundamentally incompatible with the .NET vision (a foundation for running multiple languages uniformly on a common language runtime) that Microsoft put forward in the early 2000s. VB.NET was rebuilt from scratch as a fully object-oriented language that could preserve the vast existing base of Visual Basic assets and programmer knowledge while still gaining the benefits of the .NET foundation (garbage collection, interoperability with languages such as C#, and so on).

## Features

- Runs on the .NET Common Language Runtime (CLR) and is fully interoperable with other .NET languages such as C#
- Retains the plain, English-like syntax inherited from Visual Basic Classic
- Newly gained full-fledged object-oriented features such as inheritance, interfaces, and exception handling
- Visual, form-based design within a RAD development environment integrated with Visual Studio
- A major overhaul rather than simple backward compatibility, with the language specification changing substantially from the older VB
- Settings such as Option Strict and Option Explicit that allow type safety to be strengthened incrementally

## Languages It Was Influenced By

- [Visual Basic(Classic)](visual_basic.md)
- [C#](c_sharp.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

VB.NET remains actively used today as part of the .NET ecosystem, retaining solid support particularly for maintaining existing business applications and among developers who prefer its concise syntax. While it lacks the momentum of new feature additions that C# has, it continues to be supported by Microsoft and its operation is guaranteed on the latest versions of .NET.

## Hello World

```vbnet
Module Module1
    Sub Main()
        Console.WriteLine("Hello, World!")
    End Sub
End Module
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Visual_Basic_%28.NET%29)
