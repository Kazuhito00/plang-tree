# MyHDL

- Year: 2003
- Designer(s): Jan Decaluwe
- Paradigm(s): procedural, concurrent, generic
- Family: hardware-description

## Problem It Aimed to Solve

The verbose grammar and high learning cost of Verilog/VHDL formed a barrier to entry for hardware design. MyHDL tried to solve this problem by bringing Python's conciseness and rich ecosystem to hardware description. By allowing algorithm design and hardware implementation to move back and forth within the same language and the same environment, it aimed to make the development cycle from simulation to implementation more efficient.

## Features

- Uses Python's syntax and libraries as-is, modeling hardware's concurrent behavior through generator functions
- Code written in Python can be converted into Verilog or VHDL code
- Python's rich testing and verification tools (such as unit test frameworks) can be applied directly to hardware verification
- Algorithms can be described at a high level of abstraction and progressively refined into a hardware implementation
- Provided as an open-source library, used in practical FPGA development and in education

## Languages It Was Influenced By

- [Python](python.md)
- [Verilog](verilog.md)
- [VHDL](vhdl.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

MyHDL is positioned as a niche language used in a specific field. It continues to be used persistently in FPGA development, digital circuit design education, and prototyping.

## Hello World

Being a hardware description language, MyHDL's typical "Hello World" example prints a message during simulation.

```python
from myhdl import block, instance, delay

@block
def hello_world():
    @instance
    def say_hello():
        print("Hello, World!")
        yield delay(10)
    return say_hello

inst = hello_world()
inst.run_sim()
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/MyHDL)
