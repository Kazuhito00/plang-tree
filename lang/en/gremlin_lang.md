# Gremlin

- Year: 2009
- Designer(s): Marko A. Rodriguez
- Paradigm(s): declarative, functional, query
- Family: logic-declarative

## Problem It Aimed to Solve

With graph databases and graph processing engines proliferating, developers faced the burden of learning a different query language for every product. The Apache TinkerPop project needed a unified graph traversal language that could run against both OLTP-style graph databases and OLAP-style graph processing systems. Marko A. Rodriguez designed Gremlin as a language capable of traversing graphs in both imperative and declarative styles. This made it possible to manipulate graphs using a shared traversal concept from multiple host languages, including Java, Python, and Groovy.

## Features

- A traversal-oriented syntax that walks nodes and edges as a chain of steps (`.out()`, `.in()`, `.has()`, and so on)
- Combines imperative style (stepping through procedurally) and declarative style (expressing a pattern) as needed
- Runs on the Java Virtual Machine and is hosted from multiple languages, including Java, Groovy, Python, and .NET
- Serves as the Apache TinkerPop standard, supported by numerous graph databases and processing systems, both OLTP and OLAP
- Supports both OLAP-style traversal for parallel, distributed processing of an entire graph and OLTP-style traversal for single queries

## Languages It Was Influenced By

- [XPath](xpath.md)
- [SPARQL](sparql.md)
- [SQL](sql.md)
- [Java](java.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Gremlin occupies a niche position (status: niche), remaining in use in graph databases such as JanusGraph that adopt the Apache TinkerPop ecosystem. In the graph query field it has been somewhat overshadowed by Cypher and GQL, but it retains support among users who value its generality across multiple graph engines.

## Hello World

In the Gremlin console, the `inject` step returns a value directly as the traversal's result.

```groovy
g.inject('Hello, World!')
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Gremlin_%28query_language%29)
