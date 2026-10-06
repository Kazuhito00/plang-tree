# ALGOL W

- Year: 1966
- Designer(s): Niklaus Wirth, Tony Hoare
- Paradigm(s): procedural
- Family: algol-pascal

## Problem It Aimed to Solve

ALGOL 60 was an excellent language specification, but it still left much to be desired in practice, including the lack of a string type, awkward handling of record references, and insufficient looping control. In the international standardization process, the trend was moving toward adopting the more ambitious and complex ALGOL 68 proposal, but Wirth and Hoare independently sought to create a solid, easy-to-implement improved version instead. ALGOL W built on ALGOL 60 while adding practical features such as a string type, records (references), and while statements, aiming for an algorithm-description language that suppressed complexity while still standing up to practical use.

## Features

- Built on ALGOL 60's grammar while adding practical data structures such as string types, record types, and references (pointers)
- Introduced more flexible control structures such as the while statement, making everyday programming easier
- Took a clearly different path from ALGOL 68's trend toward excessive complexity, consistently emphasizing ease of implementation and solidity
- Mainly implemented and used for university education and research, and never became a major commercial language
- Wirth later drew on this experience to develop the design of Pascal

## Languages It Was Influenced By

- [ALGOL 60](algol_60.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is historical (a language whose historical role has ended) and is not used in practice today. It is remembered as a language representing the transitional stage from ALGOL 60 to Pascal in efforts to make ALGOL-family languages more practical.

## Hello World

```
begin
    write_string("Hello, World!")
end.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/ALGOL_W)
