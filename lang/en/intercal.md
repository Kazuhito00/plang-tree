# INTERCAL

- Year: 1972
- Designer(s): Don Woods, James Lyon
- Paradigm(s): esoteric, procedural
- Family: esoteric

## Problem It Aimed to Solve

INTERCAL is considered the oldest esoteric language, created in a spirit of parody that deliberately inverted every design "common sense" of existing languages of the time such as Fortran and COBOL. It intentionally ignored textbook principles of good language design, such as simple assignment and clear control structures — the joke was the very act of creating "a language as far from practicality as possible, hard to write and hard to understand." Elements such as the obligation to insert the polite word `PLEASE` before commands, and a specification in which commands are ignored with a certain probability, are scattered throughout as satire of serious language design.

## Features

- Assignment to variables is done with a dedicated symbol resembling `←`, rejecting the very concept of assignment via an ordinary equals sign
- It deliberately lacks loops or conditional branches, instead using a control construct called `COME FROM`, overturning existing conventions
- The compiler scolds you if you don't put `PLEASE` before a command, but also gets angry if you use it too much for being "too polite"
- Part of the program is specified to be randomly ignored with a certain probability
- Even the error messages themselves are crafted as jokes

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

- [Malbolge](malbolge.md)


## Current Status

INTERCAL is classified as esoteric and is not used for practical purposes. It is regarded as the starting point of the esoteric language genre itself, and is passed down as the classic origin that many later joke languages reference.

## Hello World

A long-standing, classic program that prints "Hello, World!" through the roundabout method of assigning character codes to an array one by one and then reading them out to print.

```
DO ,1 <- #13
PLEASE DO ,1 SUB #1 <- #238
DO ,1 SUB #2 <- #108
DO ,1 SUB #3 <- #112
DO ,1 SUB #4 <- #0
DO ,1 SUB #5 <- #64
DO ,1 SUB #6 <- #194
DO ,1 SUB #7 <- #48
PLEASE DO ,1 SUB #8 <- #22
DO ,1 SUB #9 <- #248
DO ,1 SUB #10 <- #168
DO ,1 SUB #11 <- #24
DO ,1 SUB #12 <- #16
DO ,1 SUB #13 <- #162
PLEASE READ OUT ,1
PLEASE GIVE UP
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/INTERCAL)
