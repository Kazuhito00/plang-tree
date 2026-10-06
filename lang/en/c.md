# C

- Year: 1972
- Designer(s): Dennis Ritchie
- Paradigm(s): procedural, systems
- Family: c-family

## Problem It Aimed to Solve

In the early 1970s, Bell Labs was writing the Unix operating system in PDP-7/PDP-11 assembly language, which meant a complete rewrite every time the hardware changed. Existing high-level languages such as Fortran and COBOL were oriented toward numerical computation and business data processing, and were inefficient for the low-level control—pointer arithmetic and direct memory manipulation—that OS development required. Dennis Ritchie therefore added static types and structures to Ken Thompson's B language, designing C as a portable language that retained efficiency close to assembly. In 1973 the Unix kernel was in fact rewritten in C, setting a precedent for portable OS development that followed.

## Features

- Static typing and a lightweight syntax let the compiler generate efficient machine code for each target architecture
- Direct memory manipulation and hardware control through pointers
- Aside from its standard library, the language specification is very small, making it easy to implement and enabling it to be ported to many platforms
- Has a preprocessor, functions, and structures, but no object orientation or garbage collection
- The philosophy of "write what you need yourself" keeps abstraction costs to a minimum
- Assumes manual memory allocation and deallocation, keeping runtime overhead close to zero
- Standardized by ANSI/ISO (C89, C99, C11, C17, C23, etc.), maintaining backward compatibility over the long term
- Provides basic low-level abstraction building blocks such as function pointers and unions

## Languages It Was Influenced By

- [B](b_language.md)
- [ALGOL 68](algol_68.md)
- [BCPL](bcpl.md)
- [PL/I](pl_i.md)
- [Fortran](fortran.md)


## Languages It Influenced

- [C++](c_plus_plus.md)
- [Objective-C](objective_c.md)
- [D](d.md)
- [Go](go.md)
- [Zig](zig.md)
- [Vala](vala.md)
- [Pike](pike.md)
- [CUDA](cuda.md)
- [OCaml](ocaml.md)
- [Perl](perl.md)
- [Python](python.md)
- [PHP](php.md)
- [Lua](lua.md)
- [JavaScript](javascript.md)
- [AWK](awk.md)
- [Pony](pony.md)
- [occam](occam.md)
- [Crystal](crystal.md)
- [Wolfram Language](wolfram_language.md)
- [Verilog](verilog.md)
- [csh(C Shell)](csh.md)
- [HSP(Hot Soup Processor)](hsp.md)
- [Odin](odin.md)
- [Newsqueak](newsqueak.md)
- [Limbo](limbo.md)
- [Alef](alef.md)
- [Brook](brook.md)
- [GLSL](glsl.md)
- [Whiley](whiley.md)
- [Chapel](chapel.md)
- [UPC](upc.md)
- [Terra](terra.md)
- [Chicken Scheme](chicken_scheme.md)
- [FreeBASIC](freebasic.md)
- [SISAL](sisal.md)
- [ISPC](ispc.md)
- [HLSL](hlsl.md)
- [Cg](cg_lang.md)
- [Progress ABL (OpenEdge)](progress_abl.md)
- [GNU Octave](octave.md)
- [AMPL](ampl_lang.md)
- [Crowbar](crowbar_lang.md)
- [Diksam](diksam_lang.md)


## Current Status

C remains a living systems-description language, still used as the implementation foundation for OS kernels, embedded devices, and many language runtimes. The vast majority of today's major languages have inherited C's syntax or philosophy, directly or indirectly, making it one of the most influential languages in the history of programming. Despite a design nearly half a century old, it remains irreplaceable in domains that demand performance and closeness to the hardware.

## Hello World

```
#include <stdio.h>

int main(void) {
    printf("Hello, World!\n");
    return 0;
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/C_%28programming_language%29)
