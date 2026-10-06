# Forth

- Year: 1970
- Designer(s): Charles Moore
- Paradigm(s): stack-based, procedural
- Family: origin

## Problem It Aimed to Solve

While working on telescope control systems for an observatory, Charles Moore needed a language that could be developed interactively and quickly, even in a memory-constrained environment with limited memory and processing power. Existing languages had a heavy compile-and-run cycle, which was poorly suited to trial-and-error work while operating equipment.

Moore adopted a computation model based on Reverse Polish Notation, exchanging values through a stack, and designed the language so that small functions called "words" could be defined and combined interactively. This produced a development environment that was extremely lightweight yet let results be tested immediately. This high degree of interactivity directly matched the on-site need to build programs while operating real hardware.

## Features

- A Reverse Polish Notation (postfix notation) computation model that exchanges values through a stack
- A concatenative style in which programs are built by combining small units called "words"
- Built around an interactive development environment (REPL), making trial and error on real hardware easy
- An extremely lightweight implementation, well suited to memory-constrained embedded environments
- Adopted in real control systems ranging from observatory telescope control to NASA space probes
- Lexical rules simple enough that parsing is almost unnecessary, allowing the implementation itself to be extremely small

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

- [REBOL](rebol.md)
- [Factor](factor.md)
- [PostScript](postscript.md)
- [Befunge](befunge.md)
- [FALSE](false_lang.md)
- [Mind](mind.md)
- [POP-11](pop_11.md)
- [Michelson](michelson.md)
- [Joy](joy_lang.md)
- [Cat](cat_lang.md)
- [Kitten](kitten_lang.md)


## Current Status

Forth is now positioned as a niche-use language (status: niche). It continues to be used in practice in extremely resource-constrained environments, such as firmware for embedded devices and spacecraft.

Because its implementation is easy to build, it also retains a devoted following among hobbyists as a language for writing custom operating systems and bootloaders.

## Hello World

```forth
: HELLO ." Hello, world!" ;
HELLO
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Forth_%28programming_language%29)
