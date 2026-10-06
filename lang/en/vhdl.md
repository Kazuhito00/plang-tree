# VHDL

- Year: 1983
- Designer(s): United States Department of Defense (VHSIC Program)
- Paradigm(s): concurrent, declarative
- Family: hardware-description

## Problem It Aimed to Solve

In the early 1980s, the U.S. Department of Defense was commissioning integrated circuits from numerous private companies as part of the VHSIC (Very High Speed Integrated Circuit) program, but because each company used its own proprietary design documents and notation, discrepancies in specification interpretation arose, and it was difficult to maintain and reuse design assets over the long term.

The Department of Defense therefore established VHDL (VHSIC Hardware Description Language) as a standard description language that could unambiguously share circuit specifications between clients and manufacturers, and that could be verified and reused into the future. In designing it, the syntax of Ada — already adopted as the standard language for military and defense systems — was used as a base, and a rigorous specification premised on long-term maintainability was required.

## Features

- Its Ada-derived rigorous syntax and strong typing allow large-scale circuit specifications to be described unambiguously
- Models concurrent circuit behavior on a per-process basis, allowing simultaneous changes across multiple signals to be handled
- Can describe circuits at multiple levels of abstraction, from the gate level up to abstract behavioral levels
- Supports both verification through simulation and implementation through logic synthesis
- Standardized as IEEE 1076 and used long-term, particularly in the defense and aerospace fields
- Modularization through packages and libraries makes it easy to reuse large-scale design assets

## Languages It Was Influenced By

- [Ada](ada.md)
- [Pascal](pascal.md)


## Languages It Influenced

- [SystemVerilog](systemverilog.md)
- [SystemC](systemc.md)
- [Chisel](chisel.md)
- [MyHDL](myhdl.md)


## Current Status

VHDL remains an actively used language, widely employed today in semiconductor design and verification. Alongside Verilog, it is one of the two major hardware description languages for digital circuit design, and it enjoys particularly high trust in the defense and aerospace fields. It also continues to be adopted as a standard in university education and public institution projects, especially in Europe.

## Hello World

VHDL has no concept of console output either, so a simple entity example that just executes a `report` statement in a simulator is shown below.

```vhdl
entity hello is
end entity hello;

architecture behavior of hello is
begin
  process
  begin
    report "Hello, World!";
    wait;
  end process;
end architecture behavior;
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/VHDL)
