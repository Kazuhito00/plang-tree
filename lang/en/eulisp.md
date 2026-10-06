# EuLisp

- Year: 1990
- Designer(s): Julian Padget, Harry Bretthauer, Christian Queinnec
- Paradigm(s): functional, object-oriented, procedural
- Family: lisp-scheme

## Problem It Aimed to Solve

As of 1990, there was a desire within the European academic and industrial community to standardize a Lisp that was neither too heavily bound by Common Lisp's past design decisions nor as minimalist as Scheme. EuLisp aimed to deeply integrate object orientation into Lisp and to create a hierarchically structured language that could scale down to embedded devices and up to educational use. What stands out is its adoption of a hierarchical module structure that builds up features from level 0 to level 1, rather than a single monolithic specification, allowing flexible implementation depending on the use case. It was an international collaborative project in which multiple European research institutions worked together on the standardization.

## Features

- Deeply integrates object-oriented mechanisms into the Lisp language core
- A hierarchical structure of level 0 and level 1 lets features be adopted incrementally depending on the use case
- Has a module system that makes it easier to organize the structure of large programs
- Designed with the intention of covering a wide range of uses, from embedded devices to education
- Has an eclectic philosophy that attempts to unify the good parts of multiple Lisp dialects, such as Common Lisp and Scheme

## Languages It Was Influenced By

- [Common Lisp](common_lisp.md)
- [Scheme](scheme.md)
- [Interlisp](interlisp.md)
- [Standard ML](standard_ml.md)
- [Haskell](haskell.md)


## Languages It Influenced

Its direct influence on later languages appears to be limited.


## Current Status

EuLisp is positioned as a niche language used in specific fields. It never achieved widespread adoption, but it continues to be referenced in the context of European language design research.

## Hello World

```
(print "Hello, World!")
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/EuLisp)
