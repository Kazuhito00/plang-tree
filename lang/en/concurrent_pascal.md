# Concurrent Pascal

- Year: 1975
- Designer(s): Per Brinch Hansen
- Paradigm(s): procedural, concurrent, systems
- Family: algol-pascal

## Problem It Aimed to Solve

In the early 1970s, no high-level language existed for safely writing concurrent programs—such as operating systems or real-time monitoring programs—on shared-memory computers. Per Brinch Hansen built on Pascal to introduce the concept of the monitor, a mechanism for synchronization and mutual exclusion, making it possible to write inter-process communication in a structured form. Through an implementation for the DEC PDP-11, it laid the theoretical and practical groundwork for safe concurrent programming.

## Features

- Builds process creation and management into the language specification, on top of Pascal's procedural syntax
- Introduces a structure called the monitor, which safely manages access to shared resources through mutual exclusion and condition synchronization
- Allows inter-process communication to be expressed in a structured form, rather than through pointers or arbitrary memory operations
- Demonstrated that OS kernels and real-time monitoring programs could be written safely in a high-level language
- Emphasizes type safety, improving the reliability of systems programming by eliminating dangerous low-level operations

## Languages It Was Influenced By

- [ALGOL 60](algol_60.md)
- [Simula](simula.md)
- [Pascal](pascal.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Concurrent Pascal is a historical language and is not in actual use today. However, its idea of synchronization via monitors is said to have left a substantial mark on later concurrent programming languages and OS theory.

## Hello World

Concurrent Pascal's syntax is based on the Pascal family. Below is a code example giving a rough sense of it.

```pascal
program HelloWorld;
begin
  writeln('Hello, world')
end.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Concurrent_Pascal)
