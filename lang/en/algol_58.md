# ALGOL 58

- Year: 1958
- Designer(s): ACM/GAMM Joint Committee, John Backus, Friedrich L. Bauer, Heinz Rutishauser, Klaus Samelson
- Paradigm(s): procedural
- Family: origin

## Problem It Aimed to Solve

In the late 1950s, as computer use spread across different countries and manufacturers, the languages for describing algorithms had also splintered, each machine having its own. This meant that not only was it difficult to port a program written for one computer to another, there was also no common notation for presenting algorithms in academic papers. Europe's GAMM (Society for Applied Mathematics and Mechanics) and America's ACM formed a joint committee to create a "universal language" that could describe and publish scientific and technical computing algorithms independently of any particular machine. Initially called IAL (International Algebraic Language), it built on the practical success of Fortran while aiming for a more mathematical and rigorous notation. This effort was groundbreaking as the first programming language designed through international agreement.

## Features

- The starting point of the ALGOL family, introducing ideas such as block structure and arithmetic-expression notation that would underpin later procedural languages
- A design philosophy that emphasized describing algorithms in a notation close to natural mathematical formulas
- Defined as an abstract "reference language" independent of any particular computer's hardware
- Aimed for more general-purpose and rigorous grammar rules, building on the practical experience of Fortran
- Left many parts unfinished, and was substantially revised just two years later by ALGOL 60

## Languages It Was Influenced By

- [Fortran](fortran.md)


## Languages It Influenced

- [ALGOL 60](algol_60.md)
- [MAD](mad_lang.md)
- [JOVIAL](jovial.md)


## Current Status

ALGOL 58 is historical (a language that has finished its historical role) and was never widely used in practice. However, as the source, via ALGOL 60, of many procedural languages, it is regarded as an important milestone in the history of programming languages.

## Hello World

Since ALGOL 58 itself was never widely implemented, no complete working implementation survives, but an approximation in notation close to its ALGOL successors would look like this.

```
begin
    print("Hello, World!")
end
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/ALGOL_58)
