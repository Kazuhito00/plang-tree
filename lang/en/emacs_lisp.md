# Emacs Lisp

- Year: 1985
- Designer(s): Richard Stallman
- Paradigm(s): functional, symbolic processing
- Family: Lisp/Scheme family

## Problem It Aimed to Solve

When Richard Stallman developed GNU Emacs, a mechanism was essential that would let users customize and extend the text editor's behavior on the spot. Rather than a mere configuration file, it needed to allow the editor's internal functionality itself to be rewritten as a program, so Emacs Lisp was designed as a dedicated extension language that made use of Lisp's dynamism and extensibility. As a result, Emacs developed not as a mere editor but as an "execution environment" in which almost everything could be written and extended in Lisp.

This design reflected Stallman's reconsideration of the extensibility of earlier systems he had been involved with, such as Gosling Emacs, and providing a freer, more open extension language was also consistent with the philosophy of the GNU Project.

## Features

- An extension language deeply embedded in GNU Emacs, capable of rewriting almost all of the editor's behavior
- Dynamic scoping by default (lexical scoping later became available as an option)
- Tightly integrated with editor-specific data types such as buffers, windows, and text properties
- A well-developed mechanism for distributing and managing extensions through packages (elisp packages)
- A simple evaluator that allows interactive development by evaluating expressions on the fly
- High interactivity, allowing code to be redefined and re-evaluated without stopping the running Emacs itself
- An active extension ecosystem through package repositories such as MELPA

## Languages It Was Influenced By

- [Lisp](lisp.md)
- [Common Lisp](common_lisp.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Emacs Lisp holds an "active" status as the extension language of GNU Emacs, and has been supported for decades by a large community of package developers — a highly practical Lisp dialect. Many well-known extensions, including org-mode, are written in Emacs Lisp, and it continues to underpin the very flexibility of Emacs.

## Hello World

```
(message "Hello, World!")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Emacs_Lisp)
