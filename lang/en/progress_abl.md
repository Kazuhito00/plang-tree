# Progress ABL (OpenEdge)

- Year: 1984
- Designer(s): Progress Software Corporation
- Paradigm(s): procedural, object-oriented, query
- Family: domain-specific

## Problem It Aimed to Solve

In the early 1980s, enterprise business applications were developed in specialist languages such as COBOL for mainframes and C for UNIX minicomputers, and the cost and time required for development were a major challenge. Progress Software Corporation aimed to provide an architecture-independent platform integrating a 4GL with a database, enabling business staff without computer science expertise to quickly build business applications. As inexpensive hardware such as the IBM PC spread, this also answered the demand for a unified development foundation that could run across diverse environments. The language later incorporated object-oriented features as OpenEdge ABL and remains in active use in enterprise systems today.

## Features

- The database engine and the language runtime are integrated, allowing data access to be written without direct awareness of SQL
- As a 4GL (fourth-generation language), it provides high-level syntax specialized for data manipulation in addition to procedural constructs
- With the evolution into OpenEdge ABL, object-oriented class syntax was added, improving the maintainability of large-scale business systems
- Architecture-neutral intermediate code ensures portability across different operating system environments
- Includes declarative elements for efficiently generating screen forms and report output

## Languages It Was Influenced By

- [COBOL](cobol.md)
- [C](c.md)
- [SQL](sql.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is active, and remains widely used today in core enterprise business systems across finance, manufacturing, and government. It continues to be maintained and extended by Progress Software Corporation as the OpenEdge platform.

## Hello World

```
MESSAGE "Hello, world" VIEW-AS ALERT-BOX.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/OpenEdge_Advanced_Business_Language)
