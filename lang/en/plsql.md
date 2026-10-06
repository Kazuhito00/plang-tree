# PL/SQL

- Year: 1991
- Designer(s): Oracle
- Paradigm(s): procedural, declarative
- Family: logic-declarative

## Problem It Aimed to Solve

SQL was designed as a declarative query language based on set operations, and it was not well suited to expressing complex business logic involving conditional branching, loops, and variables. As a result, assembling processing that spanned multiple SQL statements on the application side increased network round-trip overhead, which was inefficient both in terms of performance and manageability.

Oracle developed PL/SQL, an extension language that built procedural control structures into SQL, allowing complex business logic to be executed directly inside the database server as stored procedures. This eliminated the need to exchange SQL statements repeatedly between client and server, allowing entire processes to be completed on the server side.

## Features

- Embeds SQL statements within a block structure, combining them with procedural control such as if statements, loops, and exception handling
- Can store processing inside the database server as stored procedures, functions, and triggers
- Uses cursors to iterate over query results row by row
- Has syntax influenced by an exception-handling mechanism and strong typing inherited from Ada
- Reduces communication between client and server, improving processing performance on Oracle DB
- Groups related procedures and variables together as PL/SQL packages, allowing management on a per-module basis

## Languages It Was Influenced By

- [SQL](sql.md)
- [Ada](ada.md)
- [Pascal](pascal.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

PL/SQL continues to be actively used today as the core extension language of the Oracle database, and it remains in active operation in the core systems of many enterprises, including those in finance and manufacturing.

## Hello World

```plsql
BEGIN
  DBMS_OUTPUT.PUT_LINE('Hello, World!');
END;
/
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/PL/SQL)
