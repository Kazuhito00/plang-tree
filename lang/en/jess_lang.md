# Jess

- Year: 1995
- Designer(s): Ernest Friedman-Hill
- Paradigm(s): logic, declarative, object-oriented
- Family: logic-declarative

## Problem It Aimed to Solve

In the mid-1990s, Sandia National Laboratories wanted to embed rule-based inference capability into applications built in Java, but the C-based CLIPS was difficult to integrate with a Java environment. Jess was developed to solve this: it extends the CLIPS language as a superset and runs on the Java Virtual Machine as a rule engine that can directly manipulate Java objects as facts. It continuously evaluates rule sets against fact sets through Rete-algorithm pattern matching, and was used as a commercial expert-system shell.

## Features

- Extends CLIPS's language specification as a superset, remaining almost fully compatible with CLIPS rule syntax
- Runs on the Java Virtual Machine (JVM) and can integrate directly with applications written in Java
- Treats Java objects directly as "facts," allowing a rule's conditions and actions to operate directly on Java fields and methods
- Continuously evaluates rule sets against fact sets through Rete-algorithm pattern matching, performing efficient forward-chaining inference
- Used as a commercial expert-system shell, embedded into business rule engines and decision-support systems
- Inherits Lisp-like parenthesized syntax while being designed to connect seamlessly with Java's object model

## Languages It Was Influenced By

- [CLIPS](clips_lang.md)
- [Java](java.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Jess holds a niche position, still used today in some Java-based business systems and decision-support systems. It has a track record as a commercial rule engine, but it has receded from the mainstream with the rise of later open-source rule engines such as Drools.

## Hello World

```
(printout t "Hello, World!" crlf)
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Jess_%28programming_language%29)
