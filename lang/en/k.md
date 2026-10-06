# K

- Year: 1993
- Designer(s): Arthur Whitney
- Paradigm(s): array, functional
- Family: numeric-scientific

## Problem It Aimed to Solve

In the financial industry, there was a need to aggregate and analyze massive volumes of time-series data, such as stock prices and exchange rates, at speeds where even millisecond-level delays were unacceptable. Arthur Whitney, who had also been involved in the development of APL, wanted to push the conciseness of array programming even further and create a language that maximized memory efficiency and execution speed through a notation pared down to the absolute minimum amount of code. By making heavy use of single-character operators and implicit array operations, he aimed to make it possible to process queries against enormous time-series databases with astonishingly short code, and to do so at high speed.

## Features

- An extremely concise notation centered on single-character symbolic operators
- A processing model premised on bulk operations over entire arrays, with excellent memory efficiency and execution speed
- Built in as the core language of kdb+, a time-series database used in the financial industry
- Inherits the array-programming philosophy of APL while evolving into its own distinct language system
- Very steep learning curve, used mainly among specialized financial engineers

## Languages It Was Influenced By

- [APL](apl.md)
- [Scheme](scheme.md)


## Languages It Influenced

- [Q (kdb+)](q_kdb.md)
- [Shakti](shakti_lang.md)


## Current Status

K is positioned as a niche language (status: niche), and it remains in active use today as an APL-family language for high-speed time-series data processing in the financial industry, through commercial products such as kdb+.

## Hello World

```
`0:"Hello, world!\n"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/K_%28programming_language%29)
