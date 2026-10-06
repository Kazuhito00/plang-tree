# Piet

- Year: 2001
- Designer(s): David Morgan-Mar
- Paradigm(s): esoteric, visual
- Family: esoteric

## Problem It Aimed to Solve

Piet was born from a purely artistic motivation: to make source code itself function as an abstract painting. Its name comes from the painter Piet Mondrian, and by executing a grid of colored pixels as "source code," it embodies a thought experiment that makes program and painting coincide. Practical programming convenience is entirely disregarded; instead, the challenge lies in how much complex processing can be achieved within the constraint of "can you write a program that is also a beautiful, or meaningful, picture."

## Features

- The source code is a pixel grid, such as a PNG image, and instructions are determined by the sequence of colors and the magnitude of color changes
- The instruction pointer moves by tracing blocks of color (codel blocks), and changes in hue and lightness correspond to stack operations and arithmetic operations
- Since there are countless possible color arrangements for writing the same logic, it is possible to write a program that is "beautiful as a picture"
- Like Befunge, it uses two-dimensional space as its field of execution, but instructions are expressed through the even more abstract medium of color
- The more complex a working Piet program is, the more it tends to be deliberately appreciated as a work of art

## Languages It Was Influenced By

- [Befunge](befunge.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Piet is positioned as an esoteric language and is not used for practical purposes. It is often introduced, particularly within the more art-oriented corners of the esoteric-language world, as a representative example of fusing programming with visual art.

## Hello World

Because a Piet program is itself an image, it is written not as a code string but as an arrangement of colors. Below is the actual "Hello, world!" program (a 10×10 codel grid) bundled with the Piet interpreter "npiet", reproduced as-is.

![Piet Hello World program (10x10 codel grid)](assets/piet_hello_world.svg)

- The color of each cell (codel), and the magnitude of the hue/lightness change between adjacent codels, correspond to instructions such as pushing numeric values onto the stack or performing arithmetic operations
- Black codels act as walls that the instruction pointer cannot cross, controlling the execution path
- The numeric value corresponding to the ASCII code of each character to output is assembled on the stack by repeatedly pushing, multiplying, and adding, going through color changes that each "output as a character"
- Once the instruction pointer has no direction left to proceed in, the program halts

## External Links

No Wikipedia article was found.
