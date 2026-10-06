# XSLT

- Year: 1998
- Designer(s): World Wide Web Consortium (W3C), James Clark
- Paradigm(s): declarative, functional, pattern-matching
- Family: domain-specific

## Problem It Aimed to Solve

As XML documents began to spread, the need to transform an XML document into another XML format, into HTML, or into plain text, rapidly grew. The W3C and its lead designer, James Clark, brought the ideas of DSSSL (Document Style Semantics and Specification Language), which had handled style transformation for SGML documents, into the world of XML, and sought to build a declarative transformation mechanism based on templates and pattern matching. The aim was to let document transformations be described simply by mapping structural patterns on the input side to templates on the output side, without writing a program procedurally.

## Features

- Transformation rules (stylesheets), themselves written in XML, declaratively transform an input XML document into another format
- Takes a style based on templates and pattern matching, describing transformation rules that apply when a node matching a particular structure is found
- Appropriate templates are applied automatically as the tree structure is traversed recursively, without needing to explicitly write the order in which transformation rules apply
- Has variables, functions, and conditional branching, allowing transformation logic to be built on functional-language-like ideas (side-effect-free expression evaluation)
- The mechanism for selecting nodes is factored out into a separate specification, XPath, with the two working together

## Languages It Was Influenced By

No direct linguistic ancestors have been identified.


## Languages It Influenced

- [XPath](xpath.md)


## Current Status

XSLT is active (a language in wide, current use) and remains the standard for transforming XML documents. Its presence as a mainstream web technology has faded somewhat alongside the decline of XML usage itself, but it is still active in fields such as enterprise systems and document processing.

## Hello World

```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <xsl:text>Hello, World!</xsl:text>
  </xsl:template>
</xsl:stylesheet>
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/XSLT)
