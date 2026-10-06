# Q (kdb+)

- Year: 2003
- Designer(s): Arthur Whitney
- Paradigm(s): array, functional, query
- Family: numeric-scientific

## Problem It Aimed to Solve

In the early 2000s, the finance industry needed to ingest and analyze huge volumes of time-series (tick) data at high speed, but existing SQL-family databases lacked the performance and expressiveness required. Building on the K language he had himself designed, Arthur Whitney developed kdb+, a columnar database capable of handling both in-memory and on-disk data, along with Q, a readable query language for operating on it. It is optimized for financial time-series analysis, including tasks such as matching bid and ask prices.

## Features

- Builds on the K language while providing a more readable, English-like keyword syntax for queries
- Tightly integrated with the columnar database kdb+, enabling high-speed access to large volumes of data
- Handles in-memory and on-disk data transparently through the same language syntax
- Retains the conciseness of array and functional programming while also supporting SQL-like query expressions
- Includes built-in aggregation and join operations specialized for time-series data, and is highly regarded in the field of tick-data analysis

## Languages It Was Influenced By

- [APL](apl.md)
- [A+](a_plus.md)
- [K](k.md)
- [Scheme](scheme.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Q is positioned as a niche language, remaining in persistent use in specific areas such as tick-data analysis and algorithmic trading systems within the finance industry. Its adoption as a general-purpose language has been limited, but its performance advantages within its target domain make it hard to replace.

## Hello World

Q can display a string directly on the console.

```q
"Hello, world"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Q_%28programming_language_from_Kx_Systems%29)
