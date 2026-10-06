# Fennel

- Year: 2016
- Designer(s): Calvin Rose
- Paradigm(s): functional, scripting
- Family: lisp-scheme

## Problem It Aimed to Solve

Lua is a fast and easily embeddable language, but it had the shortcoming of lacking metaprogramming features such as macros, and could not offer flexible syntactic extension via S-expressions. Fennel was designed as a lightweight alternative with Lisp's syntax and macro system, while still directly leveraging Lua's runtime and its rich FFI (foreign function interface). Practicality in domains where Lua is widely used, such as game development and embedded applications, is also emphasized. Because it compiles to Lua code, it can integrate seamlessly with the existing Lua ecosystem.

## Features

- Adopts Lisp-style syntax based on S-expressions, while generating plain Lua code once compiled
- Supports compile-time macros, providing metaprogramming flexibility that Lua lacks
- Can use Lua's tables and functions directly, integrating transparently with existing Lua libraries
- Has almost zero runtime overhead; the generated Lua code runs at speeds equivalent to native Lua code
- Used in Lua-based game engines such as LÖVE and in embedded environments
- Comes with a REPL, well suited to interactive development and hot-reload workflows

## Languages It Was Influenced By

- [Lua](lua.md)
- [Lisp](lisp.md)
- [Clojure](clojure.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Fennel is an actively used language, gaining particular support within the Lua-based game development community. It is chosen by developers who want to leverage the Lua ecosystem while also wanting the expressive power of Lisp-style macros.

## Hello World

```fennel
(print "Hello, World!")
```

## External Links

No Wikipedia article was found.
