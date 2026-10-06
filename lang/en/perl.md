# Perl

- Year: 1987
- Designer(s): Larry Wall
- Paradigm(s): scripting, procedural
- Family: scripting

## Problem It Aimed to Solve

In Unix system administration of the 1980s, it was common to combine AWK or sed for text processing with sh scripts for control flow, but each of these languages had limited functionality, and complex processing required stitching multiple languages together. Larry Wall, drawing also on his background as a linguist, wanted a practicality-first tool that could handle report generation and large-scale text processing within a single language. Championing "working code over elegance," he integrated text-processing capabilities centered on regular expressions as first-class language features.

## Features

- String and text processing capability based on powerful regular expressions
- High flexibility based on the philosophy that "there's more than one way to do it (TMTOWTDI)"
- Abundant reusable assets through CPAN, a massive module repository
- Exploded in popularity as a web backend language during the CGI heyday
- A notation that clearly distinguishes scalars, arrays, and hashes with distinct sigils (`$`, `@`, `%`)

## Languages It Was Influenced By

- [AWK](awk.md)
- [C](c.md)
- [sed](sed.md)
- [Lisp](lisp.md)
- [BASIC](basic.md)


## Languages It Influenced

- [Ruby](ruby.md)
- [Groovy](groovy.md)
- [Python](python.md)
- [PHP](php.md)
- [CoffeeScript](coffeescript.md)
- [Raku](raku.md)
- [PowerShell](powershell.md)
- [Crowbar](crowbar_lang.md)


## Current Status

Perl is now positioned as "legacy," with adoption in new development having declined greatly, but it still runs in existing system-administration scripts and legacy web systems today. It has great historical significance for having built the golden age of text processing and CGI, and the role it played in popularizing regular expressions has been carried forward into many modern languages.

## Hello World

```
print "Hello, World!\n";
```

## External Links

- [Wikipedia (English)](https://en.wikipedia.org/wiki/Perl)
