# C#

- Year: 2000
- Designer(s): Anders Hejlsberg
- Paradigm(s): object-oriented, procedural, generic
- Family: jvm-dotnet

## Problem It Aimed to Solve

In the late 1990s, after a falling-out over its Java partnership with Sun Microsystems, Microsoft found itself needing a managed execution environment it could fully control on its own. While recognizing the appeal of a virtual-machine-based language like Java with garbage collection and type safety, Microsoft wanted to realize those benefits on its own foundation, the .NET Framework. C# was designed around Anders Hejlsberg (formerly the designer of Turbo Pascal and Delphi), combining the syntactic familiarity of C++ with the safety of Java, while securing freedom to evolve the language on its own terms.

## Features

- A managed language with garbage collection that runs on the Common Language Runtime (CLR)
- Combines C++-like syntax with Java-style class-based object orientation
- Language features such as LINQ, async/await, and properties are continuously extended
- Supports generics while retaining type information at run time (no type erasure)
- Adopted widely, from game engines such as Unity to ASP.NET
- Declarative collection operations and query syntax via LINQ
- Language-level support for asynchronous programming via async/await
- Type system extensions such as nullable reference types to reduce runtime errors
- Open-sourced from .NET Core onward, and now runs on non-Windows environments as well
- Modern, functional-leaning features such as pattern matching and record types are continually added
- Runtime type manipulation is possible through reflection

## Languages It Was Influenced By

- [C++](c_plus_plus.md)
- [Java](java.md)
- [Object Pascal(Delphi)](object_pascal.md)
- [Modula-3](modula_3.md)
- [Eiffel](eiffel.md)


## Languages It Influenced

- [Vala](vala.md)
- [Haxe](haxe.md)
- [Clojure](clojure.md)
- [F#](f_sharp.md)
- [TypeScript](typescript.md)
- [Dart](dart.md)
- [Kotlin](kotlin.md)
- [VB.NET](vb_net.md)
- [PowerShell](powershell.md)
- [Swift](swift.md)
- [Boo](boo.md)
- [Gosu](gosu.md)
- [Ballerina](ballerina.md)
- [Q#](qsharp.md)


## Current Status

C# remains in active use as the core language of the .NET platform, spanning enterprise development, web backends, and game development (Unity). Though born as a rival to Java, it has since continued to evolve its own language features, and the cross-platform shift of .NET (from .NET Core onward) has brought it into wide use outside Windows as well.

## Hello World

```
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29)
