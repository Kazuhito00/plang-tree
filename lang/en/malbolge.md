# Malbolge

- Year: 1998
- Designer(s): Ben Olmstead
- Paradigm(s): esoteric
- Family: esoteric

## Problem It Aimed to Solve

Malbolge was designed as an extreme thought experiment aimed at "creating a language that is intentionally incomprehensible to both humans and compilers, and that is practically the most difficult to write." The name is taken from the eighth circle of Hell in Dante's Divine Comedy (the realm of malicious fraud), and true to its name, it aims to push the "difficulty of writing" found in existing esoteric languages to an even more extreme limit. It has a mechanism whereby the meaning of instructions changes according to execution position and cryptographic transformations, and its design is so counterintuitive that even its own designer is said to have initially been unable to hand-write a working program.

## Features

- Its instruction codes change each time through a cryptographic formula (a pseudo-random-like transformation), making it extremely difficult to predict behavior by reading the code statically
- Its first "Hello World" program was not hand-written by a human but discovered through automated search using a genetic algorithm
- Adopts a counterintuitive internal representation, including a memory model based on ternary digits (trits)
- Through a self-modifying execution model, the instructions themselves change with every execution
- Frequently cited as "the most difficult programming language to write"

## Languages It Was Influenced By

- [INTERCAL](intercal.md)
- [Befunge](befunge.md)
- [Brainfuck](brainfuck.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Malbolge is positioned as esoteric and is not used for practical purposes. With a reputation as "theoretically Turing-complete but practically almost impossible to write," it is treated as being in a class of its own even within the esoteric-language community.

## Hello World

It outputs "Hello, World!" through a single cryptic, cipher-like line of code that is nearly impossible for a human to interpret the meaning of. As noted above, this kind of program is known to have been discovered not by hand but through automated search methods such as genetic algorithms.

```
(=<`#9]~6ZY327Uv4-QsqpMn&+Ij"'E%e{Ab~w=_:]Kw%o44Uqp0/Q?xNvL:`H%c#DD2^WV>gY;dts76qKJImZkj
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Malbolge)
