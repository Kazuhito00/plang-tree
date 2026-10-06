# SQL

- Year: 1974
- Designer(s): Donald Chamberlin, Raymond Boyce
- Paradigm(s): declarative, query
- Family: logic-declarative

## Problem It Aimed to Solve

In 1970, IBM researcher E. F. Codd published a groundbreaking theory called the "relational model," which treated data as a collection of tables, but the language for actually manipulating it was pure mathematical relational algebra and relational logic, which was difficult for business staff without specialized knowledge to use. Donald Chamberlin and Raymond Boyce, also of IBM, wanted to let anyone query this relational model using syntax close to English sentences, such as "SELECT," "FROM," and "WHERE." This language, initially called SEQUEL (Structured English QUEry Language), was later renamed SQL and became established as the standard query language for relational database management systems (RDBMS).

## Features

- A declarative language in which you simply declare "what you want," leaving "how to retrieve it" to the DBMS
- Data manipulation expressed in syntax close to English, such as SELECT, INSERT, UPDATE, and DELETE
- Based on the relational model, expressing queries as set operations over tables (relations)
- Standardized by ISO/ANSI and used in common across nearly all RDBMS products
- Each vendor has added its own procedural extensions (such as PL/SQL and Transact-SQL)

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

- [PowerShell](powershell.md)
- [Datalog](datalog.md)
- [SPARQL](sparql.md)
- [XQuery](xquery.md)
- [PL/SQL](plsql.md)
- [Transact-SQL(T-SQL)](transact_sql.md)
- [ABAP](abap.md)
- [SAS](sas.md)
- [Cypher](cypher_lang.md)
- [Gremlin](gremlin_lang.md)
- [KQL (Kusto Query Language)](kusto_lang.md)
- [Progress ABL (OpenEdge)](progress_abl.md)
- [PowerBuilder](powerbuilder.md)


## Current Status

It remains an active language today (status: active), continuing to be used behind almost every business system and web service as the de facto sole standard language for querying relational databases.

## Hello World

SQL has little notion of "printing to the screen," so a representative minimal query is shown instead.

```sql
SELECT 'Hello, World!';
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/SQL)
