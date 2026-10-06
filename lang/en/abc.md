# ABC

- Year: 1987
- Designer(s): Leo Geurts, Lambert Meertens, Steven Pemberton
- Paradigm(s): procedural
- Family: scripting

## Problem It Aimed to Solve

In the 1980s, educational and practical languages such as BASIC, Pascal, and AWK had many cumbersome syntactic constraints that made it hard for beginners to focus on the essence of programming. After years of research at CWI (the Dutch national research institute for mathematics and computer science), ABC's developers aimed to let programmers write equivalent programs in roughly a quarter of the lines Pascal would need, by adopting mechanisms such as omitting variable declarations, using indentation for block structure, and unlimited-precision numeric arithmetic. Their biggest goal was to create a high-level language that could be used intuitively even by people who were not professional programmers. Notably, it was designed not merely as an educational toy but as a prototyping language robust enough for practical work. This design philosophy would later have a major influence on the birth of Python.

## Features

- No variable type declarations are needed; a variable becomes usable naturally just by being assigned to
- Uses indentation rather than curly braces or begin/end to express block structure
- Integers have no limit on the number of digits, and arbitrary-precision arithmetic can be performed directly
- Comes with powerful built-in data types such as lists, sets, and tables as standard
- Designed around an interactive environment (a REPL-like execution environment), allowing programs to be written through trial and error
- Simple syntax consisting of commands and their arguments, making it easy for beginners to read

## Languages It Was Influenced By

- [ALGOL 68](algol_68.md)
- [SETL](setl.md)


## Languages It Influenced

- [Python](python.md)


## Current Status

Positioned as historical (a language that has finished its historical role). ABC itself is no longer widely used, but its design philosophy lives on today in the form of Python.

## Hello World

```
WRITE 'Hello, World!'
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/ABC_%28programming_language%29)
