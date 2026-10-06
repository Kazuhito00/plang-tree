# Shen

- Year: 2011
- Designer(s): Mark Tarver
- Paradigm(s): functional, logic, pattern-matching, declarative
- Family: lisp-scheme

## Problem It Aimed to Solve

Mark Tarver designed Shen as the successor to his earlier language Qi, built around the idea of a "portable kernel" that does not depend on any particular implementation or host language and can run on top of a variety of host languages. It aimed to integrate multiple paradigms into a single language: pattern matching, an integrated Prolog engine, macro-based DSL definition, and a static type system based on sequent calculus. The goal was to cross the divide between different programming languages, so that the same Shen program could run on kernels implemented in diverse host languages such as Lisp, Python, and JavaScript.

## Features

- Combines function definitions via pattern matching with logic programming through an integrated Prolog engine, within a single language
- Its macro system allows flexible definition of custom syntax and domain-specific languages (DSLs)
- Includes an optional static type system based on sequent calculus
- Designed around a portable kernel called "K Lambda," which can be implemented on top of diverse host systems including Common Lisp, JavaScript, and Python
- Adopts S-expression-based syntax in the Lisp tradition, giving it strong affinity with Lisp-family languages

## Languages It Was Influenced By

- [Common Lisp](common_lisp.md)
- [Prolog](prolog.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Shen is positioned as a niche language; while it has not achieved broad adoption in practical use, it continues to be used by a segment of developers and researchers interested in its multi-paradigm design and its concept of a portable kernel.

## Hello World

```shen
(output "Hello, world!~%")
```

## External Links

No Wikipedia article was found.
