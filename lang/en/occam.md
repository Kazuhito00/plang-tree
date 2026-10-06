# occam

- Year: 1983
- Designer(s): David May (INMOS)
- Paradigm(s): concurrent, procedural
- Family: concurrent-actor

## Problem It Aimed to Solve

In the early 1980s, the British semiconductor company INMOS was developing a microprocessor called the "transputer," designed to be connected in multiples to perform parallel computation. However, the mainstream languages of the time generally assumed sequential execution and were inadequate for drawing out the transputer's inherent parallel processing power. David May took the theory of Communicating Sequential Processes (CSP), proposed by Tony Hoare, and translated it almost directly into a language specification, designing "occam," in which independent processes communicate synchronously via channels, enabling parallel programming directly tied to the transputer's hardware structure.

## Features

- Based on CSP theory, independent processes exchange messages synchronously through explicit channels
- The `PAR` (parallel execution) and `SEQ` (sequential execution) constructs explicitly express concurrency and sequencing
- Designed to correspond directly to the transputer's hardware (its on-chip communication links)
- Strictly restricts variable aliasing to prevent unintended side effects between processes
- Has a small language specification and was also used for education and research

## Languages It Was Influenced By

- [ALGOL 60](algol_60.md)
- [Pascal](pascal.md)
- [BCPL](bcpl.md)
- [C](c.md)


## Languages It Influenced

- [Go](go.md)


## Current Status

occam itself became a historical language as the transputer declined commercially, but as an early example of implementing CSP theory as an actual language, it occupies an important place in the history of concurrent programming languages.

## Hello World

```
#USE "course.lib"
PROC hello.world (CHAN BYTE scr!)
  SEQ
    out.string("Hello World!*n", 0, scr)
:
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Occam_%28programming_language%29)
