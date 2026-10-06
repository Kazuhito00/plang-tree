# LFE

- Year: 2008
- Designer(s): Robert Virding
- Paradigm(s): functional, concurrent, symbolic, pattern-matching
- Family: concurrent-actor

## Problem It Aimed to Solve

LFE (Lisp Flavoured Erlang) was developed out of a desire to do metaprogramming with Lisp's powerful macro system and homoiconic syntax, while retaining robust concurrency and fault tolerance on the Erlang/BEAM virtual machine. Erlang excelled at concurrency and fault tolerance, but its syntax lacked the flexibility of Lisp-family languages, which treat code and data as one and the same. Robert Virding, himself a co-developer of Erlang, tried to combine the strengths of both by bringing the tradition of Lisps such as Common Lisp and Scheme onto the Erlang virtual machine.

## Features

- Adopts Lisp-derived S-expression syntax, giving it homoiconicity, in which code and data are expressed in the same structure
- Can use Erlang's lightweight process model and message-passing concurrency directly
- Has a powerful macro system, allowing Lisp's traditional metaprogramming features to be leveraged in the Erlang environment
- Performs pattern matching within Lisp syntax, inheriting Erlang's original robust error-handling style
- Interoperates with existing Erlang/OTP libraries and modules, allowing the Erlang ecosystem to be used directly

## Languages It Was Influenced By

- [Erlang](erlang.md)
- [Common Lisp](common_lisp.md)
- [Scheme](scheme.md)
- [Maclisp](maclisp.md)
- [Clojure](clojure.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Positioned as niche (a language used in a specific field). It continues to be used by a segment of the developer community interested in the Erlang ecosystem.

## Hello World

LFE defines Erlang modules using S-expression syntax.

```lisp
(defmodule hello
  (export (main 0)))

(defun main ()
  (io:format "Hello, World!~n"))
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/LFE_%28programming_language%29)
