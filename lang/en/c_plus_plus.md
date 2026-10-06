# C++

- Year: 1985
- Designer(s): Bjarne Stroustrup
- Paradigm(s): procedural, object-oriented, generic
- Family: c-family

## Problem It Aimed to Solve

In the early 1980s, while simulating large-scale distributed systems at Bell Labs, Bjarne Stroustrup wanted to use the class-based abstraction capabilities of Simula while retaining C's execution efficiency and systems-programming power. At the time, C offered few means of structurally organizing large software, while object-oriented languages such as Simula and Smalltalk lagged behind C in execution speed. To combine the strengths of both, Stroustrup first created "C with Classes," which later evolved into C++.

## Features

- Adds object orientation through classes, inheritance, and virtual functions while maintaining a high degree of source-level compatibility with C
- Powerful generic programming through templates and compile-time computation (template metaprogramming)
- A "zero-overhead principle": you don't pay for what you don't use
- Deterministic resource management through RAII (Resource Acquisition Is Initialization)
- A multi-paradigm language that unifies multiple paradigms (procedural, object-oriented, generic, and partly functional)
- Containers and algorithms provided through the Standard Template Library (STL)
- Highly expressive, flexible language features such as operator overloading and multiple inheritance
- Continuous revision of the specification by the ISO standardization committee (C++11/14/17/20/23), which keeps adding modern features
- Progressive introduction of mechanisms that improve safety, such as exception handling and smart pointers

## Languages It Was Influenced By

- [C](c.md)
- [Simula](simula.md)
- [Ada](ada.md)
- [ALGOL 68](algol_68.md)
- [Smalltalk](smalltalk.md)


## Languages It Influenced

- [C#](c_sharp.md)
- [D](d.md)
- [Rust](rust.md)
- [Zig](zig.md)
- [Nim](nim.md)
- [Vala](vala.md)
- [Carbon](carbon.md)
- [Pike](pike.md)
- [WebAssembly](webassembly.md)
- [CUDA](cuda.md)
- [Solidity](solidity.md)
- [PHP](php.md)
- [Lua](lua.md)
- [Java](java.md)
- [Mojo](mojo.md)
- [Sather](sather.md)
- [Chapel](chapel.md)
- [X10](x10.md)
- [SystemVerilog](systemverilog.md)
- [SystemC](systemc.md)
- [UnrealScript](unrealscript.md)
- [Vale](vale_lang.md)
- [Hylo](hylo_lang.md)
- [Halide](halide.md)
- [PowerBuilder](powerbuilder.md)
- [ATS](ats_lang.md)
- [Kuin](kuin_lang.md)


## Current Status

C++ remains a widely used systems programming language in industry today, deployed across game engines, financial trading systems, embedded devices, OS development, and other performance-critical fields. Years of standard revisions (C++11 onward) have kept incorporating modern features, making it an actively evolving language still in current use. At the same time, the sheer complexity of the language specification has itself become a challenge, providing fertile ground for successor-oriented languages such as Rust and Carbon.

## Hello World

```
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/C%2B%2B)
