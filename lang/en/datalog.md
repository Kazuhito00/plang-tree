# Datalog

- Year: 1977
- Designer(s): The academic community
- Paradigm(s): logic, declarative
- Family: logic-declarative

## Problem It Aimed to Solve

Prolog was a highly expressive logic programming language, but because it allowed free use of recursion and side effects, it suffered from problems such as queries that might never terminate, or results that varied depending on execution order—making it awkward to use as a database query language. Database researchers wanted to keep Prolog's logic-programming framework while deliberately restricting its expressiveness, so that every query would always halt in finite time and would mesh well with relational database query-optimization techniques. Datalog was organized by the academic community by drawing on both the relational model of SQL and the ideas of logic programming.

## Features

- Deliberately restricts expressiveness by removing certain features from Prolog, such as negation and complex term structures
- Theoretically guarantees that every query always terminates in finite time
- Describes a knowledge base as a set of facts and rules, and excels at recursive queries
- Highly compatible with relational database query-optimization techniques
- In recent years it has been reappraised as a query language for program analysis and graph databases

## Languages It Was Influenced By

- [Prolog](prolog.md)
- [SQL](sql.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Datalog is positioned as a niche language (status: niche), adopted as the query foundation for program analysis tools and some graph database products, as a limited Prolog-derived language for databases that guarantees termination.

## Hello World

Datalog has little notion of "printing to the screen," so a representative minimal example consisting of facts, rules, and a query is shown instead.

```
parent(xerces, brooke).
parent(brooke, damocles).

ancestor(X, Y) :- parent(X, Y).
ancestor(X, Y) :- parent(X, Z), ancestor(Z, Y).

?- ancestor(xerces, X).
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Datalog)
