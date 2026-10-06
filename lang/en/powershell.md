# PowerShell

- Year: 2006
- Designer(s): Jeffrey Snover
- Paradigm(s): scripting, object-oriented
- Family: jvm-dotnet

## Problem It Aimed to Solve

Windows administrators had long been forced to perform large-scale system administration using a command prompt and batch files that were far weaker than the shells of Unix-like OSes (such as bash). Unix shell pipelines pass only strings (text) between commands, requiring fragile text processing to parse the output. Designer Jeffrey Snover sought to eliminate this cumbersome string parsing at its root by creating a management shell built on the .NET foundation, one that could pass actual objects through pipes.

## Features

- A design in which pipelines between commands pass .NET objects directly rather than strings
- A consistent "verb-noun" command naming convention (cmdlets)
- Direct access to the entire .NET Framework class library
- A remoting feature that allows batch management of multiple remote machines
- Bundled as the standard automation scripting tool for Windows administrative tasks
- A "provider" mechanism that lets different data stores, such as the file system and the registry, be manipulated through a unified syntax

## Languages It Was Influenced By

- [C#](c_sharp.md)
- [Python](python.md)
- [Perl](perl.md)
- [SQL](sql.md)
- [Tcl](tcl.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

PowerShell is now widely used as the standard Windows management shell and automation tool, and later became open source and cross-platform as PowerShell Core, running on macOS and Linux as well. It has also become an indispensable tool for automating the management of cloud infrastructure (Azure), and occupies an important position in the DevOps field.

## Hello World

```powershell
Write-Host "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/PowerShell)
