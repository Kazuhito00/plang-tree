# Verilog

- Year: 1984
- Designer(s): Phil Moorby
- Paradigm(s): concurrent, declarative
- Family: hardware-description

## Problem It Aimed to Solve

As integrated circuits grew more complex, designers found it increasingly difficult to fully verify the behavior of large-scale digital circuits using only circuit diagrams or breadboard prototypes. If defects were discovered only after a chip was actually manufactured, it resulted in enormous losses of cost and time.

Phil Moorby therefore developed Verilog as a language that could describe a circuit's structure and behavior like software, allowing logical behavior to be verified on a simulator before manufacturing. By adopting a syntax similar to C, it was designed to be easy for existing software engineers to pick up.

## Features

- Multiple circuit blocks operating simultaneously are described as concurrent processes at the module level
- Circuits can be described at different levels of abstraction, from gate level to behavioral level (RTL)
- C-like control constructs (if, for, case, and so on) that make it approachable for software engineers
- Used both for behavioral verification through simulation and for generating actual circuits through logic synthesis
- Standardized as IEEE 1364 and later extended into SystemVerilog
- Combined with logic synthesis tools, the circuits it describes can be implemented directly onto actual chips or FPGAs

## Languages It Was Influenced By

- [C](c.md)
- [Pascal](pascal.md)
- [Ada](ada.md)
- [Fortran](fortran.md)


## Languages It Influenced

- [SystemVerilog](systemverilog.md)
- [SystemC](systemc.md)
- [Chisel](chisel.md)
- [MyHDL](myhdl.md)


## Current Status

Verilog remains widely used today in semiconductor design and verification, and alongside VHDL it holds its position as one of the two major hardware description languages for digital circuit design. In commercial ASIC design and verification flows in particular, its extended version, SystemVerilog, has become the de facto standard.

## Hello World

Since Verilog has no concept of console output, here is a simple module example that just calls `$display` in a simulator.

```verilog
module hello;
  initial begin
    $display("Hello, World!");
  end
endmodule
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Verilog)
