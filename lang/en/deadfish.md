# Deadfish

- Year: 2006
- Designer(s): Jonathan Todd Skinner
- Paradigm(s): procedural
- Family: esoteric

## Problem It Aimed to Solve

Deadfish was created as an experiment to see just how far the features of an esoteric programming language could be stripped down while still remaining a "programming language." Starting from a subset of HQ9+, it is built on the joke premise of constructing a language from only four instructions: increment, decrement, square, and output. It has no input facility and is specialized purely for output, and is said to have taken only about an hour to create. Practicality was never the intent; the name comes from the designer's remark that "programming in it is as painful as smelling a rotten fish's head."

## Features

- Consists of only four instructions (`i` = increment, `d` = decrement, `s` = square, `o` = output), an extremely minimal design
- A simple execution model in which instructions are applied sequentially to a single accumulator — there is only one piece of state
- Has the unusual property that when the accumulator's value reaches a specific value (-1 or 256), it is automatically reset to 0
- Output is the raw integer value itself, not characters; it cannot directly display strings or text
- Has no input instruction at all; execution runs to completion using only the instruction sequence embedded in the program
- Often cited as a representative example of "minimalism" among esoteric languages, stripping away even more than HQ9+

## Languages It Was Influenced By

- [HQ9+](hq9_plus.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Deadfish holds a niche position, known within the esoteric-language community as an example of just how minimal an instruction set can be while still constituting a language. It is not used for practical purposes and is mostly mentioned as a joke or an educational topic.

## Hello World

Because Deadfish outputs raw integer values rather than characters, it cannot directly display the string "Hello, World!". As a representative example, shown below is a program that increments the accumulator to 8 and then squares it to output 64.

```
iiiiiiiiso
```

## External Links

No Wikipedia article was found.
