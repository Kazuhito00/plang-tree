# UCSD Pascal

- Year: 1977
- Designer(s): Kenneth Bowles
- Paradigm(s): procedural
- Family: algol-pascal

## Problem It Aimed to Solve

In the 1970s, microcomputers and university minicomputers varied enormously in architecture from one model to another, making it difficult to run the same source code across different machines. Kenneth Bowles at UCSD believed a common execution environment was needed—one unaffected by the proliferation of competing hardware—and developed the p-System virtual machine along with a Pascal compiler and lightweight operating system running on top of it. By compiling source code into an intermediate code called p-code, it achieved highly portable program execution independent of the underlying machine. This design philosophy is said to have later influenced the Java virtual machine as well.

## Features

- Compiles source code into an intermediate bytecode called p-code, executed on the p-System virtual machine
- The virtual machine layer gives it high portability: the same p-code can run across different CPUs and machines as long as a corresponding p-System is available
- Provided not merely as a Pascal language implementation but as a lightweight operating system, p-System, including an editor and file system
- Extended standard Pascal with a string type and a unit (module) facility, making it suitable for practical application development
- Widely adopted by educational institutions and individual users, notably through an Apple II version, and used in early commercial software development

## Languages It Was Influenced By

- [Pascal](pascal.md)


## Languages It Influenced

- [Turbo Pascal](turbo_pascal.md)


## Current Status

UCSD Pascal is a language whose historical role has ended, and it is not adopted for new development today. However, its design philosophy of ensuring portability through an intermediate-code virtual machine is regarded as a forerunner of ideas that later carried through to the Java virtual machine, among others.

## Hello World

Following standard Pascal syntax, the code is written as a `begin`–`end.` block after a `program` declaration.

```
program HelloWorld;
begin
  writeln('Hello, world.')
end.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/UCSD_Pascal)
