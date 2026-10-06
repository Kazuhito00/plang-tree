# Newspeak

- Year: 2006
- Designer(s): Gilad Bracha
- Paradigm(s): object-oriented, functional
- Family: smalltalk-oop

## Problem It Aimed to Solve

Newspeak was designed by Gilad Bracha (formerly of Sun/Google) with the aim of carrying on the Smalltalk tradition while achieving superior modularity. Many existing languages permitted global namespaces and static dependencies, which posed challenges for code reusability, testability, and isolation. Newspeak treats all classes as nested classes and permits dependencies on the outside world only through explicit injection, a design that prevents uncontrolled access to global state. The language's name is taken from "Newspeak," the language appearing in George Orwell's novel "1984," reflecting a design philosophy of shrinking the language with each revision. Development proceeded with support from Cadence Design Systems, but funding ended in 2009, and only limited development has continued since.

## Features

- Defines all classes as classes nested inside top-level classes, with no global namespace
- Dependencies on external resources are permitted only through explicit injection, such as via constructor arguments, eliminating uncontrolled global access
- Adopts a pure message-send-based object-oriented model inherited from Smalltalk
- Class declarations themselves are treated as message expressions, allowing modules to be composed dynamically
- Its high degree of modularity greatly improves code isolation, testability, and reusability
- Follows a design philosophy of deliberately shrinking the language specification, consisting of only the minimum necessary features

## Languages It Was Influenced By

- [Smalltalk](smalltalk.md)
- [Self](self.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Newspeak is positioned as a niche language. Development scaled back after funding from Cadence Design Systems ended in 2009, but its thoroughgoing modularity design, which eliminates the global namespace, remains a reference point in programming language design research.

## Hello World

```
class Hello = (
  |Transcript|
) (
  run = (
    Transcript show: 'Hello, world!'
  )
)
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Newspeak_%28programming_language%29)
