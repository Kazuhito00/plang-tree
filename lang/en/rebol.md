# REBOL

- Year: 1997
- Designer(s): Carl Sassenrath
- Paradigm(s): functional, scripting
- Family: scripting

## Problem It Aimed to Solve

As the Internet was rapidly spreading, Carl Sassenrath, who had experience designing the Amiga operating system kernel, felt the need for a lightweight mechanism that could exchange data and code (behavior) between different systems over a network without distinction. In existing languages, data formats and program syntax were separate, requiring redundant conversion for distributed processing across a network. He therefore combined Lisp's homoiconic nature (in which code and data share the same representation) with Forth's simple evaluation model to design REBOL, a language that could represent and transmit code and data together as a single "message."

## Features

- A homoiconic design that treats code and data as the same kind of "value"
- The concept of "dialects," which support diverse built-in data types (dates, URLs, email addresses, etc.) at the language level
- A very compact runtime that operates as a single executable file
- Functional-style block evaluation and simple syntax
- Designed with distributed object communication over a network in mind

## Languages It Was Influenced By

- [Lisp](lisp.md)
- [Forth](forth.md)
- [Self](self.md)
- [Logo](logo.md)


## Languages It Influenced

- [Red](red.md)


## Current Status

Its adoption remained limited due to the failure of commercialization and delayed open-sourcing, and it is now positioned as a "historical" language. Its design philosophy has been carried forward into its successor language, Red.

## Hello World

```rebol
REBOL []
print "Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Rebol)
