# SPARQL

- Year: 2008
- Designer(s): W3C
- Paradigm(s): declarative, query
- Family: logic-declarative

## Problem It Aimed to Solve

In the 2000s, the W3C advocated the Semantic Web, an effort to make information on the web interpretable by machines as data with "meaning," and established RDF (triples consisting of subject, predicate, and object) as a general-purpose data model to serve as its foundation. However, without a standard means of actually searching and joining the distributed data expressed as RDF graphs, this model would not have been practical.

So the W3C established SPARQL as a standard query language based on graph pattern matching, playing a role analogous to SQL in relational databases. An important goal was also to allow multiple RDF data sources published by different organizations to be handled crosswise in a single query.

## Features

- Describes RDF triples (subject, predicate, object) as patterns, and searches a graph for data matching them
- Has syntax resembling SQL, such as SELECT and WHERE clauses, making it easy for those with SQL experience to learn
- Supports federated queries that span multiple RDF data sources
- Can perform operations close to relational queries on graph data, such as joining, filtering, aggregating, and sorting across a graph
- Used as the standard means of access to knowledge graphs such as DBpedia and Wikidata
- Can construct results not only as tables but also as RDF graphs themselves (CONSTRUCT)

## Languages It Was Influenced By

- [SQL](sql.md)


## Languages It Influenced

- [Gremlin](gremlin_lang.md)


## Current Status

SPARQL is still actively used today, retaining its status as the standard query language in the fields of knowledge graphs such as DBpedia and Wikidata, and in the Semantic Web and linked data. In recent years, alongside growing interest in graph databases in general, similar querying approaches have also drawn attention in graph stores other than RDF.

## Hello World

SPARQL has no concept of standard output; instead, one executes a query that returns results matching a graph pattern. A minimal example is shown below, binding a string to a variable with `BIND` and returning it with `SELECT`.

```sparql
SELECT ?message
WHERE {
  BIND("Hello, World!" AS ?message)
}
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/SPARQL)
