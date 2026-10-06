# Unicon

- Year: 1999
- Designer(s): Clint Jeffery, Shamim Mohamed, Jafar Al Gharaibeh, Robert Parlett
- Paradigm(s): object-oriented, procedural, scripting
- Family: scripting

## Problem It Aimed to Solve

Icon, a language strong at string and list processing, lacked, as of the 1990s, adequate access to OS file systems, networking, and databases, as well as object-oriented programming features, making it ill-suited for practical application development. Clint Jeffery and colleagues integrated Icon's three popular extensions—the OO extension Idol, a POSIX file/network interface, and ODBC database functionality—to create Unicon, which could handle graphics and networking while retaining Icon's high-level string and pattern-processing capabilities.

## Features

- Directly inherits Icon's powerful string-scanning and pattern-matching capabilities
- Supports object-oriented programming with classes and inheritance (derived from the Idol extension)
- Comes standard with OS and networking features such as POSIX-compliant file-system access and socket communication
- Has built-in database access functionality via ODBC
- Carries over Icon's characteristic goal-directed evaluation (expression evaluation based on success/failure) and generators
- Provides graphics capabilities (windows, GUI widget rendering) as part of its standard library

## Languages It Was Influenced By

- [Icon](icon.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Unicon is positioned as a niche language and has not achieved widespread adoption, but as Icon's successor it continues to be developed and used by a small community interested in text processing and prototyping.

## Hello World

In keeping with the Icon family of languages, a program begins with `procedure main` and outputs with `write`.

```
procedure main()
    write("Hello, world!")
end
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Unicon_%28programming_language%29)
