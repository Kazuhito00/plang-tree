# SystemVerilog

- Year: 2002
- Designer(s): Co-Design Automation, Accellera
- Paradigm(s): procedural, object-oriented, concurrent, event-driven
- Family: hardware-description

## Problem It Aimed to Solve

SystemVerilog was developed to address the problem that conventional Verilog lacked sufficient expressive power for increasingly large and complex chip design and functional verification. In particular, the verification process demanded an advanced verification language with object-oriented features comparable to C++ or Java. Building on Co-Design Automation's Superlog language, SystemVerilog was extended under the leadership of Accellera (an industry standardization body), aiming to let a single language cover both hardware design description and functional verification. This sought to create an environment in which designers and verification engineers could collaborate on the same language foundation.

## Features

- Extends Verilog's syntax and semantics, adding a more powerful type system (structs, unions, interfaces)
- Has object-oriented programming features (classes, inheritance, polymorphism), enabling the construction of advanced verification environments such as UVM
- Integrates an assertion description language (SVA), allowing design properties to be formally described and verified
- Supports testbench generation based on randomization constraints, powerfully driving the automation of functional verification
- Has the uniformity of handling design description (RTL) and verification code within the same file and the same language specification

## Languages It Was Influenced By

- [Verilog](verilog.md)
- [VHDL](vhdl.md)
- [C++](c_plus_plus.md)
- [Java](java.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

SystemVerilog is positioned as an actively and widely used language (status: active). It has been standardized as an IEEE standard and continues to be widely used today as the standard language for design and functional verification in the semiconductor industry.

## Hello World

In SystemVerilog, output is written using the `$display` system task inside an `initial` block.

```systemverilog
module hello;
  initial begin
    $display("Hello, World!");
  end
endmodule
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/SystemVerilog)
