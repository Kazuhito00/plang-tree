# Assembly Language

- Year: 1949
- Designer(s): Kathleen Booth, the EDSAC team, and others
- Paradigm(s): procedural
- Family: origin

## Problem It Aimed to Solve

On early computers, programs had to be written directly in machine code as sequences of binary or hexadecimal numbers, and manually memorizing and converting instruction codes and addresses was extremely tedious and error-prone. Pioneering computer teams such as those working on Cambridge University's EDSAC devised the idea of expressing instructions with meaningful mnemonics (ADD, JMP, etc.) and delegating the translation into machine code to a conversion program called an assembler.

This freed humans from the burden of memorizing bit patterns and allowed programs to be written with far fewer mistakes. Kathleen Booth is considered one of the people involved in devising assembly notation for the EDSAC1 and ARC2 around 1949, and she is known as one of the earliest contributors to this field.

## Features

- Corresponds one-to-one with the CPU's instruction set, giving very high execution efficiency and freedom to control hardware
- Mnemonics and labels make it more readable and writable for humans than machine code
- Syntax and instructions differ by architecture (x86, ARM, etc.), so it has no portability
- The programmer directly controls memory management and register allocation
- Still used today as the output target of high-level language compilers, or for writing the lowest layers of operating systems and drivers
- Also shown as the result of analyzing executable binaries in debuggers and reverse-engineering tools

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It remains an active notation today (status: active), continuing to be used in OS development, embedded devices, places where extreme performance is required, reverse engineering, and more.

Even after high-level languages became mainstream, it retains an indispensable place as the ultimate means of directly controlling hardware.

## Hello World

An example in x86 assembly (NASM syntax, invoking system calls on Linux).

```asm
section .data
    msg db "Hello, World!", 0xA
    len equ $ - msg

section .text
    global _start

_start:
    mov eax, 4          ; sys_write
    mov ebx, 1          ; stdout
    mov ecx, msg
    mov edx, len
    int 0x80

    mov eax, 1          ; sys_exit
    mov ebx, 0
    int 0x80
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Assembly_language)
