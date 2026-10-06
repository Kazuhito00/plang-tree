# Fortran

- Year: 1957
- Designer(s): John Backus
- Paradigm(s): procedural, array
- Family: origin

## Problem It Aimed to Solve

In 1950s IBM, a great deal of time spent developing scientific and technical computing programs went into manual assembly-language coding, and the resulting low productivity was seen as a serious problem. The team led by John Backus aimed to create a language that could be written in notation close to mathematical formulas, while still generating machine code whose execution efficiency matched that of assembly code written by hand by expert programmers.

To overturn the conventional wisdom of the time that "high-level languages are easier to write but run slowly," enormous effort was poured into developing an optimizing compiler. The success of this challenge made high-level-language scientific computing a realistic option, and it shaped the very direction of programming language development that followed.

## Features

- Programs can be written in algebraic notation close to mathematical formulas
- Strong at array operations and numerical computation, optimized for scientific/technical computing and engineering simulation
- Included the first practical optimizing compiler, achieving performance comparable to hand-written assembly
- Evolved from an early design centered on GOTO statements to later revisions that added structured control constructs and module features
- Much of the numerical computing software in the HPC (high-performance computing) field is still written in Fortran today
- Fortran 90 and later strengthened array-operation syntax and modules, incorporating modern language features as well

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

- [B](b_language.md)
- [COBOL](cobol.md)
- [ALGOL 60](algol_60.md)
- [PL/I](pl_i.md)
- [BASIC](basic.md)
- [C](c.md)
- [MATLAB](matlab.md)
- [Verilog](verilog.md)
- [SIMSCRIPT](simscript.md)
- [ALGOL 58](algol_58.md)
- [Fortress](fortress.md)
- [Chapel](chapel.md)
- [SAS](sas.md)
- [SISAL](sisal.md)
- [GNU Octave](octave.md)
- [Scilab](scilab.md)
- [SPSS](spss_lang.md)


## Current Status

Fortran remains an active language today, continuing to be used in scientific/technical computing and HPC as the first practical high-level language.

Thanks to the sheer volume of numerical computing assets accumulated over the years, it continues to be adopted in software for new supercomputers, playing a central role in weather forecasting and physics simulations.

## Hello World

```fortran
program hello
    print *, 'Hello, World!'
end program hello
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Fortran)
