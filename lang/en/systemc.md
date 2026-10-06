# SystemC

- Year: 1999
- Designer(s): Synopsys, CoWare, Open SystemC Initiative (OSCI)
- Paradigm(s): object-oriented, concurrent, event-driven, systems
- Family: hardware-description

## Problem It Aimed to Solve

SystemC was developed to address the difficulty of hardware/software co-design and high-level architectural exploration using only RTL (register-transfer level) description in VHDL or Verilog. Conventional hardware description languages were strong at detailed structural description of circuits, but ill-suited to examining an entire system's architecture at a high level of abstraction or to flexibly handling the boundary between hardware and software. Multiple EDA vendors therefore jointly developed SystemC as a standard C++ class library, aiming to enable high-level system design, including transaction-level modeling (TLM).

## Features

- Implemented as a C++ class library, so it can be compiled and simulated with an ordinary C++ compiler
- Provides concepts for hardware description—modules, ports, signals—as C++ classes
- Supports transaction-level modeling (TLM), enabling system design at a higher level of abstraction than detailed signal-level description
- Equipped with an event-driven simulation kernel, able to model the behavior of concurrent hardware processes
- Because software and hardware can be described in the same language (C++), it is well suited to hardware/software co-design

## Languages It Was Influenced By

- [C++](c_plus_plus.md)
- [Verilog](verilog.md)
- [VHDL](vhdl.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

SystemC is positioned as an active language, in wide and current use. Standardized as an IEEE standard, it continues to be used today in the fields of high-level modeling for semiconductor design and hardware/software co-verification.

## Hello World

In SystemC, a module is defined as a C++ class, and the `sc_main` function serves as the entry point.

```cpp
#include <systemc.h>

int sc_main(int argc, char* argv[]) {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/SystemC)
