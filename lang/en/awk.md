# AWK

- Year: 1977
- Designer(s): Alfred Aho, Peter Weinberger, Brian Kernighan
- Paradigm(s): scripting, pattern-matching
- Family: scripting

## Problem It Aimed to Solve

In the Unix environment of the 1970s, it was inefficient to write assembly or C code each time for routine tasks such as tallying log files or processing field-delimited text data. Alfred Aho, Peter Weinberger, and Brian Kernighan of Bell Labs tried to create a language that could complete text processing and aggregation tasks in a few lines of script, using the simple and clear model of "execute the corresponding action when a pattern matches." The language's name comes from the initials of the three designers.

## Features

- A concise, line-oriented programming model of "pattern { action }"
- Automatically splits input into fields, which can be referenced as `$1`, `$2`, and so on
- Supports associative arrays by default, allowing aggregation processing to be written concisely
- Places regular-expression pattern matching at the core of the language
- Still used daily today as part of Unix pipelines for log analysis and CSV processing

## Languages It Was Influenced By

- [C](c.md)
- [SNOBOL](snobol.md)
- [sed](sed.md)


## Languages It Influenced

- [Perl](perl.md)
- [Tcl](tcl.md)
- [JavaScript](javascript.md)
- [AMPL](ampl_lang.md)


## Current Status

Even now, nearly half a century after its debut, AWK remains "active," continuing to be used daily as a standard tool on Unix-family operating systems for log analysis and pipeline processing. It also has great historical significance for having given rise to Perl, a large-scale successor language.

## Hello World

```
BEGIN { print "Hello, World!" }
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/AWK)
