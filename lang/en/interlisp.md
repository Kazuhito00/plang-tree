# Interlisp

- Year: 1968
- Designer(s): Warren Teitelman, Danny Bobrow, Alice Hartley, Ronald Kaplan
- Paradigm(s): functional, procedural, object-oriented, declarative
- Family: lisp-scheme

## Problem It Aimed to Solve

In the late 1960s, in order to let AI researchers write programs efficiently through trial and error, there was a need for an interactive development environment that integrated a debugger, automatic error correction, and operation-history management into a Lisp processing system. Building on BBN LISP and refining it further at Xerox PARC, Interlisp aimed to provide not merely a language specification but an integrated programming environment that would itself raise researchers' productivity. In particular, the automatic error-correction feature known as DWIM (Do What I Mean) was an advanced idea in which the processing system automatically guessed and corrected typos and minor mistakes. Its greatest aim was to speed up the cycle of trial and error in AI research.

## Features

- Through its DWIM (Do What I Mean) feature, the processing system attempts to automatically correct minor typos and mistakes
- Has a powerful interactive debugger that allows a running program to be interrupted for investigation and modification
- Has an operation-history management feature that lets past operations be referenced and re-executed later
- Centers on symbolic processing and list manipulation, based in the Lisp tradition
- Has numerous integrated-development-environment-like features, such as file management and a package mechanism

## Languages It Was Influenced By

- [Lisp](lisp.md)


## Languages It Influenced

- [Common Lisp](common_lisp.md)
- [EuLisp](eulisp.md)


## Current Status

Interlisp is positioned as historical (a language that has finished its historical role). Interlisp itself has fallen out of use, but the ideas of an interactive debugging environment and automatic error correction are valued as forerunners of the modern integrated development environment (IDE).

## Hello World

```
(PRINT (QUOTE (Hello, World!)))
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Interlisp)
