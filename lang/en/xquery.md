# XQuery

- Year: 2007
- Designer(s): W3C
- Paradigm(s): declarative, query
- Family: logic-declarative

## Problem It Aimed to Solve

From the late 1990s into the 2000s, XML rapidly became the standard format for document exchange and data representation, but there was no unified way to search, extract, and transform tree-structured XML documents, forcing developers to rely on individual implementations using XSLT or general-purpose programming languages.

The W3C set out to define XQuery as a standard language that could declaratively query and transform sets of XML documents, much as SQL does for relational databases, unifying the search and reconstruction of hierarchically structured data. A further goal was to allow queries spanning multiple XML documents or databases to be expressed within a single language.

## Features

- Uses a construct called the FLWOR expression (For, Let, Where, Order by, Return) to iterate over, extract, and format XML data
- Incorporates XPath as the core of its expression language, allowing nodes within an XML tree to be specified via path expressions
- Has a functional character that allows new XML documents to be constructed as query results
- Has an optional static typing mechanism enabling schema-based type validation
- Implemented in native XML databases and in some RDBMS XML extensions
- Comes with a full set of features for handling XML-specific concerns such as namespaces and schema validation

## Languages It Was Influenced By

- [SQL](sql.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

XQuery now occupies a niche position; it never became mainstream, partly because the spread of the JSON format relatively shrank XML usage itself, but it is still used in some native XML databases and document processing systems. It remains a technology in active use in fields where XML retains a strong foothold, such as processing financial transaction messages.

## Hello World

```xquery
xquery version "3.1";

<message>Hello, World!</message>
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/XQuery)
