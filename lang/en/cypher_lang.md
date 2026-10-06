# Cypher

- Year: 2011
- Designer(s): Andrés Taylor
- Paradigm(s): declarative, query, pattern-matching
- Family: logic-declarative

## Problem It Aimed to Solve

The Neo4j graph database needed an efficient way to query interconnected data represented as nodes and relationships (edges). Conventional SQL was designed around tables and joins, which made it poorly suited to the kind of traversal that graph structures require. Andrés Taylor set out to design a new syntax that preserved SQL's readability while letting nodes and relationships be expressed visually through parentheses and arrows. The result was a language in which graph patterns could be written intuitively using a MATCH clause. Cypher was later released as openCypher and went on to form the basis of the ISO GQL (Graph Query Language) standard.

## Features

- A pattern-matching syntax that represents nodes and relationships visually, ASCII-art style, using parentheses `()` and arrows `-->`
- A declarative query structure built from SQL-like keywords such as MATCH, WHERE, and RETURN
- Flexible modeling through labels on nodes, types on relationships, and properties (key-value pairs) on both
- The ability to create, update, and delete graph data within the same language, via CREATE, MERGE, SET, and DELETE
- Concise expression of multi-hop relationship traversal through variable-length path syntax (e.g., `*1..5`)
- Openness as openCypher, which has been adopted by several graph database products beyond Neo4j

## Languages It Was Influenced By

- [SQL](sql.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

Cypher is an actively used language today (status: active), remaining widely used in the graph database field, centered on Neo4j. Its openCypher specification has also been incorporated into the drafting of the ISO GQL standard, giving it an important role in the standardization of graph queries.

## Hello World

```cypher
RETURN "Hello, World!" AS greeting;
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Cypher_%28query_language%29)
