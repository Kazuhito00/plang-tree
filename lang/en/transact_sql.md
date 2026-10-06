# Transact-SQL(T-SQL)

- Year: 1984
- Designer(s): Sybase/Microsoft
- Paradigm(s): procedural, declarative
- Family: logic-declarative

## Problem It Aimed to Solve

Standard SQL is a declarative query language based on set operations, and lacked mechanisms for expressing procedural processing such as variable declarations, conditional branches, and loops.

Sybase developed Transact-SQL by adding procedural control structures to SQL, in order to meet the need, in its own database products, to execute business logic combining multiple SQL statements together on the server side without communication between client and server. It was later carried over to Microsoft, which built SQL Server based on Sybase's technology, and became the core language of Microsoft's flagship database product.

## Features

- Adds procedural constructs to standard SQL, such as variable declarations, if/while statements, and exception handling (TRY/CATCH)
- Can store logic on the server side as stored procedures, triggers, and user-defined functions
- Supports row-by-row iteration via cursors
- Deeply integrated with SQL Server, providing a rich set of system functions and metadata operations
- Shares a common Sybase-derived foundation, while having undergone its own extensions since moving under Microsoft
- Actively incorporates extended standard-SQL features such as window functions and recursive CTEs

## Languages It Was Influenced By

- [SQL](sql.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Transact-SQL remains actively used today as the core language of Microsoft SQL Server (and Azure SQL), and continues to see widespread active use in developing stored procedures for enterprise systems. Even amid the shift toward the cloud, it continues to play an important role as a target for migrating existing assets.

## Hello World

```sql
DECLARE @message NVARCHAR(50) = 'Hello, World!';
PRINT @message;
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Transact-SQL)
