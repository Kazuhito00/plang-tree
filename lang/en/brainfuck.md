# Brainfuck

- Year: 1993
- Designer(s): Urban Müller
- Paradigm(s): esoteric
- Family: esoteric

## Problem It Aimed to Solve

Urban Müller created this language as an extreme thought experiment into how few instructions could be pared down while still achieving Turing completeness. The goal was to show that programs could be written with as few as eight instructions, and also to make the compiler itself as small as possible (the first implementation is said to have been 240 bytes), with practicality disregarded from the outset. It also carried a self-deprecating aim of being "a language for writing programs that are hard to read and hard to write," and precisely because of this extremity it became the symbolic representative of the esoteric language (esolang) genre.

## Features

- Operates only on a sequence of byte-sized memory cells pointed to by a pointer, with just 8 instructions (`><+-.,[]`)
- No variable names or functions; all computation is expressed purely through moving the pointer and incrementing/decrementing cells
- The only means of control flow is a simple loop structure using `[` and `]`
- Source code deliberately becomes a string of symbols that ignores human readability
- It has also been shown theoretically that, despite its minimal design, it is Turing complete
- Easy to create derivatives and variants, and it became the foundation for many subsequent joke languages

## Languages It Was Influenced By

- [FALSE](false_lang.md)


## Languages It Influenced

- [Malbolge](malbolge.md)
- [Ook!](ook.md)
- [JSFuck](jsfuck.md)


## Current Status

Positioned as esoteric (an esolang), it is not used for practical purposes. As the archetype of a minimal Turing-complete language, it is the best known within the esoteric-language community and continues to be used as a reference point and model when creating new esoteric languages.

## Hello World

Brainfuck source code is deliberately hard to read, but the following is the most commonly cited standard program for printing "Hello World!".

```
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Brainfuck)
