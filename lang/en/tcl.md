# Tcl

- Year: 1988
- Designer(s): John Ousterhout
- Paradigm(s): scripting
- Family: scripting

## Problem It Aimed to Solve

In the 1980s, while working on chip design tools and other software at UC Berkeley, John Ousterhout noticed the inefficiency of building a separate, custom configuration or command language into every application he created. He reasoned that if he built a general-purpose, lightweight command language (Tool Command Language) that could be embedded into any application, there would be no need to reinvent a language for each individual application. Its simple syntax, treating everything as a string, made it easy to embed into applications written in C.

## Features

- A unified data model in which "every value is a string"
- A simple interpreter design premised on embedding into C applications
- Combined with the GUI toolkit Tk as "Tcl/Tk," it can build cross-platform GUIs
- A consistent command-oriented grammar that treats syntax as a sequence of commands
- Persistent adoption as a configuration language for network equipment and EDA (electronic design automation) tools

## Languages It Was Influenced By

- [AWK](awk.md)
- [Lisp](lisp.md)


## Languages It Influenced

- [PowerShell](powershell.md)


## Current Status

Tcl is currently positioned as a "niche" language; while it no longer enjoys the broad adoption it once had, it is still firmly used in fields such as EDA tools, network equipment configuration, and test automation (Expect). Its historical name recognition, tied to the GUI toolkit Tk, remains high.

## Hello World

```
puts "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Tcl_%28programming_language%29)
