# ClojureScript

- Year: 2011
- Designer(s): Rich Hickey, David Nolen
- Paradigm(s): functional, concurrent, scripting
- Family: lisp-scheme

## Problem It Aimed to Solve

ClojureScript arose from the desire to apply the persistent data structures and functional, concurrency-oriented design philosophy of Clojure, which runs on the JVM, directly to environments where JavaScript runs, such as the browser. In frontend development at the time, developers were forced to use completely different languages and paradigms on the server side and the client side, making it difficult to share code and maintain consistent design thinking. Rich Hickey and David Nolen created a system that compiles Clojure code to JavaScript, aiming to eliminate the divide between frontend and backend implementations by using the same language and the same way of thinking on both the server and the client.

## Features

- Follows Clojure's syntax and semantics almost exactly, with persistent data structures and immutability as the foundation of the language
- Compiles to JavaScript via the Google Closure Compiler, benefiting from advanced optimization and dead-code elimination
- Has mechanisms (such as reader conditionals) for sharing code between Clojure and ClojureScript, allowing both server and client to be built from the same codebase
- Runs Clojure's macro system within a compile-time Clojure environment, enabling powerful metaprogramming not available in JavaScript
- Has an ecosystem of functional UI frameworks, such as reagent and re-frame, which wrap React

## Languages It Was Influenced By

- [Clojure](clojure.md)
- [JavaScript](javascript.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

ClojureScript is in active, widespread use. It has established itself as an option for frontend development within the Clojure community, and continues to be used for practical web application development together with frameworks such as reagent and re-frame.

## Hello World

Using the `println` function inherited from Clojure, it outputs a string to, for example, the browser's console.

```clojure
(println "Hello, World!")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/ClojureScript)
