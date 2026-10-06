# XPath

- Year: 1999
- Designer(s): World Wide Web Consortium (W3C)
- Paradigm(s): query, declarative
- Family: domain-specific

## Problem It Aimed to Solve

As XML became widespread, a common notation was needed for selecting arbitrary nodes, under specified conditions, from the tree structure of an XML document (the hierarchy of elements, attributes, and text nodes). At the time, several related specifications, such as XSLT and XPointer, were each trying to define their own way of referencing nodes, and there was a risk that this would lead to a proliferation of similar-but-different notations across specifications. The W3C tried to unify this basic operation of node selection within XML documents by establishing a single path-expression language that these specifications could all share.

## Features

- Path expressions separated by slashes allow nodes to be selected by traversing the tree structure of an XML document hierarchically
- The concept of axes, based on attributes, parent-child relationships, and sibling relationships, allows flexible relative positioning of nodes
- Predicates (conditional expressions) can be specified in square brackets, narrowing selection down to only the nodes that satisfy a given condition
- Comes with a set of functions for operating on strings, numbers, and booleans, enabling expression evaluation beyond mere path specification
- Serves as a foundational technology referenced in common by multiple XML-related specifications, including XSLT, XQuery, and parts of XML Schema

## Languages It Was Influenced By

- [XSLT](xslt.md)


## Languages It Influenced

- [Gremlin](gremlin_lang.md)


## Current Status

Active (a language currently in wide use); it is still widely used today as the standard means for selecting nodes within XML documents, inside XSLT, XQuery, and the XML-processing libraries of various programming languages.

## Hello World

XPath is an expression language for selecting and evaluating values, and has no concept of printing a string by itself, but a minimal expression evaluating a string literal looks like this:

```
"Hello, World!"
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/XPath)
