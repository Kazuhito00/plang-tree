# Beatnik

- Year: 2001
- Designer(s): Cliff L. Biffle
- Paradigm(s): procedural
- Family: esoteric

## Problem It Aimed to Solve

Beatnik is an esoteric language built on the idea that seemingly meaningless English prose — something like a beat poem — could be interpreted directly as a program. Each word is scored using the point-calculation rules of the board game Scrabble, and that score (values such as 5 through 17) determines an instruction: stack manipulation, arithmetic, I/O, or conditional branching. It is an experimental, satirical language aimed at making programs look like natural English text, created not for practical use but to enjoy the idea itself that "code can read like poetry."

## Features

- A program's appearance is grammatical English text (or something like poetry or prose), and it does not look like a program at first glance
- Each word is turned into a number using Scrabble's point-calculation rules (the sum of each letter's tile value), and that score is interpreted directly as an instruction
- Only words whose score falls within a certain range function as instructions; all other words are treated as comments and ignored
- Has a stack-based execution model equipped with a full set of basic instructions: arithmetic, comparison, I/O, and conditional branching
- Because countless different words can represent the same instruction, the programmer chooses words that both calculate to the right score and read as sensible English
- Known among esoteric languages as a particularly representative example of the idea of "code that reads like natural language"

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Beatnik holds a niche position, cited within the esoteric-language community as a representative example of the idea of "a program that looks like natural English." It is not used for practical purposes and is strongly characterized as wordplay and a joke.

## Hello World

Because a Beatnik program's behavior is only determined once each word's Scrabble score has been calculated precisely, it is difficult to hand-verify a complete, correctly functioning program with full rigor. As an example illustrating Beatnik's underlying idea, here is a fragment written in the typical style of text that looks like natural English at first glance.

```
Hi. Sing bold songs; cast fine words.
```

To actually make it print "Hello, World!", one must place words whose score corresponds to the output instruction (in the 5-to-17 range) directly before the numeric operations that build up each character code to be printed — word selection is done by repeatedly consulting the Scrabble scoring table.

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Beatnik_%28programming_language%29)
