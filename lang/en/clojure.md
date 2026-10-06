# Clojure

- Year: 2007
- Designer(s): Rich Hickey
- Paradigm(s): functional, concurrent
- Family: Lisp/Scheme family

## Problem It Aimed to Solve

In the 2000s, the spread of multi-core CPUs increased demand for multithreaded programming, but in many languages the sharing of mutable state was a hotbed of bugs through data races and lock complexity. Rich Hickey wanted to create a modern Lisp dialect that could handle concurrency safely by making immutable data structures the default, while also taking advantage of the existing Java ecosystem (libraries and the JVM). It was an attempt to combine the expressiveness of traditional Lisp with the JVM as a practical execution platform, and it also placed great importance on being able to directly leverage the vast existing base of Java libraries.

Hickey had previously attempted to port a Lisp dialect to the JVM, but rather than simply porting an existing language, he sought a more fundamental solution by designing an entirely new language from scratch built around immutability and a functional style.

## Features

- All data structures are immutable by default (persistent data structures)
- Runs on the Java Virtual Machine (JVM) and is interoperable with Java libraries
- Provides several mechanisms for safe state management, such as Software Transactional Memory (STM) and atoms
- Inherits an S-expression-based syntax and metaprogramming through macros
- Also extends to other runtimes, such as via ClojureScript
- Sequence abstraction allows diverse data structures to be handled through a unified interface
- Supports asynchronous, channel-based concurrency through core.async

## Languages It Was Influenced By

- [Lisp](lisp.md)
- [Java](java.md)
- [Common Lisp](common_lisp.md)
- [C#](c_sharp.md)
- [Scheme](scheme.md)
- [Racket](racket.md)


## Languages It Influenced

- [Elixir](elixir.md)
- [LFE](lfe.md)
- [Fennel](fennel.md)
- [ClojureScript](clojurescript.md)


## Current Status

Clojure is an "active" language that has gained solid support, particularly in backend development that emphasizes concurrency and immutable data. As a modern Lisp built around immutability, it has carved out a unique position within the JVM ecosystem, and its use in frontend development via ClojureScript continues to expand.

## Hello World

```
(println "Hello, World!")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Clojure)
