# LabVIEW

- Year: 1986
- Designer(s): National Instruments
- Paradigm(s): visual, dataflow
- Family: educational-visual

## Problem It Aimed to Solve

Electrical and mechanical engineers working with measurement and control instrumentation were not necessarily skilled in text-based programming languages, and developing instrument-control programs in a language like C posed a significant barrier to entry.

National Instruments reasoned that if measurement programs could be built with a feel similar to wiring up a schematic or circuit diagram, then even people who were not specialist programmers could develop data-acquisition and instrument-control software. This led to LabVIEW, a "dataflow" visual programming environment in which icons are connected by wires to represent the flow of data.

## Features

- Programs (VIs: Virtual Instruments) are built by connecting icons representing functions with wires
- A dataflow model with strong affinity for concurrent processing, where execution proceeds as data arrives
- Rich integration with measurement instruments, sensors, and DAQ (data acquisition) hardware
- Lets you build the GUI (front panel) and processing logic (block diagram) simultaneously without writing text code
- Created VIs can be embedded as components into other VIs, allowing hierarchical program construction
- Has developed mainly specialized for scientific/technical computing and industrial measurement and control

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

LabVIEW continues to be used actively today in the measurement and control field, with a broad track record of adoption in industrial applications combined with National Instruments' measurement hardware.

Its distinctive ability to build specialized measurement programs without writing text code sets it apart from visual programming environments in other fields.

## Hello World

Since LabVIEW is a visual language that connects icons with wires, the following shows the block-diagram configuration as pseudocode in place of text code.

```
[Place a single String Indicator on the front panel]
[Create a String Constant on the block diagram and enter the value "Hello, World!"]
[Wire the output terminal of the string constant to the input terminal of the string indicator]
[Pressing the Run button (arrow icon) displays "Hello, World!" on the front-panel indicator]
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/LabVIEW)
