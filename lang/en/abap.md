# ABAP

- Year: 1983
- Designer(s): SAP
- Paradigm(s): procedural, object-oriented, query
- Family: domain-specific

## Problem It Aimed to Solve

ABAP (Advanced Business Application Programming) was developed as a dedicated language for efficiently writing reports and business logic for the SAP R/2 system, which handled core operations such as accounting and materials management for large enterprises. In enterprise core systems, processing that generates reports from large volumes of database records plays a central role, but with general-purpose programming languages alone, integrating database operations with business processing tended to become cumbersome. ABAP was therefore designed as a language that could describe database operations (in syntax resembling SQL) and business processing logic in an integrated way. Object-oriented features were incorporated later, aiming to improve the development and maintainability of large-scale ERP systems.

## Features

- Integrates a database-access syntax called Open SQL into the language, allowing queries to SAP's databases to be written directly in code
- Has dedicated syntax for report creation (event-driven processing for forms/reports), specialized for report development in core business systems
- Later ABAP Objects made object-oriented programming possible, supporting classes, inheritance, and interfaces
- Tightly integrated with SAP's own massive framework (SAP NetWeaver), underpinning enterprise application development as a whole
- Has advanced features required for large-scale enterprise development, such as dynamic programming and RTTI (runtime type information)

## Languages It Was Influenced By

- [COBOL](cobol.md)
- [SQL](sql.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

It is positioned as an active language, widely used today. Large enterprises around the world use SAP products as their core systems, and ABAP remains widely and indispensably used for their maintenance and customization.

## Hello World

In ABAP, output to the screen is done with the `WRITE` statement.

```abap
WRITE 'Hello, World!'.
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/ABAP)
