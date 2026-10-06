# SAS

- Year: 1976
- Designer(s): Anthony James Barr, James Goodnight, John Sall, Jane Helwig
- Paradigm(s): procedural, declarative, query
- Family: domain-specific

## Problem It Aimed to Solve

In the late 1960s, North Carolina State University needed software for statistical analysis of agricultural data, but the tools of the time kept data management and statistical analysis separate, making them cumbersome to use. SAS began as a project jointly developed by several universities, aiming to build a system that could handle data reading, transformation, aggregation, and statistical analysis consistently within a single framework. It later became an independent company, SAS Institute, and grew into a platform covering not just statistical analysis but business intelligence in general.

## Features

- Combines a procedural syntax for data manipulation, called the "DATA step," with a declarative syntax for statistical analysis and report generation, called the "PROC step"
- Treats large volumes of observational data as a "dataset" of rows and columns, describing transformations, filters, and aggregations on it
- Comes standard with a huge set of procedures covering everything from statistical analysis to report generation and charting
- Also integrates SQL-like query functionality (PROC SQL), supporting relational data operations as well
- Widely used in fields such as finance, pharmaceuticals, and government where auditability and compliance are emphasized

## Languages It Was Influenced By

- [Fortran](fortran.md)
- [PL/I](pl_i.md)
- [SQL](sql.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

SAS remains in wide, active use. It continues to be used as a standard tool in fields requiring regulatory compliance, such as clinical trial data analysis in the pharmaceutical industry and risk analysis at financial institutions.

## Hello World

Here is an example that selects a string with a `PROC SQL` `SELECT` statement and writes it to the log.

```sas
DATA _NULL_;
    PUT 'Hello, World!';
RUN;
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/SAS_%28software%29)
